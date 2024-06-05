import React, {useState} from "react";
import { FaChevronDown, FaChevronUp, FaGlobe } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import '../../styles/Store/Header.css';
import {useNavigate } from "react-router-dom";
import { SiEpicgames } from "react-icons/si";

const Header = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleButtonClick = ()     => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handlePersonClick = () => {
        navigate('/login');
    };
    return (
        <header className="header">
            <div className="btn-logo-show-hide-menu">
                <div className="list_extention">
                    <button className="btn-logo" onClick={handleButtonClick}>
                        {/*img logo epic*/}
                        <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" height="32" width="32" viewBox="0 0 32 32" className="img-logo" >
                            <path fill="white" d="M12.349 21l-.39.982h.773L12.349 21zm2.29-10.224V7.909c0-.457-.21-.668-.648-.668h-.713v4.204h.713c.438 0 .648-.212.648-.668zm11.698-9.019H5.36c-1.702 0-2.328.627-2.328 2.328v20.526l.025.537c.038.372.047.732.392 1.14a7.23 7.23 0 0 0 .387.302l.533.248 10.329 4.327c.537.245.76.342 1.15.333h.003c.39.008.613-.088 1.15-.333l10.329-4.327.533-.248.387-.302c.345-.41.353-.77.392-1.14a5.28 5.28 0 0 0 .025-.537V4.086c0-1.702-.628-2.328-2.328-2.328h-.002zm-9.181 3.952h1.735v11.404h-1.735V5.709zm.117 14.181h1.01v3.45h-.952v-1.982l-.882 1.35h-.02l-.877-1.34v1.972h-.937v-3.45h1.01l.823 1.337.823-1.337zm-5.73-14.181h2.723c1.41 0 2.108.7 2.108 2.118v3.03c0 1.417-.697 2.118-2.108 2.118h-.988v4.139h-1.735V5.709zm-4.729 0h3.859v1.58H8.549v3.225h2.043v1.58H8.549v3.438h2.157v1.58H6.814V5.709zm3.317 17.169c-.365.3-.873.532-1.498.532-1.075 0-1.878-.74-1.878-1.785v-.01c0-1.005.788-1.795 1.858-1.795.607 0 1.035.187 1.4.503l-.562.675c-.247-.207-.493-.325-.833-.325-.498 0-.882.418-.882.947v.01a.91.91 0 0 0 .937.957c.232 0 .41-.05.552-.143v-.418h-.68v-.7h1.587v1.553zm1.765-3.012h.922l1.468 3.475h-1.025l-.252-.617h-1.332l-.247.617h-1.005l1.468-3.475h.002zm3.874 9.231l-4.862-1.672h9.931l-5.069 1.672zm5.947-5.755h-2.8v-3.45h2.775v.813h-1.828v.523h1.657v.755h-1.657v.547h1.854v.813-.002zm-1.907-8.249V7.729c0-1.417.697-2.118 2.108-2.118h.843c1.41 0 2.092.685 2.092 2.102v2.33h-1.702V7.811c0-.457-.212-.668-.648-.668h-.292c-.453 0-.665.212-.665.668v7.2c0 .457.212.668.665.668h.325c.438 0 .648-.212.648-.668v-2.573h1.702v2.655c0 1.417-.697 2.119-2.108 2.119h-.86c-1.41 0-2.108-.7-2.108-2.119zm5.165 7.184c0 .705-.557 1.123-1.395 1.123-.612 0-1.193-.192-1.617-.572l.532-.637a1.77 1.77 0 0 0 1.118.413c.257 0 .395-.088.395-.237v-.01c0-.143-.113-.222-.582-.33-.735-.168-1.302-.375-1.302-1.085v-.01c0-.642.508-1.105 1.337-1.105.587 0 1.045.158 1.42.458l-.478.675c-.315-.222-.66-.34-.967-.34-.232 0-.345.098-.345.222v.01c0 .158.118.227.597.335.793.173 1.287.428 1.287 1.075v.01.003z"></path>
                        </svg>
                        {isDropdownOpen ? (
                            <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                        ) : (
                            <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                        )}
                    </button>
                    {/*Hiển thị menu khi click vào logo*/}
                    <div className={`dropdown_content-logo ${isDropdownOpen ? 'show' : 'hide'}`}>
                        <div className="backgroungd_none"></div>
                        <div className="column">
                            <div className="column-1">
                                <div className="dropdown-column">
                                    <h4>Play</h4>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            Fortnite
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/nvjfw8LwTbyiETLiJEeE)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/nvjfw8LwTbyiETLiJEeE)',
                                        }}>
                                        </div>
                                        <span>
                                            Rocket League
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                        }}>
                                        </div>
                                        <span>
                                            Fall Guys
                                        </span>
                                    </a>
                                </div>
                                <div className="dropdown-column">
                                    <h4>Discover</h4>
                                    <a href="#">
                                        <SiEpicgames size={22}/>
                                        <span>
                                            Epic Games Store
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/VYHbV8mMQhCzjH0TIGVO)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/VYHbV8mMQhCzjH0TIGVO)',
                                        }}>
                                        </div>
                                        <span>
                                            Fab
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/SueHxUd6SFy59VZItanD)',
                                        }}>
                                        </div>
                                        <span>
                                            Sketchfab
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/SueHxUd6SFy59VZItanD)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/GnVa6hUTtSLOfMZrWNxe)',
                                        }}>
                                        </div>
                                        <span>
                                            ArtStation
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="column-2">
                                <div className="dropdown-column">
                                    <h4>Create</h4>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/B8hDILAISampfm5yFOQA)',
                                        }}>
                                        </div>
                                        <span>
                                            Unreal Engine
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/1MdipiMMQeSDZe15gy3V)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            Create in Fortnite
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/E3A9GiKvTxe0vldk0b7T)',
                                        }}>
                                        </div>
                                        <span>
                                            MetaHuman
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/bx1K2n3URsKKIismuqzF)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)',
                                        }}>
                                        </div>
                                        <span>
                                            Twinmotion
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/fBKKKvETTG2PSGTs19a9)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)',
                                        }}>
                                        </div>
                                        <span>
                                            RealityScan
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/4hsNBIcXQcCzsN0FYLfD)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/gdXF6wXaRzq7FLerxFmv)',
                                        }}>
                                        </div>
                                        <span>
                                            RealityCapture
                                        </span>
                                    </a>
                                    <a href="#">
                                        <SiEpicgames size={22}/>

                                        <span>
                                            Epic Online Services
                                        </span>
                                    </a>
                                    <a href="#">
                                        <SiEpicgames size={22}/>

                                        <span>
                                            Publish on Epic Games Store
                                        </span>
                                    </a>
                                    <a href="#">
                                        <div className="logo" style={{
                                            maskImage: 'url(https://media.graphassets.com/ijWMz82OStqcWRGDawM9)',
                                            WebkitMaskImage: 'url(https://media.graphassets.com/ijWMz82OStqcWRGDawM9)',
                                        }}>
                                        </div>
                                        <span>
                                            Kids Web Services
                                        </span>
                                    </a>
                                    <a href="#">
                                        <SiEpicgames size={22}/>
                                        <span>
                                            Developer Community
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 32" height="32" width="2" fill="#303034" style={{margin: '20px',}}>
                    <path d="M0 0h2v32H0z"></path>
                </svg>

            </div>
            <div className="navbar_header">
                <h1 style={{fontSize: "20px"}}>STORE</h1>
                <div className="main-nav">
                    <nav className="nav-links">
                        <div className="navbar-item">
                            <a href="#">Support</a>
                        </div>
                        <div className="navbar-item distribute">
                            <a href="#">Distribute</a>
                            <div className="dropdown-content">
                                <div className="backgroungd_none"></div>
                                <div className="list_distribute">
                                    <a href="#">Distribute on Epic Games Store</a>
                                    <a href="#">Developer Forums</a>
                                    <a href="#">Documentation</a>
                                    <a href="#">Learning</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="toolbar">
                    <div className="tools">
                        <div className="languages">
                            <div className="img-languages">
                                <FaGlobe size={25} color="#AAAAAE"/>
                            </div>
                            <div className="language">
                                <div className="backgroungd_none"></div>
                                <div className="list-languages">
                                    <a href="#">English</a>
                                    <a href="#">Franch</a>
                                    <a href="#">Tiếng Việt</a>
                                </div>
                            </div>
                        </div>
                        <div className="person" onClick={handlePersonClick}>
                            <a className="profile">
                                <BsPersonCircle size={25} color="#AAAAAE"/>
                            </a>
                        </div>
                    </div>
                </div>
                <a href="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncherInstaller.msi?trackingId=00c38629eacd45eeaa9835c1d4015b8c"
                   className="download-btn"> Download
                </a>
        </div>
</header>
)
    ;
}

export default Header;
