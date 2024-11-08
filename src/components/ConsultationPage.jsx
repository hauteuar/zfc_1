import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { addDays, isWeekend, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import styles from "../Styles/ConsultationPage.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GOOGLE_CALENDAR_API_KEY = "YOUR_GOOGLE_CALENDAR_API_KEY";
const HOLIDAY_CALENDAR_ID = "en.canadian#holiday@group.v.calendar.google.com";

const ConsultationPage = () => {
  const [meetingType, setMeetingType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [holidays, setHolidays] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  const slotsRef = useRef(null);
  const formRef = useRef(null);

  // Fetch Canadian holidays using Google Calendar API
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${HOLIDAY_CALENDAR_ID}/events?key=${GOOGLE_CALENDAR_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        const holidayDates = data.items.map((event) => new Date(event.start.date));
        setHolidays(holidayDates);
      })
      .catch((error) => console.error("Error fetching holidays:", error));
  }, []);

  // Check if a date is a holiday
  const isHoliday = (date) => {
    return holidays.some(
      (holiday) =>
        holiday.getDate() === date.getDate() &&
        holiday.getMonth() === date.getMonth() &&
        holiday.getFullYear() === date.getFullYear()
    );
  };

  // Filter selectable dates to exclude weekends and holidays
  const filterDate = (date) => {
    return !isWeekend(date) && !isHoliday(date) && date >= new Date();
  };

  const generateTimeSlots = (date) => {
    const slots = [];
    const start = new Date(date);
    start.setHours(10, 0, 0, 0);
    const end = new Date(date);
    end.setHours(17, 0, 0, 0);

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

  const addMinutes = (date, minutes) => new Date(date.getTime() + minutes * 60000);

  useEffect(() => {
    if (selectedDate) {
      const slots = generateTimeSlots(selectedDate);
      setAvailableSlots(slots);
      setSelectedSlot(null);

      // Scroll to slots section
      slotsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedSlot) {
      // Scroll to form section
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSlot]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
      setFormData({ firstName: "", lastName: "", email: "" });
      setSelectedDate(null);
      setAvailableSlots([]);
      setSelectedSlot(null);
    } catch (error) {
      console.error("Error storing meeting request:", error);
      toast.error("There was an error submitting your request.");
    }
  };

  const handleMeetingSelection = (type) => {
    setMeetingType(type);
    setMessage("");
    setSelectedDate(null);
    setAvailableSlots([]);
    setSelectedSlot(null);
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.sidebar}>
        <div
          className={`${styles.sidebarItem} ${
            meetingType === "online" ? styles.selectedItem : ""
          }`}
          onClick={() => handleMeetingSelection("online")}
        >
          Online Consultation
        </div>
        <div
          className={`${styles.sidebarItem} ${
            meetingType === "direct" ? styles.selectedItem : ""
          }`}
          onClick={() => handleMeetingSelection("direct")}
        >
          Direct Consultation
        </div>
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>Schedule Your Consultation</h1>

        {meetingType === "online" && (
          <>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              filterDate={filterDate}
              minDate={new Date()}
              inline
              className={styles.datePicker}
              placeholderText="Select a date"
            />

            <div ref={slotsRef}>
              {availableSlots.length > 0 && (
                <div className={styles.timeSlots}>
                  <h3>Available Time Slots</h3>
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
            </div>

            <div ref={formRef}>
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
          </>
        )}

        {meetingType === "direct" && (
          <div className={styles.directConsultationInfo}>
            <p>
              Call <a href="tel:9058585589">905-858-5589</a> or email{" "}
              <a href="mailto:info@zfcanada.com">info@zfcanada.com</a> to
              schedule a direct consultation.
            </p>
          </div>
        )}

        {message && <p className={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

export default ConsultationPage;
