import React, { useState } from 'react';
import styles from './Footer.module.css'; // Importing CSS for the footer

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);
  
  // Modal content based on the selected link
  const handleModalContent = (content) => {
    setModalContent(content);
  };

  // Close modal
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© Copyrights 2024 ZFC Immigration. All Rights Reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#!" onClick={() => handleModalContent("Privacy Policy")}>Privacy Policy</a>
          <a href="#!" onClick={() => handleModalContent("Terms of Use")}>Term Of Use</a>
          <a href="#!" onClick={() => handleModalContent("Support")}>Support</a>
        </div>
      </div>

      {/* Modal Section */}
      {modalContent && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>{modalContent}</h3>
            <p>
              We abide by Canadian laws and regulations. Customer data collected from the website is governed by Canadian privacy laws. If you contact us, your information is securely stored as per the Canadian data privacy rules.
            </p>
            <button className={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
