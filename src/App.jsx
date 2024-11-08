import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import for Routes in React Router v6
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for icons
import Home from './pages/Home';
//import Hero from './components/Hero';
import Services from './components/Services';
import BusinessVisaPage from './pages/BusinessVisaPage';
import Footer from './components/Footer'; // Import the Footer component
import styles from './App.module.css'; // Import CSS for scroll-to-top arrow
import Head from './components/Head';
import AppointmentSection from './components/AppointmentSection';
import FirmProfile from './components/FirmProfile';
import ImmigrationPage from './components/ImmigrationPage';
import StartupVisaPage from './components/StartupVisaPage';
import BusinessVisa from './components/BusinessVisa';
import IRBPage from './components/IRBPage';
import NewsAlertsPage from './components/NewsAlertsPage';
import FreeAssessmentPage from './components/FreeAssessmentPage';
import ConsultationPage from './components/ConsultationPage';
import AdminPage from './components/AdminPage';
import ContactUsPage from './components/ContactUsPage';
import ServicesPage from './pages/ServicesPage';
import HeaderPage from './components/HeaderPage';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Show/hide scroll-to-top button based on scroll position
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <Router>
      <div className="App">
        {/* Main app content with routes */}
        <HeaderPage />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/servicespage" element={<ServicesPage />} />
          <Route exact path="/firm-profile" element={<FirmProfile />} />
          <Route exact path="/irb" element={<IRBPage />} />

          <Route path="/startup-visa" element={<StartupVisaPage />} />
          <Route exact path="/immigration-category/:section" element={<ImmigrationPage />} />
          <Route exact path="/immigration-category" element={<ImmigrationPage />} />
          <Route path="/business-visa" element={<BusinessVisa />} />
        <Route path="/business-visa/investor-program" element={<BusinessVisa />} />
        <Route path="/business-visa/self-employed" element={<BusinessVisa />} />
        <Route path="/business-visa/entrepreneur-applicant" element={<BusinessVisa />} />
        <Route path="/news" element={<NewsAlertsPage />} />
        <Route path="/free-assessment" element={<FreeAssessmentPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />


          {/* Add more routes as necessary */}
        </Routes>

        {/* Scroll-to-top Arrow */}
        {showScroll && (
          <div className={styles.scrollTop} onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </div>
        )}

        {/* Footer component */}
        <AppointmentSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
