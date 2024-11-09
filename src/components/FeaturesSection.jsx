import React, { useEffect, useRef, useState } from 'react';
import styles from './FeaturesSection.module.css'; // Correct import for CSS Modules

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when the section is visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.featuresSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.container}>
        {/* Aeroplane icon and Features heading */}
        <div className={styles.featuresHeading}>
          <i className="fas fa-paper-plane"></i> 

          <h2 className={styles.textwhite}>Our Mission</h2>
        </div>

        {/* Main heading */}
        <h1 className={styles.mainHeading}>
          Committed to provide you the highly qualified professional services
        </h1>

        {/* Get Started button */}
        <a href="/contact" className={styles.getStarted}>
          Get Started
        </a>

        {/* Features list */}
        <div className={styles.featuresList}>
          <div className={styles.featureItem}>
            <i className="fas fa-check"></i>
            <h3>Professional Quality Services</h3>
            <p>ZFC Immigration is fully committed in providing quality and uniquely designed premium services in Canadian immigration.</p>
          </div>
          <div className={styles.featureItem}>
            <i className="fas fa-check"></i>
            <h3>Professional & Expert Team</h3>
            <p>ZFC has more than 25+ years of professional experience and an expert team to address all your needs.</p>
          </div>
          <div className={styles.featureItem}>
            <i className="fas fa-check"></i>
            <h3>Satisfaction Guaranteed</h3>
            <p>ZFC Immigration is empowering your startup vision dream come true with expert services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
