import React, { useState, useEffect } from "react";
import styles from './NextSection.module.css'; // Custom CSS module
import bgimage from '../assets/images/visa.jpg'; // Importing the image correctly

const OverlaySection = () => {
  const [trustedClients, setTrustedClients] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [referrals, setReferrals] = useState(0);
  const [clientSatisfaction, setClientSatisfaction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trustedClients < 19000) {
        setTrustedClients(prevCount => prevCount + 100);
      }
      if (yearsExperience < 25) {
        setYearsExperience(prevCount => prevCount + 1);
      }
      if (referrals < 80) {
        setReferrals(prevCount => prevCount + 1);
      }
      if (clientSatisfaction < 98) {
        setClientSatisfaction(prevCount => prevCount + 1);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [trustedClients, yearsExperience, referrals, clientSatisfaction]);

  return (
    <>
      <section className={styles.overlaySection}>
        <div className={styles.countersContainer}>
          <div className={styles.counterBox}>
            <h3>{trustedClients.toLocaleString()}+</h3>
            <p>Trusted Clients</p>
          </div>
          <div className={styles.counterBox}>
            <h3>{yearsExperience}+</h3>
            <p>Years of Experience</p>
          </div>
          <div className={styles.counterBox}>
            <h3>{referrals}%</h3>
            <p>Of New Business Are From Referrals</p>
          </div>
          <div className={styles.counterBox}>
            <h3>{clientSatisfaction}%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OverlaySection;
