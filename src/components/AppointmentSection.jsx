import React, { useState } from "react";
import emailjs from "emailjs-com"; // For sending emails
import styles from "./AppointmentSection.module.css"; // Import CSS module
import logo from "../assets/images/logo.jpeg";

const TrailerSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      e.target,
      "YOUR_USER_ID"
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
      }
    );

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Top Bar with Logo, Address, Phone, and Social Media Links */}
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <img src={logo} alt="ZFC Logo" />
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.contactInfo}>
          <div className={styles.address}>
            <i className="fas fa-map-marker-alt"></i> 214-808 Britannia Rd, W, Mississauga, Ontario, Canada, L5V 0A7
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.phone}>
            <i className="fas fa-phone"></i> +1 906 858 5589
          </div>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <section className={styles.trailerSection}>
        <div className={styles.container}>
          {/* Our Services Section */}
          <div className={styles.servicesSection}>
            <h3>Our Services</h3>
            <ul>
              <li><i className="fas fa-user-tie"></i> Visitor Visa Service</li>
              <li><i className="fas fa-rocket"></i> Startup Visa</li>
              <li><i className="fas fa-briefcase"></i> Business Visa</li>
              <li><i className="fas fa-globe"></i> PNP Programs</li>
              <li><i className="fas fa-plane-departure"></i> Express Entry</li>
            </ul>
          </div>

          {/* Schedule Appointment Form */}
          <div className={styles.appointmentSection}>
            <h3>Schedule Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Text"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className={styles.submitBtn}>Submit</button>
            </form>
          </div>

          {/* About Us Section */}
          <div className={styles.aboutSection}>
            <h3>About Us</h3>
            <p>
              We are located in the Heartland Town Center area – on Britannia just south of Mavis. 
              Mavis and Britannia is our closest major intersection. 
              Click <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">here</a> 
              to be directed to Google Maps for precise instructions.
            </p>
            <a href="mailto:info@zfcanada.com" className={styles.contactBtn}>
              <i className="fas fa-envelope"></i> Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrailerSection;
