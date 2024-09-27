import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookSquare, FaWhatsappSquare, FaLinkedinIn, FaPhoneAlt, FaBars, FaArrowRight } from 'react-icons/fa';
import { GiPassport } from 'react-icons/gi'; // Immigration Icon
import logo from '../assets/images/logo_zfc.jpeg'; // Your logo image
import rcic_logo from '../assets/images/rcic.jpg';
import video1 from '../assets/images/Canada1.mp4';
import "../Styles/Hero.css";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null); // Track which submenu is open  
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (submenu) => {
    setSubmenuOpen(submenuOpen === submenu ? null : submenu); // Toggle sub-menu
  };

  const handlePrivacyAction = (action) => {
    if (action === "accept" || action === "reject") {
      setShowPrivacyPolicy(false);
    }
  };

  return (
    <div>
      <div className="hero-container">
        <video className="hero-video" autoPlay muted loop>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Motion Canvas Overlay with Content */}
        <motion.div
          className="hero-overlay"
          initial={{ width: '0vw' }}
          animate={{ width: '50vw' }}
          transition={{ duration: 2, delay: 0.5 }}  // Smooth entry from right
        >
          <motion.div
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.7 }}  // Fade in slightly after canvas
          >
            <div className="logos-container">
              <img src={logo} alt="Logo" className="logo" />
              <img src={rcic_logo} alt="RCIC_Logo" className="logo" />
            </div>
            <div className="title-container">
              <GiPassport className="immigration-icon" />
              <h2 className="highlight-background">We Speak For You. We Make Law Work For You.</h2>
            </div>

            <h1>IMMIGRATION EXPERTS WITH MORE THAN 20+ YRS OF EXPERIENCE</h1>
            <p className="highlight-background">19,000+ Happy Clients</p>

            <motion.a
              href="/consult"
              className="consult-btn"
              whileHover={{ scale: 1.1 }}
              transition={{ yoyo: Infinity }}
            >
              Consult Now
            </motion.a>

            <div className="social-icons">
              <a href="https://www.facebook.com/people/Zfcanada-Immigration-Services/61559178020720/" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare/>
              </a>
              <a href="https://wa.me/19058585589" target="_blank" rel="noopener noreferrer">
                <FaWhatsappSquare />
              </a>
              <a href="https://ca.linkedin.com/in/zfcanada-immigration-services-417771213?challengeId=AQHqkQzJN5WXGgAAAZHiaknbab344r5aGU-nBcpeBm4WXk1Xn90woYL91tndF3JEC0XSA4JhNUC0Gyqng7bTt2I3DNjv6W88mw&submissionId=48790f36-1245-f417-3d28-3199d2fe275e&challengeSource=AgEH-F4oeQWLaAAAAZHialC3D2uNl3N2zrWOOvLepfwzH3LNU-sDOjz2rAcWzLc&challegeType=AgFZcCn_iRIQtQAAAZHialC6N2eIKZdqauy1TxVlnyZ0ECK57z1Q_gA&memberId=AgF6gVl2iODiOgAAAZHialC9rxcL1iPeIiEIaMNmnbId66s&recognizeDevice=AgEZ1zwpCVYVVwAAAZHialDAW9EL8f4fYvYuyxfugTV8UA0gNd5e" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <div className="phone-box">
                <FaPhoneAlt />
                <p>+1-906-858-5589</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Privacy Policy Bar */}
      {showPrivacyPolicy && (
        <div className="privacy-policy">
          <p>This website follows the Canadian Privacy Policy for data protection. Review the details or customize your experience.</p>
          <div className="privacy-buttons">
            <button onClick={() => handlePrivacyAction("accept")}>Accept</button>
            <button onClick={() => handlePrivacyAction("customize")}>Customize</button>
            <button onClick={() => handlePrivacyAction("reject")}>Reject</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
