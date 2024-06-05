import React, {useState} from "react";
import '../../../../styles/Store/MainStore/Discover/Discover_section-2.css'

import {IoAdd} from "react-icons/io5";

import gameData from "../../../../Data/dataGame.json";

import farcry4 from "../../../../img/Store/farcry4.png";
import sales from "../../../../img/Store/sales.png";
import free_game from "../../../../img/Store/free-games.png";
import app from "../../../../img/Store/apps.png";
import {Link, useNavigate} from "react-router-dom";

const Discover_section2 =() =>{
    const [visibleGames, setVisibleGames] = useState(5);

    return(
        <div className="section-2">
            <span className="span_7">
                <h2>Fornite Experiences</h2>
                <div className="FE_container">
                    <div className="FE-content">
                        <img src={farcry4} className="For_Exp-img"/>
                        <div className="For_Exp-content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="FE-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="FE-content">
                        <img src={farcry4} className="For_Exp-img"/>
                        <div className="For_Exp-content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="FE-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="FE-content">
                        <img src={farcry4} className="For_Exp-img"/>
                        <div className="For_Exp-content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="FE-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                </div>
            </span>
            <span className="span_8">
                <div className="GN-cont">
                    <img src={farcry4}/>
                    <div className="Game_News-content">
                        <h3>Find it in Fortnite</h3>
                        <p>A new way to discover what's happening in Fortnite</p>
                        <div className="GN-link"><a href="#">Discover</a></div>
                    </div>
                </div>
                <div className="GN-cont">
                    <img src={farcry4}/>
                    <div className="Game_News-content">
                        <h3>Find it in Fortnite</h3>
                        <p>A new way to discover what's happening in Fortnite</p>
                        <div className="GN-link"><a href="#">Discover</a></div>
                    </div>
                </div>
            </span>
            <span className="span_9">
                <div className="top-list">
                    <div className="top_cont">
                        <h2>Top Sellers</h2>
                        <Link to="/TopSeller">View More</Link>
                    </div>
                    <div className="top-lgame">
                        {gameData.slice(0, visibleGames).map((game, index) => (
                            <div className="game-card" key={index}>
                                <button className="span_9-add-game-to-wishlist"><IoAdd size={15}/></button>
                                <img src={game.image} alt={game.title} className="img-game"/>
                                <div className="game-info">
                                    <h3>{game.title}</h3>
                                    <div className="prices">
                                        <span className="discount">-{game.discount}%</span>
                                        <div className="discount-sale-container">
                                            <span
                                                className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                            <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="top-list">
                    <div className="top_cont">
                        <h2>Most Played</h2>
                        <Link to="/MostPlayed">View More</Link>
                    </div>
                    <div className="top-lgame">
                        {gameData.slice(0, visibleGames).map((game, index) => (
                            <div className="game-card" key={index}>
                                <button className="span_9-add-game-to-wishlist"><IoAdd size={15}/></button>
                                <img src={game.image} alt={game.title} className="img-game"/>
                                <div className="game-info">
                                    <h3>{game.title}</h3>
                                    <div className="prices">
                                        <span className="discount">-{game.discount}%</span>
                                        <div className="discount-sale-container">
                                            <span
                                                className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                            <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="top-list">
                    <div className="top_cont">
                        <h2>Top Upcomming Wishlisted</h2>
                        <Link to="/TopUpcommingWishlisted">View More</Link>
                    </div>
                    <div className="top-lgame">
                        {gameData.slice(0, visibleGames).map((game, index) => (
                            <div className="game-card" key={index}>
                                <button className="span_9-add-game-to-wishlist"><IoAdd size={15}/></button>
                                <img src={game.image} alt={game.title} className="img-game"/>
                                <div className="game-info">
                                    <h3>{game.title}</h3>
                                    <div className="prices">
                                        <span className="discount">-{game.discount}%</span>
                                        <div className="discount-sale-container">
                                            <span
                                                className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                            <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </span>

            <span className="span_10">
                <div className="span_10-container">
                    <div className="span_10-content">
                        <button className="span_10-add-game-to-wishlist"><IoAdd size={18}/></button>
                        <img src={farcry4}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_10-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="span_10-content">
                        <img src={farcry4}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_10-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="span_10-content">
                        <button className="span_10-add-game-to-wishlist"><IoAdd size={18}/></button>
                        <img src={farcry4}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <p className="price">₫249,000</p>
                        </div>
                    </div>
                </div>
            </span>
            <span className="span_11">
                <div className="span_11-container">
                    <div className="span_11-title-top">
                        <h2>Trending</h2>
                        <a href="#">View More</a>
                    </div>
                </div>
                <div className="span_11-games-list">
                    {gameData.map((game, index) => (
                        <div className="game-card" key={index}>
                            <div className="img-game">
                                <button className="span_11-add-game-to-wishlist"><IoAdd size={20}/>
                                </button>
                                <img src={game.image} alt={game.title}/>
                            </div>
                            <div className="game-info">
                                <h3>{game.title}</h3>
                                <div className="prices">
                                    <span className="discount">-{game.discount}%</span>
                                    <div className="discount-sale-container">
                                        <span
                                            className="original-price">₫{game.originalPrice.toLocaleString()}</span>
                                        <span className="sale-price">₫{game.price.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </span>
            <span className="span_12">
                <div className="span_12-container">
                    <div className="span_12-content">
                        <img src={sales}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_12-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="span_12-content">
                        <img src={free_game}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_12-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                    <div className="span_12-content">
                        <img src={app}/>
                        <div className="content">
                            <h3>Find it in Fortnite</h3>
                            <p>A new way to discover what's happening in Fortnite</p>
                            <div className="span_12-link"><a href="#">Discover</a></div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
};

export default Discover_section2;