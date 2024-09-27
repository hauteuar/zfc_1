import React, { useState } from 'react';
import styles from './BusinessVisa.module.css';

const BusinessVisa = () => {
  const [activeTab, setActiveTab] = useState('SelfEmployed');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Business Visa Options</h2>
        <button 
          className={`${styles.tabButton} ${activeTab === 'SelfEmployed' ? styles.active : ''}`} 
          onClick={() => handleTabClick('SelfEmployed')}
        >
          Self-Employed Visa
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'ImmigrantInvestor' ? styles.active : ''}`} 
          onClick={() => handleTabClick('ImmigrantInvestor')}
        >
          Immigrant Investor Program
        </button>
        <button 
          className={`${styles.tabButton} ${activeTab === 'Entrepreneur' ? styles.active : ''}`} 
          onClick={() => handleTabClick('Entrepreneur')}
        >
          Entrepreneur Applicant
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'SelfEmployed' && (
          <div className={styles.tabContent}>
            <h3>Self-Employed Visa</h3>
            <p>
              The Self-Employed Visa program is designed for individuals with relevant experience in cultural, athletic, or agricultural activities, who intend to establish themselves as self-employed in Canada.
            </p>
            <h4>Eligibility Criteria:</h4>
            <ul>
              <li>Two years of self-employment in cultural or athletic activities or participation at a world-class level.</li>
              <li>Intention and ability to become self-employed in Canada in one of the qualifying activities.</li>
              <li>Meeting the selection criteria including experience, education, language proficiency, and adaptability.</li>
            </ul>
            <h4>Examples of Qualifying Experience:</h4>
            <ul>
              <li>Professional musicians, dancers, painters, sculptors, filmmakers, or journalists.</li>
              <li>Athletes, coaches, or trainers who have participated in world-class competitions.</li>
              <li>Farmers who plan to operate and manage a farm in Canada.</li>
            </ul>
          </div>
        )}

        {activeTab === 'ImmigrantInvestor' && (
          <div className={styles.tabContent}>
            <h3>Immigrant Investor Program Visa</h3>
            <p>
              The Immigrant Investor Program is designed for experienced business people who want to contribute to Canada's economy by making a significant investment.
            </p>
            <h4>Eligibility Requirements:</h4>
            <ul>
              <li>Minimum net worth of CAD 10 million earned through lawful business or investment activities.</li>
              <li>Investment of CAD 2 million in a government-approved Canadian venture capital fund for a period of 15 years.</li>
              <li>Proven experience in managing or owning businesses with substantial growth.</li>
            </ul>
            <h4>Benefits of the Program:</h4>
            <ul>
              <li>Fast-track to permanent residency for investors and their families.</li>
              <li>Opportunity to live, work, and study anywhere in Canada.</li>
              <li>Involvement in Canada’s growing economy with opportunities in various sectors like real estate, technology, and manufacturing.</li>
            </ul>
          </div>
        )}

        {activeTab === 'Entrepreneur' && (
          <div className={styles.tabContent}>
            <h3>Entrepreneur Applicant</h3>
            <p>
              The Entrepreneur Visa program is designed for individuals who want to establish and actively manage a business in Canada. The goal is to create jobs for Canadians and contribute to the country's economic growth.
            </p>
            <h4>Requirements for the Entrepreneur Visa:</h4>
            <ul>
              <li>Establish, purchase, or significantly invest in a Canadian business.</li>
              <li>Actively participate in managing the business on a daily basis.</li>
              <li>Create at least one full-time job for a Canadian citizen or permanent resident other than the entrepreneur or their family members.</li>
              <li>Provide a detailed business plan outlining the business structure, revenue model, and job creation strategy.</li>
            </ul>
            <h4>Benefits of the Entrepreneur Visa:</h4>
            <ul>
              <li>Permanent residency for the entrepreneur and their immediate family.</li>
              <li>Access to Canadian business networks and resources to help grow the business.</li>
              <li>Opportunity to expand the business within a stable, economically strong country.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessVisa;
