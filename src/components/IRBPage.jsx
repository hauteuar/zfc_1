import React from 'react';
import styles from '../Styles/IRBPage.module.css';

const IRBPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.highlights}>
        <div className={styles.experience}>20+ years of experience</div>
        <div className={styles.clients}>19000+ happy clients</div>
      </div>

      <section className={styles.content}>
        <h1>Immigration and Refugee Board of Canada (IRB)</h1>
        <p>
          Sufian Ahmed is a Regulated Canadian Immigration Consultant (RCIC) and a member of good standing with the College of Immigration and Citizenship Consultants (CICC).
        </p>
        <p>
          The Immigration and Refugee Board of Canada (IRB) is Canada’s largest independent administrative tribunal, tasked with adjudicating immigration and refugee matters. The IRB ensures that decisions are made efficiently, fairly, and in compliance with the law. Among its primary responsibilities is determining who qualifies for refugee protection among the thousands of claimants who seek asylum in Canada each year.
        </p>

        <h2>Key Responsibilities</h2>
        <h3>Refugee Protection Division (RPD):</h3>
        <ul>
          <li><strong>Assessment of Claims:</strong> The RPD assesses claims for refugee protection made by individuals already in Canada. It determines whether claimants are Convention refugees or persons in need of protection.</li>
          <li><strong>Fair Hearings:</strong> The RPD conducts hearings to allow claimants to present their cases, ensuring a fair and thorough examination of each claim.</li>
          <li><strong>Decision Making:</strong> The division makes decisions based on the evidence presented, ensuring that claimants who genuinely need protection receive it.</li>
        </ul>

        <h3>Immigration Division (ID):</h3>
        <ul>
          <li><strong>Admissibility Hearings:</strong> The ID conducts hearings to determine whether individuals are admissible to Canada or should be removed based on grounds such as security, human rights violations, or criminality.</li>
          <li><strong>Detention Reviews:</strong> The ID reviews the detention of individuals to determine whether continued detention is warranted or if release conditions should be set.</li>
        </ul>

        <h3>Immigration Appeal Division (IAD):</h3>
        <ul>
          <li><strong>Appeal Hearings:</strong> The IAD hears appeals on various immigration matters, including family sponsorship refusals, removal orders, and residency obligation determinations.</li>
          <li><strong>Decision Reviews:</strong> The division reviews the decisions made by immigration officers, ensuring they are fair and just.</li>
        </ul>

        <h3>Refugee Appeal Division (RAD):</h3>
        <ul>
          <li><strong>Appeal Reviews:</strong> The RAD provides a second review of RPD decisions, offering an opportunity for claimants to have their cases re-examined.</li>
          <li><strong>Final Decisions:</strong> The RAD issues final decisions on refugee appeals, ensuring that errors in the initial decisions can be corrected.</li>
        </ul>

        <h2>Principles and Values</h2>
        <ul>
          <li><strong>Fairness:</strong> The IRB is committed to providing fair hearings and making impartial decisions based on the merits of each case.</li>
          <li><strong>Efficiency:</strong> The board strives to process cases promptly, minimizing delays and ensuring timely protection for those in need.</li>
          <li><strong>Integrity:</strong> The IRB upholds the highest standards of integrity, ensuring that its decisions are made transparently and in accordance with the law.</li>
          <li><strong>Respect for Diversity:</strong> The board recognizes the diverse backgrounds of claimants and ensures that hearings are conducted respectfully and without bias.</li>
        </ul>

        <h2>Challenges and Future Directions</h2>
        <ul>
          <li><strong>Increasing Caseloads:</strong> With the rising number of claimants, the IRB faces the challenge of managing an increasing caseload while maintaining fairness and efficiency.</li>
          <li><strong>Technological Integration:</strong> The IRB is exploring ways to integrate technology into its processes to enhance efficiency and accessibility.</li>
          <li><strong>Policy Adaptation:</strong> As global migration patterns change, the IRB continually adapts its policies and procedures to address emerging issues and ensure the protection of vulnerable populations.</li>
        </ul>

        <p>
          The Immigration and Refugee Board of Canada plays a critical role in upholding Canada’s humanitarian commitments and ensuring that those in need of protection receive it in a fair and just manner. Through its dedicated divisions and adherence to core principles, the IRB contributes to the integrity and efficacy of Canada’s immigration and refugee system.
        </p>
      </section>
    </div>
  );
};

export default IRBPage;
