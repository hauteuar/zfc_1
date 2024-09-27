import React from "react";
import styles from "../Styles/FreeAssessmentPage.module.css";

const FreeAssessmentPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Free Immigration Assessment</h1>
      <p className={styles.pageSubtitle}>
        Get a comprehensive assessment of your eligibility for Canadian immigration. Fill out the form below, and our team will review your details to provide you with the best immigration options.
      </p>

      <div className={styles.iframeContainer}>
        <iframe
          src="https://secure.officio.ca/qnr?id=138&hash=47b05706d4572f3939703f1d9e8cef99"
          className={styles.iframe}
          title="Free Assessment Form"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default FreeAssessmentPage;
