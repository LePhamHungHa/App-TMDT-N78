// MobileMenuToggle.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/Mobile_menu_toggle.css';

const MobileMenuToggle = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    return (
        <div className="mobile-menu-container">
            <Link to="/" className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes size={25} color="#AAAAAE" /> : <FaBars size={25} color="#AAAAAE" />}
            </Link>
            <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <Link to="/" onClick={toggleMobileMenu}>Store</Link>
                <Link to="/" onClick={toggleMobileMenu}>News</Link>
                <Link to="/faq" onClick={toggleMobileMenu}>FAQ</Link>
                <Link to="/help" onClick={toggleMobileMenu}>Help</Link>
                <Link to="/about" onClick={toggleMobileMenu}>About Epic</Link>
            </nav>
        </div>
    );
};

export default MobileMenuToggle;
