import React, { useState } from "react";
import styles from "../Styles/ContactUsPage.module.css";
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import mailImage from '../assets/images/mail.jpg'; // Example images, replace with actual paths
import phoneImage from '../assets/images/phone.jpg';
import locationImage from '../assets/images/location.jpg';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // EmailJS email sending logic
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_USER_ID' // Replace with your EmailJS User ID
    ).then(() => {
      setEmailSent(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }).catch((error) => {
      console.error("Error sending email:", error);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactSection}>
        <div className={styles.contactMethod}>
          <div className={styles.method}>
            <img src={mailImage} alt="Send Us Mail" className={styles.methodImage} />
            <FaEnvelope className={styles.icon} />
            <h3>Send Us Mail</h3>
            <p>info@zfcanada.com</p>
          </div>
          <div className={styles.method}>
            <img src={phoneImage} alt="Call Us" className={styles.methodImage} />
            <FaPhoneAlt className={styles.icon} />
            <h3>Call Us</h3>
            <p>(+1) 905 858 5589</p>
          </div>
          <div className={styles.method}>
            <img src={locationImage} alt="Visit Our Office" className={styles.methodImage} />
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Visit Our Office</h3>
            <p>214-808 Britannia Rd W</p>
            <p>Mississauga, Ontario</p>
            <p>L5V 0A7</p>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>Drop Us A Line</h2>
          <p>ZFC will arrange your consultation totally free of cost</p>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Text*"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.submitBtn}>Contact Us</button>
          </form>
          {emailSent && <p className={styles.successMessage}>Your message has been sent!</p>}
        </div>

        <div className={styles.footerSection}>
          <div className={styles.officeInfo}>
            <h3>Office Hours</h3>
            <p>Monday - Friday: 9:30 am - 5:30 pm</p>
            <p>Saturday: By Appointment/Request Only</p>
            <p>Sunday: CLOSED</p>
          </div>

          <div className={styles.addressInfo}>
            <h3>Address</h3>
            <p>808 Britannia Road West</p>
            <p>Suite 214</p>
            <p>Mississauga, Ontario</p>
            <p>L5V 0A7</p>
          </div>
        </div>

        <div className={styles.mapSection}>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.4947495697816!2d-79.685963723362!3d43.587651179123975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a1eb722fbbf%3A0x6631786e04b2c0ba!2s808%20Britannia%20Rd%20W%2C%20Mississauga%2C%20ON%20L5V%200A7%2C%20Canada!5e0!3m2!1sen!2sin!4v1693261116057!5m2!1sen!2sin"
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
