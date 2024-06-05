import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PopularGenres from './PopularGenres';
import '../../../../styles/Store/MainStore/Browse/Browse.css'
import Aside from "./Aside";
import getData from '../../../../Data/dataGame.json'

const Browse = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="browse">
            <div className="container_browse">
                <PopularGenres />
                <div className="list_game">
                    <div className="all-game">
                        <section>
                            <div className="top-sect">
                                <label>Show:</label>
                                <div className="dropdown-select">
                                    <button onClick={handleDropdownClick} className="select-btn">
                                        <div className="select">
                                            <p className="text">All</p>
                                            {isDropdownOpen ? (
                                                <FaChevronUp className="icon-logo" color="#AAAAAE"/>
                                            ) : (
                                                <FaChevronDown className="icon-logo" color="#AAAAAE"/>
                                            )}
                                        </div>
                                    </button>
                                    <div className={`list-select ${isDropdownOpen ? 'show' : 'hide'}`}>
                                        <ul>
                                            <li><button>All</button></li>
                                            <li><button>New Release</button></li>
                                            <li><button>Coming Soon</button></li>
                                            <li><button>Alphabetical</button></li>
                                            <li><button>Price: High to Low</button></li>
                                            <li><button>Price: Low to High</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="cont-sect">
                                <div className="games-grid">
                                    {getData.map((game, index) => (
                                        <div className="game-card" key={index}>
                                            <img src={game.image} alt={game.title} className="game-image"/>
                                            <div className="game-info">
                                                <h3>{game.title}</h3>
                                                <div className="prices">
                                                    <span className="discount">-{game.discount}%</span>
                                                    <div className="discount-sale-container">
                                                        <span className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                                        <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                    <Aside/>
                </div>
            </div>
        </div>
    );
};

export default Browse;
