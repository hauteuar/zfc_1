import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/Header.css';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import zfclogo from '../assets/images/logo_zfc.jpeg';
import rciclogo from '../assets/images/rcic.jpg';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showImmigrationDropdown, setShowImmigrationDropdown] = useState(false);
    const [showBusinessDropdown, setShowBusinessDropdown] = useState(false);

    // Get the current route location
    const location = useLocation();
    const isHeroPage = location.pathname === '/'; // Adjust if HeroPage route is different

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleToggleMobileMenu = () => setIsMobile(!isMobile);

    return (
        <header>
            {/* Top rounded info bar */}
            <div className={`info-bar ${isScrolled ? 'hidden' : ''}`}>
                <div className="info-left">
                    <FaEnvelope /> <a href="mailto:info@zfcanada.com">info@zfcanada.com</a>
                </div>
                <div className="info-right">
                    <a href="https://www.facebook.com/people/Zfcanada-Immigration-Services/61559178020720/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.linkedin.com/in/zfcanada-immigration-services-417771213" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://wa.me/19058585589" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                    <a href="tel:+19058585589" className="phone-icon" title="Call ZFC">
                        <FaPhone />
                    </a>
                </div>
            </div>

            <div className={`header ${isScrolled ? 'scrolled' : ''} ${isHeroPage ? '' : 'red-background'}`}>
                <img src={zfclogo} alt="ZFC Logo" className="left-logo" />

                <div className="hamburger" onClick={handleToggleMobileMenu}>
                    ☰
                </div>

                <nav className={`nav ${isMobile ? 'nav-mobile' : ''}`}>
                    <a href="/">HOME</a>
                    <a href="/services">SERVICES</a>
                    <a href="/firm-profile">FIRM PROFILE</a>
                    
                    {/* Immigration Category Dropdown */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => setShowImmigrationDropdown(true)}
                        onMouseLeave={() => setShowImmigrationDropdown(false)}
                    >
                        <a href="/immigration-category" className="dropdown-toggle">IMMIGRATION CATEGORY</a>
                        {showImmigrationDropdown && (
                            <div className="dropdown-menu">
                                <a href="/immigration-category/express-entry">Express Entry</a>
                                <a href="/immigration-category/study-permit">Study Permit</a>
                                <a href="/immigration-category/family-visa">Family Visa</a>
                                <a href="/immigration-category/pnp">Provincial Nominee Program (PNP)</a>
                                <a href="/immigration-category/visitor">Visitor Visa</a>
                            </div>
                        )}
                    </div>

                    {/* Business Visa Dropdown */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => setShowBusinessDropdown(true)}
                        onMouseLeave={() => setShowBusinessDropdown(false)}
                    >
                        <a href="/business-visa" className="dropdown-toggle">BUSINESS VISA</a>
                        {showBusinessDropdown && (
                            <div className="dropdown-menu">
                                <a href="/business-visa/self-employed">Self-Employed Visa</a>
                                <a href="/business-visa/investor-program">Immigrant Investor Program</a>
                                <a href="/business-visa/entrepreneur-applicant">Entrepreneur Applicant</a>
                            </div>
                        )}
                    </div>

                    <a href="/irb">IRB</a>
                    <a href="/news">NEWS & ALERTS</a>
                    <a href="/free-assessment">FREE ASSESSMENT</a>
                    <a href="/consultation">CONSULTATION</a>
                </nav>

                <img src={rciclogo} alt="RCIC Logo" className="right-logo" />
            </div>
        </header>
    );
};

export default Header;
