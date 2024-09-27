import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg'; 
import rcicLogo from '../assets/images/rcic.png';  
import styles from './Header.module.css';  // Use module.css

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isImmigrationOpen, setIsImmigrationOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);

  let prevScrollPos = window.pageYOffset;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleImmigrationDropdown = () => {
    setIsImmigrationOpen(!isImmigrationOpen);
    setIsBusinessOpen(false);
  };

  const toggleBusinessDropdown = () => {
    setIsBusinessOpen(!isBusinessOpen);
    setIsImmigrationOpen(false);
  };

  const handleMouseLeave = () => {
    setIsImmigrationOpen(false);
    setIsBusinessOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isHeaderVisible ? styles.headerVisible : styles.headerHidden}`}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.headerTop}>
        <div className={styles.headerTopContent}>
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/people/Zfcanada-Immigration-Services/61559178020720/</div>" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/zfcanadaimmigrationservices/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/19058585589" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://ca.linkedin.com/in/zfcanada-immigration-services-417771213?challengeId=AQHqkQzJN5WXGgAAAZHiaknbab344r5aGU-nBcpeBm4WXk1Xn90woYL91tndF3JEC0XSA4JhNUC0Gyqng7bTt2I3DNjv6W88mw&submissionId=48790f36-1245-f417-3d28-3199d2fe275e&challengeSource=AgEH-F4oeQWLaAAAAZHialC3D2uNl3N2zrWOOvLepfwzH3LNU-sDOjz2rAcWzLc&challegeType=AgFZcCn_iRIQtQAAAZHialC6N2eIKZdqauy1TxVlnyZ0ECK57z1Q_gA&memberId=AgF6gVl2iODiOgAAAZHialC9rxcL1iPeIiEIaMNmnbId66s&recognizeDevice=AgEZ1zwpCVYVVwAAAZHialDAW9EL8f4fYvYuyxfugTV8UA0gNd5e" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        
          <div className={styles.contactDetails}>
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@zfcanada.com" className={styles.email}>info@zfcanada.com</a>

            <i className="fas fa-map-marker-alt"></i>
            <span className={styles.address}>214-808 Britannia Rd W, Mississauga ON CA</span>

            <div className={styles.phoneBox}>
              <i className="fas fa-comments"></i>
              <a href="tel:+19058585589" className={styles.phoneNumber}>+1 905 858 5589</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.logosSection}>
        <div className={styles.logoLeft}>
          <img src={logo} alt="Firm Logo" className={styles.firmLogo} />
        </div>
        <div className={styles.logoRight}>
          <img src={rcicLogo} alt="RCIC Logo" className={styles.rcicLogo} />
        </div>
      </div>

      <nav className={styles.navbar}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/firm-profile">FIRM PROFILE</Link></li>
          <li className={styles.dropdown}>
            <button onClick={toggleImmigrationDropdown} className={styles.dropdownToggle}>
              IMMIGRATION CATEGORY {isImmigrationOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
            </button>
            {isImmigrationOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link to="/immigration-category/ExpressEntry">Express Entry Program</Link></li>
                <li><Link to="/immigration-category/PNP">PNP Program</Link></li>
                <li><Link to="/immigration-category/FamilyVisa">Family Sponsorship</Link></li>
                <li><Link to="/immigration-category/StudyPermit">Study Permit Processing</Link></li>
                <li><Link to="/immigration-category/VisitorVisa">Visitor and Super Visa</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/startup-visa">STARTUP VISA</Link></li>
          <li className={styles.dropdown}>
            <button onClick={toggleBusinessDropdown} className={styles.dropdownToggle}>
              BUSINESS VISA {isBusinessOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
            </button>
            {isBusinessOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link to="/business-visa/investor-program">Investor Program</Link></li>
                <li><Link to="/business-visa/selfemployed-program">Self Employed Program</Link></li>
                <li><Link to="/business-visa/entrepreneur-program">Entrepreneur Program</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/irb">IRB</Link></li>
          <li><Link to="/news">NEWS & ALERTS</Link></li>
          <li><Link to="/free-assessment">FREE ASSESSMENT</Link></li>
          <li><Link to="/consultation">CONSULTATION</Link></li>
          <li><Link to="/contactus">CONTACT US</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
