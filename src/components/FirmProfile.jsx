import React, { useState, useEffect } from 'react';
import styles from './firmProfile.module.css';
import image1 from '../assets/images/family1.jpg';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/counter1.png';

{/* FIRM PROFILE */}
const FirmProfile = () => {
  const [experienceCounter, setExperienceCounter] = useState(0);
  const [clientsCounter, setClientsCounter] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    const experienceInterval = setInterval(() => {
      setExperienceCounter((prev) => (prev < 25 ? prev + 1 : prev));
    }, 50);

    const clientsInterval = setInterval(() => {
      setClientsCounter((prev) => (prev < 19000 ? prev + 200 : prev));
    }, 10);

    return () => {
      clearInterval(experienceInterval);
      clearInterval(clientsInterval);
    };
  }, []);

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className={styles.firmProfilePage}>
      {/* Section 1: Who Are We */}
      <div className={`${styles.section} ${styles.lightBackground}`}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.counterContainerSmall}>
              <span className={styles.counterSmall}>{experienceCounter}+</span>
              <p>Years of Professional Experience</p>
            </div>
            <img src={image1} alt="Who Are We" className={styles.resizedImage} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionHeading}>Who Are We?</h2>
            <p>
              ZFC is an immigration firm formed for the sole purpose of providing quick and easy legal immigration to Canada.
              Starting in 1992, we have more than 2 decades of experience. Under the leadership of Sufian Ahmed, Sonya McLeod, and Steven Harris, members in good standing with the Immigration Consultants of Canada Regulatory Council (ICCRC), we have grown exponentially.
            </p>
            <p>
              We are known for our professional service, our expert advice and our substantially high success rate. Our clients can tell you that we have extensive experience in the immigration process, in client representation, and that our advice is ethical and candid.
            </p>
            <p>
              We specialize in refused cases – if your case has been refused, please contact us right away. Help us, help you.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: Why Us */}
      <div className={`${styles.section} ${styles.darkBackground}`}>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionHeading}>Why Us?</h2>
            <p>
              <strong>We Go Above and Beyond</strong> – Simply put, we are second to none. We offer a wide variety of services combined with immediate response time.
              We offer inland and overseas immigration services and have successfully helped thousands of people immigrate to Canada.
            </p>
            <p>
              We open doors to a life in Canada through Human Resources and Skill Development and by pre-arranging employment. We are with you at every step of the process and provide you with all your options.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.counterContainerSmall}>
              <span className={styles.counterSmall}>{clientsCounter}+</span>
              <p>Happy Clients</p>
            </div>
            <img src={image2} alt="Why Us" className={styles.resizedImage} />
          </div>
        </div>
      </div>

      {/* Section 3: We’re Unique */}
      <div className={`${styles.section} ${styles.lightBackground}`}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={image3} alt="Unique Process" className={styles.resizedImage} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionHeading}>We’re Unique</h2>
            <p>
              We produce better results than our competitors because of our unique process. The key includes careful examination of visa post requirements, the case at hand and keeping up to date with the Canadian Immigration Acts and Regulations.
            </p>
            <p>
              Furthermore, we contact overseas embassies on a monthly basis to receive updated information, thereby serving our clients as efficiently as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: We Care */}
      <div className={`${styles.section} ${styles.darkBackground}`}>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionHeading}>We Care</h2>
            <p>
              The first and most important step that you will make as an applicant for immigration to Canada is choosing the right representative to open the doors for you.
            </p>
            <p>
              We distinguish ourselves from our would-be competition by working closely with each individual client in strictest confidentiality. This allows us to bring the very highest possible quality results for him/her that we can.
            </p>
            <p>
              If we accept a client, that acceptance comes with the commitment that we can, and will, fulfill his/her demands. This personalized approach accommodates any kind of case and provides clients with excellent results.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img src={image4} alt="We Care" className={styles.resizedImage} />
          </div>
        </div>
      </div>

      {/* Section 5: Our Vision */}
      <div className={`${styles.section} ${styles.whiteBackground}`}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img src={image5} alt="Our Vision" className={styles.resizedImage} />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.sectionHeading}>Our Vision</h2>
            <p>
              We envision a world where every individual, regardless of their nationality, has the opportunity to live a better life in a country that embraces diversity and offers opportunities for growth and prosperity.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6: Accordion (Values) */}
      <div className={`${styles.section} ${styles.lightBackground}`}>
        <h2 className={styles.sectionHeading}>Our Values</h2>
        <div className={styles.accordionContainer}>
          <div className={styles.accordionItem} onClick={() => toggleAccordion('value1')}>
            <div className={styles.accordionTitle}>
              <span>Transparency in our Communication</span>
              <span className={styles.accordionIcon}>{openAccordion === 'value1' ? '-' : '+'}</span>
            </div>
            {openAccordion === 'value1' && <p className={styles.accordionContent}>We are transparent in what we do.</p>}
          </div>

          <div className={styles.accordionItem} onClick={() => toggleAccordion('value2')}>
            <div className={styles.accordionTitle}>
              <span>Integrity in our Actions</span>
              <span className={styles.accordionIcon}>{openAccordion === 'value2' ? '-' : '+'}</span>
            </div>
            {openAccordion === 'value2' && <p className={styles.accordionContent}>We act with honesty and integrity.</p>}
          </div>

          <div className={styles.accordionItem} onClick={() => toggleAccordion('value3')}>
            <div className={styles.accordionTitle}>
              <span>Fairness in our Decisions</span>
              <span className={styles.accordionIcon}>{openAccordion === 'value3' ? '-' : '+'}</span>
            </div>
            {openAccordion === 'value3' && <p className={styles.accordionContent}>We are fair in our decision-making process.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmProfile;
