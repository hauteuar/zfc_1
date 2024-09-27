import React, { useState } from 'react';
import styles from './Services.module.css'; // Importing CSS Module
import { FaPaperPlane } from 'react-icons/fa'; // Importing the paper plane icon
import image1 from '../assets/images/image5.png';
import image2 from '../assets/images/visa.jpg';

const Services = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={styles.servicesPage}>
      <h1 className={styles.pageTitle}>Immigration & Business Services</h1>

      {/* Immigration Services - Main Section */}
      <div className={styles.fullSection}>
        <h2 className={styles.highlightedTitle}>Immigration Services</h2>
        <div className={styles.immigrationGrid}>
          <div onClick={() => toggleSection('immigration1')} className={styles.serviceItem}>
            Immigration Hearings and Appeals
          </div>
          <div onClick={() => toggleSection('immigration2')} className={styles.serviceItem}>
            Express Entry Programs
          </div>
          <div onClick={() => toggleSection('immigration3')} className={styles.serviceItem}>
            Federal Skilled Trade Programs
          </div>
          <div onClick={() => toggleSection('immigration4')} className={styles.serviceItem}>
            Canadian Experience Class Applications
          </div>
          <div onClick={() => toggleSection('immigration5')} className={styles.serviceItem}>
            Provincial Nominee Programs (PNP)
          </div>

          <div onClick={() => toggleSection('immigration6')} className={styles.serviceItem}>
            Refugee cases
          </div>
          <div onClick={() => toggleSection('immigration7')} className={styles.serviceItem}>
            Humanitarian & compassionate cases
          </div>
          <div onClick={() => toggleSection('immigration8')} className={styles.serviceItem}>
            Detention and immigration appeal hearing
          </div>
          <div onClick={() => toggleSection('immigration9')} className={styles.serviceItem}>
            Criminal Inadmissibility Cases
          </div>
          <div onClick={() => toggleSection('immigration10')} className={styles.serviceItem}>
            Work Permits/LMIAs
          </div>

          <div onClick={() => toggleSection('immigration11')} className={styles.serviceItem}>
            PR Card Renewals
          </div>
          <div onClick={() => toggleSection('immigration12')} className={styles.serviceItem}>
            Citizenship Applications
          </div>
          <div onClick={() => toggleSection('immigration13')} className={styles.serviceItem}>
            Study Permits
          </div>
          <div onClick={() => toggleSection('immigration14')} className={styles.serviceItem}>
            Visitor Visa/Super Visa
          </div>
          <div onClick={() => toggleSection('immigration15')} className={styles.serviceItem}>
            Intra-Company Transfers
          </div>
        </div>

        {/* Description Section */}
        {openSection && (
          <div className={styles.serviceDescription}>
            {openSection === 'immigration1' && 'Handle appeals and hearings related to Canadian immigration decisions, providing support for applicants who wish to dispute rulings.'}
            {openSection === 'immigration2' && 'The Express Entry program allows skilled workers to immigrate to Canada through a points-based system that assesses qualifications.'}
            {openSection === 'immigration3' && 'This program is designed for workers with specific trades skills who wish to immigrate and work in Canada.'}
            {openSection === 'immigration4' && 'The Canadian Experience Class is for applicants who already have work experience in Canada and wish to apply for permanent residency.'}
            {openSection === 'immigration5' && 'PNP allows provinces to nominate individuals for immigration based on their skills and potential to contribute to the local economy.'}
            {openSection === 'immigration6' && 'Provides assistance to refugees seeking asylum in Canada, offering guidance on legal processes and application submissions.'}
            {openSection === 'immigration7' && 'Supports those applying for immigration based on humanitarian reasons or compassionate grounds, ensuring proper documentation.'}
            {openSection === 'immigration8' && 'Handles appeals and hearings related to immigration detention and deportation cases, advocating for individuals at risk of removal.'}
            {openSection === 'immigration9' && 'Assists individuals with criminal inadmissibility cases, helping to challenge or overcome immigration refusals based on criminal records.'}
            {openSection === 'immigration10' && 'Guidance on obtaining work permits and Labour Market Impact Assessments (LMIAs) to legally work in Canada.'}
            {openSection === 'immigration11' && 'Assists permanent residents in renewing their PR cards, ensuring compliance with residency requirements.'}
            {openSection === 'immigration12' && 'Helps applicants through the process of becoming Canadian citizens, including documentation and preparation for the citizenship test.'}
            {openSection === 'immigration13' && 'Guides international students through the process of obtaining study permits to study at Canadian institutions.'}
            {openSection === 'immigration14' && 'Supports individuals applying for Visitor Visas or Super Visas, including parents and grandparents of Canadian citizens or PR holders.'}
            {openSection === 'immigration15' && 'Facilitates intra-company transfers for professionals working for multinational companies who are transferred to a Canadian branch.'}
          </div>
        )}
      </div>

      {/* Business Services */}
      <div className={styles.servicesSection}>
        <h2 className={styles.highlightedTitleBlue}>Business Services
        <p className={styles.subtitleRed}>
          <FaPaperPlane /> These programs provide avenues for investors to contribute to Canada’s growth while gaining permanent residency
        </p></h2>
        <div className={styles.serviceList}>
          <div onClick={() => toggleSection('business1')} className={styles.serviceItem}>
            Start-up Visa Program
          </div>
          {openSection === 'business1' && (
            <div className={styles.serviceDescription}>
              The Start-up Visa Program is designed to attract immigrant entrepreneurs with the skills and potential to build innovative businesses in Canada.
            </div>
          )}

          <div onClick={() => toggleSection('business2')} className={styles.serviceItem}>
            Business Immigration Program
          </div>
          {openSection === 'business2' && (
            <div className={styles.serviceDescription}>
              This program helps business immigrants invest in or establish businesses in Canada to contribute to the Canadian economy.
            </div>
          )}

          <div onClick={() => toggleSection('business3')} className={styles.serviceItem}>
            Immigrant Investor Program (IIP)
          </div>
          {openSection === 'business3' && (
            <div className={styles.serviceDescription}>
              The Immigrant Investor Program (IIP) encourages wealthy individuals to invest in Canada in exchange for permanent residency.
            </div>
          )}
        </div>
      </div>

      {/* What We Can Do for You */}
      <div className={styles.serviceSectionTwoThirds}>
        <h2 className={styles.highlightedTitle}>What We Can Do for You</h2>
        <div className={styles.flexContainer}>
          <div className={styles.imageOneThird}>
            <img src={image1} alt="Immigration support" />
          </div>
          <div className={styles.textTwoThirds}>
            <ul>
              <li>Prepare your application and supporting documents to maximize the number of points to which you are entitled</li>
              <li>Instruct you as to the steps you can take to increase your point total (i.e. interview and test preparation)</li>
              <li>
                Immigration can impact your immediate family & their descendants for generations to come. If your case is refused, you cannot fight back, you cannot argue, or challenge, an Immigration officer.
                There are very strict Rules & Regulations Appeals & Procedures many are unaware of. We possess a thorough understanding of these procedures and can give you the help you need.
              </li>
              <li>Present evidence to the Visa Office of your ability to become economically established in Canada. This is done to push the Visa Officer to exercise positive discretion in favor of your application</li>
              <li>
                It is most important to the success of your application that the Visa Officer is satisfied that your work experience meets with Canadian immigration expectations and standards.
                It is not enough to simply submit documents that state your title and occupation. We will carefully review your work history documents and guide you in the clear presentation of your work activities and accomplishments.
              </li>
              <li>Manage your application to optimize the likelihood of obtaining an interview waiver. If a selection interview is required you can rely upon our experience to fully prepare you for the occasion.</li>
              <li>Post landing settlement & Job search assistance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Should We Pay the Retainer */}
      <div className={styles.serviceSectionTwoThirds}>
        
        <h2 className={styles.highlightedTitleBlue}>
        <p className={styles.subtitleRed}>
          <FaPaperPlane /> Would it not be a less expensive procedure if we do it ourselves?
        </p>
            Why Should We Pay the Retainer</h2>
        <div className={styles.flexContainer}>
          <div className={styles.textTwoThirds}>
            <p>
              When deciding whether to do it yourself, evaluate the importance of your immigration matter. No matter how inexpensive, without positive results, the outcome will be costly.
              Your professional and family considerations should govern the decision – immigration can determine the choice of profession and degree of success in one’s professional life.
              Please do not forget that immigration also impacts the future of your immediate family and descendants for generations.
            </p>
            <p>
              The new immigration program incorporates many technical issues. The process is becoming harder and more and more competitive.
              It is critical that the application process is well supported with the proper documents and that you are represented professionally.
              If your case is refused you cannot fight back, you cannot argue or challenge an Immigration officer. You are not aware of the Acts; Regulations; Appeals; Procedures.
            </p>
            <p className={styles.highlightText}>
              Many of our team members have gone through the same process you have – we understand this procedure is stressful – ZFCanada is here to help.
            </p>
          </div>
          <div className={styles.imageOneThird}>
            <img src={image2} alt="Retainer process" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
