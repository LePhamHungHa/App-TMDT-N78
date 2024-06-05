import '../../../styles/Store/MainStore/Main.css';

import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

import React, {useEffect} from "react";
import {Routes, Route, NavLink, useLocation} from 'react-router-dom';
import Browse from './Browse/Browse';
import Discover from "./Discover/Discover";
import News from "./News/News";
import TopSeller from "./Discover/TopSeller";
import MostPlayed from "./Discover/MostPlayed";
import TopUpcommingWishlisted from "./Discover/TopUpconmingWishlisted";

const Main = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <main>
            <div className="top-main">
                <div className="top-main-content">
                    <div className="search">
                        <input type="text" placeholder="Search store" className="search-bar"/>
                        <CiSearch className="icon-search"/>
                    </div>
                    <NavLink to="/" className="nav-link">Discover</NavLink>
                    <NavLink to="/Browse" className="nav-link">Browse</NavLink>
                    <NavLink to="/News" className="nav-link">News</NavLink>
                    <a href="#" className="show-menu-main"><FaAngleDown/></a>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Discover/>}/>
                <Route path="/Browse" element={<Browse/>}/>
                <Route path="/News" element={<News/>}/>
                <Route path="/TopSeller" element={<TopSeller/>} />
                <Route path="/MostPlayed" element={<MostPlayed/>} />
                <Route path="/TopUpcommingWishlisted" element={<TopUpcommingWishlisted/>} />
            </Routes>
        </main>
    );
};

export default Main;
