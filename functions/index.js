// functions/index.js

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { google } = require("googleapis");
const sgMail = require("@sendgrid/mail");
const { format } = require('date-fns'); // Import format

admin.initializeApp();

const db = admin.firestore();

// Configure SendGrid
const SENDGRID_API_KEY = functions.config().sendgrid.key;
const SENDER_EMAIL = functions.config().sendgrid.sender;

sgMail.setApiKey(SENDGRID_API_KEY);

// Retrieve Google Calendar credentials from environment variables
const CLIENT_EMAIL = functions.config().google.calendar.client_email;
const PRIVATE_KEY = functions.config().google.calendar.private_key.replace(/\\n/g, '\n');
const CALENDAR_ID = functions.config().google.calendar.calendar_id;

// Initialize Google Calendar API
const jwtClient = new google.auth.JWT(
  CLIENT_EMAIL,
  null,
  PRIVATE_KEY,
  ['https://www.googleapis.com/auth/calendar']
);

const calendar = google.calendar({ version: 'v3', auth: jwtClient });

/**
 * Trigger when a meeting is confirmed.
 * Creates a Google Calendar event with a Google Meet link.
 */
exports.onMeetingConfirmed = functions.firestore
  .document('meetingRequests/{meetingId}')
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();

    // Check if status changed to "confirmed"
    if (before.status !== "confirmed" && after.status === "confirmed") {
      const meetingId = context.params.meetingId;
      // const meetingDate = after.date.toDate(); // Firestore Timestamp to JS Date
      const meetingSlot = after.slot ? after.slot.toDate() : null; // Firestore Timestamp to JS Date
      const clientEmail = after.email;
      const clientName = `${after.firstName} ${after.lastName}`;
      const meetingType = after.meetingType;

      if (meetingType === "Online Consultation" && meetingSlot) {
        // Define event start and end times
        const startTime = meetingSlot;
        const endTime = addMinutes(startTime, 30); // 30-minute meeting

        // Create event object
        const event = {
          summary: `Consultation with ${clientName}`,
          description: `Online consultation with ${clientName}.`,
          start: {
            dateTime: startTime.toISOString(),
            timeZone: "America/Toronto",
          },
          end: {
            dateTime: endTime.toISOString(),
            timeZone: "America/Toronto",
          },
          attendees: [
            { email: clientEmail },
            { email: "info@zfcanada.com" }, // Admin email
          ],
          conferenceData: {
            createRequest: {
              requestId: `meet-${meetingId}-${Date.now()}`,
              conferenceSolutionKey: {
                type: "hangoutsMeet",
              },
            },
          },
        };

        try {
          // Authenticate the client
          await jwtClient.authorize();

          // Insert the event into Google Calendar
          const response = await calendar.events.insert({
            calendarId: CALENDAR_ID,
            resource: event,
            conferenceDataVersion: 1,
          });

          const meetLink = response.data.hangoutLink;

          // Update Firestore with Meet link
          await db.collection("meetingRequests").doc(meetingId).update({
            meetLink: meetLink,
            calendarEventId: response.data.id,
          });

          // Optional: Send confirmation email with Meet link
          const msg = {
            to: clientEmail,
            from: SENDER_EMAIL,
            subject: "Your Consultation is Confirmed",
            text: `Dear ${clientName},\n\nYour online consultation is confirmed for ${format(startTime, "MMMM dd, yyyy")} at ${format(startTime, "hh:mm a")}.\n\nJoin the meeting here: ${meetLink}\n\nPlease ensure you've sent the Interac payment to info@zfcanada.com.\n\nThank you,\nZF Canada`,
          };

          await sgMail.send(msg);

          // Also send email to admin
          const adminMsg = {
            to: "info@zfcanada.com",
            from: SENDER_EMAIL,
            subject: "New Consultation Confirmed",
            text: `A new consultation has been confirmed.\n\nClient: ${clientName}\nEmail: ${clientEmail}\nDate: ${format(startTime, "MMMM dd, yyyy")} at ${format(startTime, "hh:mm a")}\nMeet Link: ${meetLink}`,
          };

          await sgMail.send(adminMsg);

          console.log(`Google Calendar event created for meeting ID: ${meetingId}`);
        } catch (error) {
          console.error("Error creating Google Calendar event:", error);
          // Optionally, update Firestore with error status
          await db.collection("meetingRequests").doc(meetingId).update({
            calendarError: error.message,
          });
        }
      }
    }

    return null;
  });

/**
 * Utility function to add minutes to a date
 */
const addMinutes = (date, minutes) => {
  return new Date(date.getTime() + minutes * 60000);
};
