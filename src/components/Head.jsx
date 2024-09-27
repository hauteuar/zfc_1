import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown, FaBars } from 'react-icons/fa'; // Dropdown and Hamburger Icons
import '../Styles/Head.css'; // Import your CSS file for the header
import logo from '../assets/images/logo.jpeg'; // Logo image

const Head = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  // Handle scroll event to show logo when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when mouse moves away
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if it's the home page to hide logo until scroll
  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`header ${scrolled || !isHomePage ? 'scrolled' : ''}`}
      onMouseLeave={closeDropdown} // Close dropdown when mouse leaves the header area
    >
      <div className="header-content">
        <div className={`logoh ${scrolled || !isHomePage ? 'show-logoh' : ''}`}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/services" className="nav-link">SERVICES</Link>
          <Link to="/firm-profile" className="nav-link">FIRM PROFILE</Link>
          <div className="dropdown" onMouseEnter={toggleDropdown}>
            <Link to="/immigration-category" className="nav-link">IMMIGRATION CATEGORY <FaChevronDown /></Link>
            {dropdownOpen && (
              <div className="dropdown-canvas">
                <div className="dropdown-row">
                  <Link to="/immigration-category/entry-programs">Express Entry Programs</Link>
                  <Link to="/immigration-category/skilled-workers">Skilled Worker Programs</Link>
                  <Link to="/immigration-category/citizenship">Citizenship Applications</Link>
                </div>
                <div className="dropdown-row">
                  <Link to="/immigration-category/work-permits">Work Permits</Link>
                  <Link to="/immigration-category/lmias">LMIAs</Link>
                  <Link to="/immigration-category/visitor-visa">Visitor Visa</Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/irb" className="nav-link">IRB</Link>
          <Link to="/free-assessment" className="nav-link">FREE ASSESSMENT</Link>
          <Link to="/consultation" className="consult-btn nav-link">CONSULT NOW</Link>
        </nav>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Head;
