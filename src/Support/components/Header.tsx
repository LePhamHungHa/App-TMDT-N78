import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import logo from '../img/epic_games_logo.png';
import '../Style/Header.css';
import { TbBrandFortnite } from "react-icons/tb";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaRegFaceMehBlank } from "react-icons/fa6";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { SiEpicgames, SiSketchfab, SiUnrealengine, SiMercedes } from "react-icons/si";
import { FaArtstation } from "react-icons/fa";
import { LuHandMetal } from "react-icons/lu";
import { GiRoundStar, GiSurroundedEye } from "react-icons/gi";
import { BsWrenchAdjustableCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showLogoDropdown, setShowLogoDropdown] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const resizeListener = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        resizeListener();
        window.addEventListener('resize', resizeListener);


        const storedMobileMenuState = localStorage.getItem('mobileMenuOpen');
        if (storedMobileMenuState !== null) {
            setShowMobileMenu(JSON.parse(storedMobileMenuState));
        }

        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown(prevState => !prevState);
    };

    const toggleLogoDropdown = () => {
        setShowLogoDropdown(prevState => !prevState);
    };

    const toggleMobileMenu = () => {
        const newState = !showMobileMenu;
        setShowMobileMenu(newState);
        localStorage.setItem('mobileMenuOpen', JSON.stringify(newState));
    };

    document.addEventListener('DOMContentLoaded', () => {
        const languageMenuIcon = document.querySelector('.icon-language-mobile-menu');
        const languageDropdown = document.querySelector('.language-dropdown');

        if (languageMenuIcon && languageDropdown) {
            languageMenuIcon.addEventListener('click', () => {
                languageDropdown.classList.toggle('active');
            });
        }
    });

    useEffect(() => {
        if (showMobileMenu) {
            if (isMobile && !showMobileMenu) {
                setShowMobileMenu(true);
            }
        }
    }, [showMobileMenu, isMobile]);

    return (
        <header className="header">
            <div className="left-section">
                <button className="btn-logo" onClick={toggleLogoDropdown}>
                    <img src={logo} className="img-logo" alt="Epic Games Logo"/>
                    <FaChevronDown className={`icon-logo ${showLogoDropdown ? 'icon-rotate' : ''}`} color="#AAAAAE"/>
                </button>
                {showLogoDropdown && (
                    <div className="logo-dropdown-menu">
                        <div className="column">
                            <div className="menu-section">
                                <h4>Play</h4>
                                <a href="#"><TbBrandFortnite/>Fortnite</a>
                                <a href="#"><MdOutlineRocketLaunch/>Rocket League</a>
                                <a href="#"><FaRegFaceMehBlank/>Fall Guys</a>
                            </div>
                            <div className="menu-section">
                                <h4>Discover</h4>
                                <a href="#"><PiFacebookLogoDuotone/>Epic Games Store</a>
                                <a href="#"><SiEpicgames/>Fab</a>
                                <a href="#"><SiSketchfab/>Sketchfab</a>
                                <a href="#"><FaArtstation/>ArtStation</a>
                            </div>
                        </div>
                        <div className="column">
                            <div className="menu-section">
                                <h4>Create</h4>
                                <a href="#"><SiUnrealengine/>Unreal Engine</a>
                                <a href="#"><TbBrandFortnite/>Create in Fortnite</a>
                                <a href="#"><LuHandMetal/>MetaHuman</a>
                                <a href="#"><SiMercedes/>Twinmotion</a>
                                <a href="#"><GiRoundStar/>RealityScan</a>
                                <a href="#"><GiSurroundedEye/>RealityCapture</a>
                                <a href="#"><SiEpicgames/>Epic Online Services</a>
                                <a href="#"><SiEpicgames/>Publish on Epic Games Store</a>
                                <a href="#"><BsWrenchAdjustableCircle/>Kids Web Services</a>
                                <a href="#"><SiEpicgames/>Developer Community</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {!isMobile && (
                <>
                    <div className="nav-links">
                        <a href="#">Store</a>
                        <a href="#">News</a>
                        <Link to="/faq">FAQ</Link>
                        <a href="/help">Help</a>
                        <Link to="/about">About Epic</Link>
                    </div>
                    <div className="right-section">
                        <div className="icon-containers" onClick={toggleDropdown}>
                            <FaGlobe size={25} color="#AAAAAE"/>
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <a href="#">English<FaGlobe/></a>
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
                            <BsPersonCircle size={25} color="#AAAAAE"/>
                        </div>
                        <div className="icon-container-download">
                            <button className="download-btn">Download</button>
                        </div>
                    </div>
                </>
            )}
            {isMobile && (
                <div className="icon-menu-mobile" onClick={toggleMobileMenu}>
                    {showMobileMenu ? (
                        <FaTimes size={25} color="#AAAAAE"/>
                    ) : (
                        <FaBars size={25} color="#AAAAAE"/>
                    )}
                </div>
            )}
            {isMobile && showMobileMenu && (
                <div className="table-menu">

                    <div className="icon-login">
                        <BsPersonCircle size={25} color="#AAAAAE"/>
                    </div>

                    <div className="icon-language-mobile-menu" onClick={toggleDropdown}>
                        <FaGlobe size={25} color="#AAAAAE"/>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                    <button className="back-link"> ◀️ Back</button>
                                    <a href="#">English <span className ="icon">🌐</span></a>
                                    <a href="#">Vietnamese</a>
                                    <a href="#">العربية</a>
                                    <a href="#">Deutsch</a>
                                    <a href="#">Español</a>
                                    <a href="#">Español (LA)</a>
                                    <a href="#">Français</a>
                                    <a href="#">Italiano</a>
                                    <a href="#">日本語</a>
                                    <a href="#">한국어</a>
                                    <a href="#">Português (Brasil)</a>

                            </div>
                        )}
                    </div>

                    <div className="nav-link-mobile">
                        <a href="#">Store</a>
                        <a href="#">News</a>
                        <Link to="/faq">FAQ</Link>
                        <a href="/help">Help</a>
                        <Link to="/about">About Epic</Link>
                    </div>

                    <div className="icon-download-mobile">
                        <button className="download-btn">Download</button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
