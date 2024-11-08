// Services.js
import React, { useState } from 'react';
import styles from './Services.module.css';
import { FaUserShield, FaPaperPlane, FaGlobe, FaHandHoldingHeart, FaRegIdBadge, FaSuitcaseRolling, FaUniversity, FaRegCreditCard, FaPassport, FaHome, FaBuilding, FaUserCheck, FaBusinessTime, FaHandshake, FaUserGraduate, FaUserFriends } from 'react-icons/fa';
import image1 from '../assets/images/image5.png';
import image2 from '../assets/images/visa.jpg';
const servicesData = [
  {
    title: "Immigration Hearings and Appeals",
    icon: <FaUserShield />,
    description: "ZFCanada assists clients with immigration hearings and appeals, offering legal representation and guidance to applicants contesting decisions. Our team prepares and submits all necessary documents, builds a comprehensive case, and advocates for fair treatment during hearings. With ZFCanada’s experienced legal support, clients gain a greater understanding of immigration laws and procedures, helping to ensure that all aspects of their case are thoroughly addressed. Our goal is to support clients through this challenging process, improving their chances of a successful appeal or a positive resolution to their case."
  },
  {
    title: "Express Entry Programs",
    icon: <FaPaperPlane />,
    description: "The Express Entry program is a points-based system that allows skilled workers to apply for Canadian immigration. Applicants are assessed on factors such as work experience, education, language proficiency, and arranged employment in Canada. ZFCanada assists applicants by optimizing their profile to maximize their points, which improves their ranking in the Express Entry pool. We guide clients in submitting a competitive application and help them secure Invitations to Apply (ITAs) for Canadian permanent residency. ZFCanada ensures that clients fully understand the requirements and provides continuous support throughout the application process."
  },
  {
    title: "Federal Skilled Trade Programs",
    icon: <FaGlobe />,
    description: "The Federal Skilled Trade Program (FSTP) is designed for individuals with specific trade skills who want to live and work in Canada. ZFCanada helps skilled tradespeople in fields like construction, industrial work, and maintenance, meeting the requirements for FSTP by ensuring they have valid job offers or certifications. We assist in preparing applications that meet all eligibility criteria, including language tests and trade skill verification. ZFCanada’s guidance is invaluable in navigating the application complexities, making it easier for trades professionals to take advantage of this program and work towards permanent residency in Canada."
  },
  {
    title: "Canadian Experience Class Applications",
    icon: <FaHandHoldingHeart />,
    description: "The Canadian Experience Class (CEC) program is tailored for individuals with work experience in Canada who want to obtain permanent residency. ZFCanada supports clients in compiling and verifying their Canadian work experience, ensuring that they meet all requirements. Our team provides expert advice on how to maximize the application’s potential, including tips on showcasing relevant skills, adapting applications for Express Entry, and improving language test scores. With ZFCanada, clients have a trusted partner to help them navigate CEC, providing personalized assistance for a smooth and successful application."
  },
  {
    title: "Provincial Nominee Programs (PNP)",
    icon: <FaRegIdBadge />,
    description: "Provincial Nominee Programs (PNP) allow Canadian provinces and territories to nominate individuals for immigration based on local economic and labor needs. ZFCanada helps applicants identify the best provincial programs for their skills and experience, enhancing their chances of nomination. We guide clients through the application process, assist in gathering required documents, and advise on improving their profiles to match provincial needs. With ZFCanada’s expertise, clients can maximize their eligibility and work closely with provinces seeking talent, facilitating their pathway to Canadian permanent residency."
  },
  {
    title: "Refugee Cases",
    icon: <FaSuitcaseRolling />,
    description: "ZFCanada offers compassionate support for refugee applicants seeking asylum in Canada. We assist clients in navigating the legal complexities involved in refugee claims, from filing applications to representing them in hearings. ZFCanada provides guidance on assembling evidence and preparing for Refugee Board hearings, ensuring that all aspects of a client’s case are presented effectively. Our team understands the sensitive nature of refugee cases and provides dedicated support, making the process as smooth as possible. ZFCanada is committed to helping clients find safety and security in Canada."
  },
  {
    title: "Humanitarian & Compassionate Cases",
    icon: <FaUserCheck />,
    description: "Humanitarian and Compassionate (H&C) applications are for individuals facing exceptional circumstances that justify permanent residency in Canada. ZFCanada helps applicants with compelling personal situations or who have established roots in Canada to apply through this pathway. We work closely with clients to gather evidence, draft personal statements, and prepare applications that emphasize the unique challenges they face. ZFCanada’s expertise in H&C cases increases the chances of successful applications, ensuring clients’ circumstances are well-documented, and that they receive a fair review under Canada’s immigration laws."
  },
  {
    title: "Detention and Immigration Appeal Hearings",
    icon: <FaUserFriends />,
    description: "ZFCanada provides legal representation for clients facing immigration detention and deportation. Our experienced team assists clients in preparing for detention reviews and appeal hearings, working to secure their release or avoid deportation. ZFCanada offers thorough case preparation, presenting evidence and arguments to Immigration and Refugee Board members. With our professional support, clients gain access to knowledgeable legal advocates who understand the nuances of Canadian immigration law, helping them achieve the best possible outcome in their detention or appeal cases."
  },
  {
    title: "Criminal Inadmissibility Cases",
    icon: <FaBuilding />,
    description: "Criminal inadmissibility can prevent individuals from entering or remaining in Canada. ZFCanada assists clients in overcoming criminal inadmissibility issues through legal avenues, including rehabilitation applications, Temporary Resident Permits (TRPs), and appeals. Our team helps clients prepare strong applications that address past convictions, demonstrating rehabilitation and future potential in Canada. With ZFCanada’s support, clients facing criminal inadmissibility challenges receive expert legal guidance and strategic solutions, helping them resolve these issues and pursue their immigration goals in Canada."
  },
  {
    title: "Work Permits/LMIAs",
    icon: <FaBusinessTime />,
    description: "Obtaining a work permit and a positive Labour Market Impact Assessment (LMIA) are essential for many immigrants aiming to work in Canada. ZFCanada assists clients in securing work permits and provides guidance on LMIA applications for employers. Our team works with both employers and employees to ensure all documents are in order and meets Canada’s employment requirements. ZFCanada’s expertise makes it easier for clients to navigate work permit processes, opening opportunities for them to work in Canada legally and contribute to the economy."
  },
  {
    title: "PR Card Renewals",
    icon: <FaRegCreditCard />,
    description: "Permanent residents in Canada must renew their PR cards to maintain their status and travel internationally. ZFCanada assists clients in renewing their PR cards, ensuring compliance with residency requirements and handling any issues related to time spent outside Canada. We guide clients through the application process, provide advice on document preparation, and help them meet residency obligations. With ZFCanada’s support, clients can avoid delays and potential issues, making the PR card renewal process smooth and efficient."
  },
  {
    title: "Citizenship Applications",
    icon: <FaUserGraduate />,
    description: "Applying for Canadian citizenship is a significant milestone for many immigrants. ZFCanada guides clients through the citizenship application process, helping them complete the necessary forms, prepare for the citizenship test, and meet residency requirements. Our team ensures clients understand the steps involved, from gathering documents to preparing for interviews, making the journey to citizenship straightforward. With ZFCanada’s support, applicants gain confidence and peace of mind as they work towards becoming Canadian citizens."
  },
  {
    title: "Study Permits",
    icon: <FaUniversity />,
    description: "Canada’s study permit program allows international students to pursue education in Canada’s world-renowned institutions. ZFCanada assists students in preparing study permit applications, ensuring that all requirements are met, including acceptance into a designated institution, financial readiness, and adherence to program requirements. Our team helps students understand the process, providing ongoing support as they navigate their studies in Canada. ZFCanada strives to make the study permit process seamless, helping students focus on their educational goals in Canada."
  },
  {
    title: "Visitor Visa/Super Visa",
    icon: <FaPassport />,
    description: "ZFCanada assists clients in obtaining Visitor Visas and Super Visas, enabling them to visit family or explore Canada’s attractions. The Super Visa is specifically designed for parents and grandparents of Canadian citizens or permanent residents, allowing extended visits. ZFCanada helps clients compile necessary documentation, meet eligibility requirements, and submit applications that increase their chances of approval. We simplify the visa application process, providing clients with comprehensive support and ensuring their visit to Canada is a pleasant and successful experience."
  },
  {
    title: "Intra-Company Transfers",
    icon: <FaHandshake />,
    description: "Intra-Company Transfers facilitate the relocation of employees within multinational companies to Canadian branches. ZFCanada helps clients meet the criteria for this specialized work permit, including qualifications, experience, and organizational roles. Our team assists companies in preparing necessary documents and ensures that applicants meet Canadian standards. With ZFCanada’s guidance, clients benefit from a streamlined application process, allowing key employees to work in Canada without delay, contributing to Canadian business growth and fostering global economic partnerships."
  }
];


const Services = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className={styles.servicesPage}>
      <h1 className={styles.pageTitle}>Immigration & Business Services</h1>

      <div className={styles.servicesGrid}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceTile} onClick={() => toggleSection(index)}>
            <div className={styles.iconContainer}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            {openSection === index && <p className={styles.serviceDescription}>{service.description}</p>}
          </div>
        ))}
      </div>

      {/* Additional sections */}
      <div className={styles.serviceSectionTwoThirds}>
        <h2 className={styles.highlightedTitle}>What We Can Do for You</h2>
        <div className={styles.flexContainer}>
          <div className={styles.imageOneThird}>
            <img src={image1} alt="Immigration support" />
          </div>
          <div className={styles.textTwoThirds}>
            <ul>
              <li>Prepare your application and supporting documents to maximize your points.</li>
              <li>Provide instructions on steps to increase your point total.</li>
              <li>Assist with interview and test preparation.</li>
              <li>Manage your application to optimize the likelihood of obtaining an interview waiver.</li>
              <li>Post-landing settlement and job search assistance.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Should We Pay the Retainer */}
      <div className={styles.serviceSectionTwoThirds}>
        <h2 className={styles.highlightedTitle}>Why Should We Pay the Retainer?</h2>
        <div className={styles.flexContainer}>
          <div className={styles.textTwoThirds}>
          <p>
        When deciding whether to handle your immigration process on your own, it is essential to <strong>evaluate the true importance of your immigration matter</strong>. While doing it yourself may seem cost-effective, without <strong>positive results, the outcome could become very costly</strong>. Your immigration decisions will impact your <strong>professional and family life</strong> – it can define the choice of profession and your degree of success in Canada. 
      </p>
      <p>
        Additionally, <strong>immigration affects the future of your immediate family and descendants</strong> for generations to come. The new immigration programs are complex, with <strong>increased competition and numerous technical requirements</strong>. It is therefore <strong>crucial that your application is thoroughly prepared and professionally represented</strong> to maximize your success. If your case is refused, remember that you will <strong>have limited options to appeal, argue, or challenge the decision</strong> due to the strict rules and regulations, Acts, Appeals, and Procedures.
      </p>
      <p>
        At ZFCanada, <strong>many of our team members have been through the same journey</strong>, so we fully understand how challenging and stressful the process can be. <strong>ZFCanada is here to provide the expertise, support, and guidance you need</strong> to navigate this process effectively, helping you avoid the costly mistakes of going it alone.
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
