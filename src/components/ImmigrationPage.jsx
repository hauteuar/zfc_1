import React, { useState, useEffect } from 'react';
import { FaUserCheck, FaGlobe, FaBook, FaFileAlt, FaMapMarkerAlt, FaPassport } from 'react-icons/fa'; // Adding more icons
import { useParams } from 'react-router-dom';
import styles from './ImmigrationPage.module.css';
import placeholderImage from '../assets/images/visa2.jpg'; // Placeholder image
import visa3 from '../assets/images/visa3.jpg';

const ImmigrationPage = () => {
  const { section } = useParams(); // Extract the section parameter from the URL
  const [activeCategory, setActiveCategory] = useState(null); // Initialize as null or default category

  // Scroll to the appropriate section based on the URL parameter
  useEffect(() => {
    if (section) {
      setActiveCategory(section);
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    document.getElementById(category)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className={styles.immigrationPage}>
      {/* Left Sidebar */}
      <div className={styles.sidebar}>
        <ul className={styles.sidebarList}>
          <li
            className={activeCategory === 'VisitorVisa' ? styles.active : ''}
            onClick={() => handleCategoryClick('VisitorVisa')}
          >
            <FaPassport className={styles.icon} /> Visitor Visa Processing
          </li>
          <li
            className={activeCategory === 'FamilyVisa' ? styles.active : ''}
            onClick={() => handleCategoryClick('FamilyVisa')}
          >
            <FaUserCheck className={styles.icon} /> Family Visa Processing
          </li>
          
          <li
            className={activeCategory === 'StudyPermit' ? styles.active : ''}
            onClick={() => handleCategoryClick('StudyPermit')}
          >
            <FaBook className={styles.icon} /> Study Permit Processing
          </li>
          <li
            className={activeCategory === 'ExpressEntry' ? styles.active : ''}
            onClick={() => handleCategoryClick('ExpressEntry')}
          >
            <FaGlobe className={styles.icon} /> Express-Entry Program
          </li>
          <li
            className={activeCategory === 'PNP' ? styles.active : ''}
            onClick={() => handleCategoryClick('PNP')}
          >
            <FaMapMarkerAlt className={styles.icon} /> PNP Program
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className={styles.content}>
        {/* Express Entry Section */}
        {activeCategory === 'ExpressEntry' && (
          <div id="ExpressEntry" className={styles.section}>
            {/* 1st Section: Description */}
            <h2 className={styles.sectionTitle}>Express Entry</h2>
            <p className={styles.description}>
              Express Entry is an employer-driven selection model that facilitates Canadian immigration through a points-based system. Applicants can submit their profiles to the Express Entry Pool and be ranked based on their skills and work experience. Those with higher points are issued an ITA (Invitation to Apply) for permanent residency.
            </p>

            {/* 2nd Section: Selection Process */}
            <h3 className={styles.subTitle}>ITA Selection Process</h3>
            <p className={styles.description}>
              All applicants in the EE pool will be granted points (maximum of 1200) that take into consideration the following factors:
            </p>
            <ul className={styles.selectionFactors}>
              <li>Skills and work experience (up to 500 points)</li>
              <li>Spouse or common-law partner factors (up to 40 additional points)</li>
              <li>Skills transferability (up to 100 points)</li>
              <li>Additional 600 points for those with a Provincial Nomination or a valid job offer</li>
            </ul>
            {/* Image at the end of the section */}
            <div className={styles.imageContainer}>
              <img src={visa3} alt="Express Entry Process" className={styles.smallImage} />
            </div>

            {/* 3rd Section: Requirements */}
            <h3 className={styles.subTitle}>Requirements for Selection Process</h3>
            <div className={styles.requirementsSection}>
              {/* Image at the start */}
              <div className={styles.imageContainer}>
                <img src={placeholderImage} alt="Requirements" className={styles.smallImage} />
              </div>
              <div className={styles.cardsContainer}>
                <div className={styles.card}>
                  <h4>Documentation</h4>
                  <p>Submit all required documents.</p>
                </div>
                <div className={styles.card}>
                  <h4>Language Proficiency</h4>
                  <p>IELTS or language test results.</p>
                </div>
                <div className={styles.card}>
                  <h4>Job Offer</h4>
                  <p>A valid job offer from a Canadian employer.</p>
                </div>
                <div className={styles.card}>
                  <h4>Education</h4>
                  <p>Proof of education (degree, diploma, etc).</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PNP Section */}
        {activeCategory === 'PNP' && (
          <div id="PNP" className={styles.section}>
            {/* 1st Section: Description */}
            <h2 className={styles.sectionTitle}>Provincial Nominee Program (PNP)</h2>
            <p className={styles.description}>
              The Provincial Nominee (PNP) is an option for Canadian Permanent Residence. PNP allows provinces and territories to directly nominate individuals who they wish to immigrate to Canada. Each province has their own unique PNP, tailored to meet specific needs such as skilled workers or individuals with certain attributes.
            </p>
            <p className={`${styles.description} ${styles.highlighted}`}>
              <strong>Over the last 25 Years we made an impact that is strong & we have a long way to go.</strong>
            </p>

            {/* 2nd Section: Service Process */}
            <h3 className={styles.subTitle}>Service Process</h3>
            <h5> At ZFCanada our culture comes to life through three core values:</h5>
            <ul className={styles.selectionFactors}>
              
              <li>We seize opportunities to innovate and grow.</li>
              <li>We are one firm with a shared sense of purpose.</li>
              <li>We care about each other and the world around us.</li>
            </ul>
            {/* Image at the end of the section */}
            <div className={styles.imageContainer}>
              <img src={visa3} alt="PNP Process" className={styles.smallImage} />
            </div>

            {/* 3rd Section: Service Options */}
            <h3 className={styles.subTitle}>Service Options</h3>
            <div className={styles.requirementsSection}>
              <div className={styles.cardsContainer}>
                <div className={styles.card}>
                  <h4>Documentation List</h4>
                  <p>We understand the importance of approaching each work integrally and believe in the power of simple.</p>
                </div>
                <div className={styles.card}>
                  <h4>IELTS Score</h4>
                  <p>We assist in ensuring you meet the necessary language requirements.</p>
                </div>
                <div className={styles.card}>
                  <h4>Offer Letters</h4>
                  <p>Don't worry about your job offers, our experts help you through the process.</p>
                </div>
                <div className={styles.card}>
                  <h4>CA Report Submission</h4>
                  <p>We ensure all required reports are properly submitted.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Similar Sections for Other Categories */}
        {activeCategory === 'VisitorVisa' && (
          <div id="VisitorVisa" className={styles.section}>
            <h2 className={styles.sectionTitle}>Visitor Visa Processing</h2>
            <p className={styles.description}>
            We guide our clients through difficult issues, bringing insight and judgment to each situation. Our innovat ive approaches create original solutions to our clients’ most complex domestic & multi juristictional deal s and disputes. By thinking on behalf of our clients every day, we anticipate what they want, provide what they need and build lasting relationships.

            <p className={`${styles.description} ${styles.highlighted}`}>
              <strong>Over the last 25 Years we made an impact that is strong & we have a long way to go.</strong>
            </p>
These are the concepts that shape our distinctive culture & differentiate us from others. They true the unique spirit of our Firm guide the behaviors that enable us to deliver the promises we make to our clients and our people.
            </p>
            {/* You can add Selection Process and Requirements sections similarly */}
            {/* 2nd Section: Service Process */}
            <h3 className={styles.subTitle}>Service Process</h3>
            <h5>At ZFCanada our culture comes to life through three core values:</h5>
            <ul className={styles.selectionFactors}>
              <li>We assess which program suits you best.</li>
              <li>We seize opportunities to innovate and grow.</li>
              <li>We are one firm with a shared sense of purpose.</li>
              <li>We care about each other and the world around us.</li>
            </ul>
            {/* Image at the end of the section */}
            <div className={styles.imageContainer}>
              <img src={visa3} alt="PNP Process" className={styles.smallImage} />
            </div>

            {/* 3rd Section: Service Options */}
            <h3 className={styles.subTitle}>Service Options</h3>
            <div className={styles.requirementsSection}>
              <div className={styles.cardsContainer}>
                <div className={styles.card}>
                  <h4>Documentation List</h4>
                  <p>We understand the importance of approaching each work integrally and believe in the power of simple.</p>
                </div>
               
               

                <div className={styles.card}>
                  <h4>CA Report Submission</h4>
                  <p>We ensure all required reports are properly submitted.</p>
                </div>
               </div>
             </div>
          </div>
        )}

        {/* Similar Sections for Other Categories */}
        {activeCategory === 'VisitorVisa' && (
          <div id="VisitorVisa" className={styles.section}>
            <h2 className={styles.sectionTitle}>Visitor Visa Processing</h2>
            <p className={styles.description}>
            We guide our clients through difficult issues, bringing insight and judgment to each situation. Our innovat ive approaches create original solutions to our clients’ most complex domestic & multi juristictional deal s and disputes. By thinking on behalf of our clients every day, we anticipate what they want, provide what they need and build lasting relationships.

            <p className={`${styles.description} ${styles.highlighted}`}>
              <strong>Over the last 25 Years we made an impact that is strong & we have a long way to go.</strong>
            </p>
These are the concepts that shape our distinctive culture & differentiate us from others. They true the unique spirit of our Firm guide the behaviors that enable us to deliver the promises we make to our clients and our people.
            </p>
            {/* You can add Selection Process and Requirements sections similarly */}
            {/* 2nd Section: Service Process */}
            <h3 className={styles.subTitle}>Service Process</h3>
            <h5>At ZFCanada our culture comes to life through three core values:</h5>
            <ul className={styles.selectionFactors}>
              <li>We assess which program suits you best.</li>
              <li>We seize opportunities to innovate and grow.</li>
              <li>We are one firm with a shared sense of purpose.</li>
              <li>We care about each other and the world around us.</li>
            </ul>
            {/* Image at the end of the section */}
            <div className={styles.imageContainer}>
              <img src={placeholderImage} alt="PNP Process" className={styles.smallImage} />
            </div>

            {/* 3rd Section: Service Options */}
            <h3 className={styles.subTitle}>Service Options</h3>
            <div className={styles.requirementsSection}>
              <div className={styles.cardsContainer}>
                <div className={styles.card}>
                  <h4>Documentation List</h4>
                  <p>We understand the importance of approaching each work integrally and believe in the power of simple.</p>
                </div>
               
               

                <div className={styles.card}>
                  <h4>CA Report Submission</h4>
                  <p>We ensure all required reports are properly submitted.</p>
                </div>
               </div>
             </div>
          </div>
        )}
        {/* Family Visa Section */}
        {activeCategory === 'FamilyVisa' && (
          <div id="FamilyVisa" className={styles.section}>
            <h2 className={styles.sectionTitle}>Family Visa Processing</h2>
            <p className={styles.description}>
              This group is admitted to Canada as permanent residents due to their relationship with and sponsorship by a Canadian citizen or permanent resident. Sponsored applicants include spouses, dependent children, parents, and grandparents. Sponsors must provide financial support and prove their ability to support the sponsored family members before approval.
            </p>
            <p className={`${styles.description} ${styles.highlighted}`}>
              <strong>Over the last 25 Years we made an impact that is strong & we have a long way to go.</strong>
            </p>

            {/* Family Visa Process */}
            <h3 className={styles.subTitle}>Service Process</h3>
            <ul className={styles.selectionFactors}>
              <li>We assess which program suits you best.</li>
              <li>We seize opportunities to innovate and grow.</li>
              <li>We are one firm with a shared sense of purpose.</li>
              <li>We care about each other and the world around us.</li>
            </ul>
            <div className={styles.imageContainer}>
              <img src={visa3} alt="Family Visa Process" className={styles.smallImage} />
            </div>

            {/* Service Options */}
            <h3 className={styles.subTitle}>Service Options</h3>
            <div className={styles.requirementsSection}>
              <div className={styles.cardsContainer}>
                <div className={styles.card}>
                  <h4>Documentation List</h4>
                  <p>We ensure all necessary documents are properly submitted.</p>
                </div>
             
                <div className={styles.card}>
                  <h4>CA Report Submission</h4>
                  <p>We ensure financial reports are submitted accurately.</p>
                </div>
              </div>
            </div>
          </div>
        )}

{/* PNP Section */}
{activeCategory === 'StudyPermit' && (
          <div id="StudyPermit" className={styles.section}>
            {/* 1st Section: Description */}
            <h2 className={styles.sectionTitle}>Study Permit processing</h2>
            <p className={styles.description}>
            We guide our clients through difficult issues, bringing insight and judgment to each situation. Our innovat ive approaches create original solutions to our clients’ most complex domestic & multi juristictional deal s and disputes. By thinking on behalf of our clients every day, we anticipate what they want, provide what they need and build lasting relationships.
            
            <p className={`${styles.description} ${styles.highlighted}`}>
              <strong>Over the last 25 Years we made an impact that is strong & we have a long way to go.</strong>
            </p>
            These are the concepts that shape our distinctive culture & differentiate us from others. They true the unique spirit of our Firm guide the behaviors that enable us to deliver the promises we make to our clients and our people.
            </p>
            {/* 2nd Section: Service Process */}
            <h3 className={styles.subTitle}>Service Process</h3>
            <h5> At ZFCanada our culture comes to life through three core values:</h5>
            <ul className={styles.selectionFactors}>
              
              <li>We seize opportunities to innovate and grow.</li>
              <li>We are one firm with a shared sense of purpose.</li>
              <li>We care about each other and the world around us.</li>
            </ul>
            {/* Image at the end of the section */}
            <div className={styles.imageContainer}>
              <img src={placeholderImage} alt="Study Permit" className={styles.smallImage} />
            </div>

            {/* 3rd Section: Service Options */}
            <h3 className={styles.subTitle}>Service Options</h3>
            <div className={styles.requirementsSection}>
              <div className={styles.cardsContainer}>
                <div className={styles.card}>
                  <h4>Documentation List</h4>
                  <p>We understand the importance of approaching each work integrally and believe in the power of simple.</p>
                </div>
                <div className={styles.card}>
                  <h4>IELTS Score</h4>
                  <p>We assist in ensuring you meet the necessary language requirements.</p>
                </div>
                <div className={styles.card}>
                  <h4>Offer Letters</h4>
                  <p>Don't worry about your job offers, our experts help you through the process.</p>
                </div>
                <div className={styles.card}>
                  <h4>CA Report Submission</h4>
                  <p>We ensure all required reports are properly submitted.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Other Categories... */}
      </div>
    </div>
  );
};

export default ImmigrationPage;
