// src/components/ConsultationPage.jsx

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addDays, isWeekend, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Ensure Firebase is initialized correctly
import styles from "../Styles/ConsultationPage.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// List of Canadian Holidays (for 2024; update as needed)
const canadianHolidays = [
  new Date(2024, 0, 1),   // New Year's Day
  new Date(2024, 6, 1),   // Canada Day
  new Date(2024, 11, 25), // Christmas Day
  new Date(2024, 11, 26), // Boxing Day
  // Add more holidays as needed
];

const ConsultationPage = () => {
  const [meetingType, setMeetingType] = useState(null); // "online" or "direct"
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  // Function to check if a date is a Canadian holiday
  const isHoliday = (date) => {
    return canadianHolidays.some(
      (holiday) =>
        holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear()
    );
  };

  // Function to filter selectable dates
  const filterDate = (date) => {
    return !isWeekend(date) && !isHoliday(date) && date >= new Date();
  };

  // Generate available 30-minute slots between 10 AM to 5 PM
  const generateTimeSlots = (date) => {
    const slots = [];
    const start = new Date(date);
    start.setHours(10, 0, 0, 0); // 10:00 AM

    const end = new Date(date);
    end.setHours(17, 0, 0, 0); // 5:00 PM

    while (start < end) {
      const slotStart = new Date(start);
      const slotEnd = addMinutes(slotStart, 30);
      slots.push({
        start: slotStart,
        end: slotEnd,
      });
      start.setMinutes(start.getMinutes() + 30);
    }

    return slots;
  };

  // Utility function to add minutes to a date
  const addMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
  };

  // Handle date selection
  useEffect(() => {
    if (selectedDate) {
      const slots = generateTimeSlots(selectedDate);
      setAvailableSlots(slots);
      setSelectedSlot(null); // Reset selected slot when date changes
    }
  }, [selectedDate]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) {
      toast.error("Please select a date and time slot.");
      return;
    }

    try {
      await addDoc(collection(db, "meetingRequests"), {
        ...formData,
        meetingType: "Online Consultation",
        date: selectedDate,
        slot: selectedSlot,
        status: "pending",
        requestedAt: new Date(),
      });

      setMessage(
        "Your consultation request is pending confirmation. Please send an Interac payment of $90 to info@zfcanada.com."
      );

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
      });
      setSelectedDate(null);
      setAvailableSlots([]);
      setSelectedSlot(null);
    } catch (error) {
      console.error("Error storing meeting request: ", error);
      toast.error("There was an error submitting your request.");
    }
  };

  // Handle meeting type selection
  const handleMeetingSelection = (type) => {
    setMeetingType(type);
    setMessage("");
    // Reset all states when changing meeting type
    setSelectedDate(null);
    setAvailableSlots([]);
    setSelectedSlot(null);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <h1 className={styles.pageTitle}>Schedule Your Consultation</h1>

      <div className={styles.meetingOptions}>
        {/* Online Consultation */}
        <div
          className={`${styles.consultationCard} ${
            meetingType === "online" ? styles.selected : ""
          }`}
          onClick={() => handleMeetingSelection("online")}
        >
          <h2>Online Consultation</h2>
          <p>
            <span className={styles.highlight}>Price:</span> $90.00 CAD
          </p>
          <p>A 30-minute online consultation with an Immigration Consultant.</p>
        </div>

        {/* Direct Consultation */}
        <div
          className={`${styles.consultationCard} ${
            meetingType === "direct" ? styles.selected : ""
          }`}
          onClick={() => handleMeetingSelection("direct")}
        >
          <h2>Direct Consultation</h2>
          <p>
            <span className={styles.highlight}>Price:</span> $100.00 CAD
          </p>
          <p>
            Call <a href="tel:9058585589">905-858-5589</a> or email{" "}
            <a href="mailto:info@zfcanada.com">info@zfcanada.com</a> for a
            direct consultation.
          </p>
        </div>
      </div>

      {/* Conditional Rendering Based on Selection */}
      {meetingType === "online" && (
        <div className={styles.onlineConsultation}>
          <h2>Select a Date</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            filterDate={filterDate}
            minDate={new Date()}
            inline
            className={styles.datePicker}
            placeholderText="Select a date"
          />

          {availableSlots.length > 0 && (
            <div className={styles.timeSlots}>
              <h3>Available Time Slots on {format(selectedDate, "MMMM dd, yyyy")}</h3>
              <div className={styles.slotsContainer}>
                {availableSlots.map((slot, index) => (
                  <button
                    key={index}
                    className={`${styles.slotBtn} ${
                      selectedSlot === slot.start ? styles.selectedSlot : ""
                    }`}
                    onClick={() => setSelectedSlot(slot.start)}
                  >
                    {format(slot.start, "hh:mm a")} - {format(slot.end, "hh:mm a")}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedSlot && (
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3>Enter Your Details</h3>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <button type="submit" className={styles.submitBtn}>
                Confirm Consultation
              </button>
            </form>
          )}
        </div>
      )}

      {/* Direct Consultation Instructions */}
      {meetingType === "direct" && (
        <div className={styles.directConsultationInfo}>
          <p>
            Please call <a href="tel:9058585589">905-858-5589</a> or email{" "}
            <a href="mailto:info@zfcanada.com">info@zfcanada.com</a> to schedule a 1-hour direct consultation.
          </p>
        </div>
      )}

      {/* Display message after form submission */}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default ConsultationPage;
