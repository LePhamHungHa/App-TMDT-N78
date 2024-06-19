import React, { useState } from 'react';
import { FaBars, FaGlobe, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import '../Style/MobileMenuToggle.css';

interface MobileMenuToggleProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isMobileMenuOpen, toggleMobileMenu }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState);
    };

    return (
        <div className="mobile-menu-container">
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes size={25} color="#AAAAAE" /> : <FaBars size={25} color="#AAAAAE" />}
            </button>
            <nav className={`nav-linksmobile ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <Link to="/">Store</Link>
                <Link to="/">News</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/help">Help</Link>
                <Link to="/about">About Epic</Link>
                <div className="icon-containers" onClick={toggleDropdown}>
                    <FaGlobe size={25} color="#AAAAAE" />
                    {showDropdown && (
                        <div className="dropdown-menu">
                            <a href="#">English</a>
                            <a href="#">Vietnamese</a>
                            <a href="#">العربية</a>
                            <a href="#">Deutsch</a>
                            <a href="#">Español</a>
                            <a href="#">Français</a>
                            <a href="#">日本語</a>
                            <a href="#">한국어</a>
                            <a href="#">Português (Brasil)</a>
                            <a href="#">Русский</a>
                            <a href="#">ไทย</a>
                            <a href="#">Türkçe</a>
                            <a href="#">简体中文</a>
                            <a href="#">繁體中文</a>
                        </div>
                    )}
                </div>
                <div className="icon-containers">
                    <BsPersonCircle size={25} color="#AAAAAE" />
                </div>
                <div className="icon-container-download">
                    <button className="download-btn">Download</button>
                </div>
            </nav>
        </div>
    );
};

export default MobileMenuToggle;
