import React from 'react';
import Header from '../components/Header';
import './ServicePage.css'; // Custom CSS for individual service page

const BusinessVisaPage = () => {
  return (
    <div>
    <Header />
    <div className="service-page-container">
      <div className="breadcrumb">
        <p><a href="/">Home</a> &gt; <a href="/services">Services</a> &gt; Business Visa</p>
      </div>
      <h1 className="service-page-title">Business Visa</h1>
      <div className="service-page-content">
        <p>
          Canada welcomes successful business people seeking new opportunities and challenges. 
          The Business Immigration Program encourages and facilitates the admission of these individuals.
        </p>
        <h3>Program Details:</h3>
        <ul>
          <li>Eligibility requirements for business visa applicants</li>
          <li>Application process and documentation</li>
          <li>Post-visa support services</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default BusinessVisaPage;
