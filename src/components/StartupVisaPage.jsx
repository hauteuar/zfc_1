import React from 'react';
import styles from './StartupVisaPage.module.css';

const StartupVisaPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Canada’s Start-Up Visa Program</h1>
        <p>
          The Start-Up Visa Program is especially useful for foreign entrepreneurs unfamiliar with Canadian business laws and networks.
        </p>
      </header>

      <section className={styles.benefits}>
        <h2>Key Benefits</h2>
        <ul>
          <li>No Proof of Funds</li>
          <li>No Queue</li>
          <li>PR Fast-Track</li>
          <li>Temporary Work Permit</li>
        </ul>
      </section>

      <section className={styles.requirements}>
        <h2>Investment Requirements</h2>
        <p>Secure a minimum investment of CAD 200,000 from a designated VC fund or CAD 75,000 from an Angel Investor group.</p>
      </section>

      <section className={styles.idea}>
        <h2>Unique Idea</h2>
        <p>
          The success of the program depends on having an innovative and original idea. Up to five foreign nationals can apply as part of the same business venture.
        </p>
      </section>

      <section className={styles.proofOfFunds}>
        <h2>Proof of Funds</h2>
        <p>
          You must show that you have enough money to support yourself and your family after you get to Canada.
        </p>
      </section>

      <section className={styles.designatedOrganizations}>
        <h2>Designated Organizations</h2>
        <p>Designated organizations help start-ups with capital, mentoring, and networking.</p>
      </section>

      <section className={styles.programOverview}>
        <h2>Program Overview</h2>
        <ol>
          <li>Entrepreneurship Development</li>
          <li>Investment Readiness</li>
          <li>Immigration Module</li>
          <li>Growth Acceleration</li>
        </ol>
      </section>

      <footer className={styles.footer}>
        <p>We speak for you & make the law work for you.</p>
      </footer>
    </div>
  );
};

export default StartupVisaPage;
