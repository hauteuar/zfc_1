import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaGlobeAmericas, FaPlane, FaTicketAlt, FaCheckCircle, FaCheck } from "react-icons/fa";
import styles from './NextSection.module.css'; // Custom CSS module

const NextSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 19000) {
        setCount(prevCount => prevCount + 100); // Increment by 100 until reaching 18000
      }
    }, 50);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <section className={styles.nextSection}>
      <div className={styles.container}>
        {/* Left side with consultation and counter */}
        <div className={styles.leftContent}>
          <div className={styles.consultationBox}>
            <p>Call For Consultation</p>
            <span>+1 905 858 5589</span>
          </div>

          <div className={styles.servedClient}>
            <h4>Served Client</h4>
            <div className={styles.counterContainer}>
              <div className={styles.semiCircle}></div>
              <div className={styles.counter}>{count}+</div>
            </div>
            <p>We are serving for 25+ Years</p>
          </div>
        </div>

        {/* Right side with text and CTA */}
        <div className={styles.rightContent}>
          <div className={styles.aboutCompany}>
          <i className="fas fa-paper-plane"></i> 
            <span>About Our Company</span>
          </div>
          
          <h2>We help Make your dream into Reality</h2>
          <div className={styles.pathwaySection}>
            <FaGlobeAmericas />
            <span>&nbsp;&nbsp;Your Pathway to Successful Immigration</span>
          </div>
          
          <p>
            ZFC is an immigration firm formed for the sole purpose of providing quick and easy legal immigration to Canada. 
            Starting in 1992, we have more than 2 decades of experience.
          </p>
          <ul className={styles.featuresList}>
            
            <li> <FaCheck />&nbsp;&nbsp;Fastest processing with expert immigration</li>
            
            <li> <FaCheck />&nbsp;&nbsp; Secure your future with our expertise</li>
          </ul>
          <a href="/get-started" className={styles.getStartedBtn}>Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default NextSection;
