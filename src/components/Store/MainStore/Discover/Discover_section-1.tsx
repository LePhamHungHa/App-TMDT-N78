import React, {useEffect, useRef, useState} from "react";
import '../../../../styles/Store/MainStore/Discover/Discover_section-1.css'

import {IoAdd} from "react-icons/io5";
import {GrNext, GrPrevious} from "react-icons/gr";
import {CiGift} from "react-icons/ci";

import gameData from "../../../../Data/dataGame.json";

import mega_sale from "../../../../img/Store/mega-sale.png";
import shop_earn_redeem from "../../../../img/Store/shop-earn-redeem.png";
import featured_giveaways from "../../../../img/Store/featured-giveaways.png";
import game_gta from "../../../../img/Store/game-gta.png";
import farcry4 from "../../../../img/Store/farcry4.png";
import deals from "../../../../img/Store/deals.png";
import free_games_news from "../../../../img/Store/Free_game-news.png";

const Discover_section1 =() =>{
    const [scrollAmountMegaSale, setScrollAmountMegaSale] = useState(0);
    const [scrollAmountNewReleases, setScrollAmountNewReleases] = useState(0);
    const gameCardWidthPercentage = 24;
    const totalCards = gameData.length;
    const scrollStep = (100 / totalCards) * gameCardWidthPercentage;
    const MegaSaleSpotlight = useRef<HTMLDivElement>(null);
    const TopNewReleases = useRef<HTMLDivElement>(null);

    const handleScrollLeftMegaSale = () => {
        const scrollWidth = MegaSaleSpotlight.current?.scrollWidth || 0;
        const clientWidth = MegaSaleSpotlight.current?.clientWidth || 0;
        const maxScroll = scrollWidth - clientWidth;
        const newScroll = Math.max(scrollAmountMegaSale - scrollStep, 0);
        setScrollAmountMegaSale(newScroll > maxScroll ? maxScroll : newScroll);
    };

    const handleScrollRightMegaSale = () => {
        const scrollWidth = MegaSaleSpotlight.current?.scrollWidth || 0;
        const clientWidth = MegaSaleSpotlight.current?.clientWidth || 0;
        const maxScroll = scrollWidth - clientWidth;
        const newScroll = Math.min(scrollAmountMegaSale + scrollStep, maxScroll);
        setScrollAmountMegaSale(newScroll < 0 ? 0 : newScroll);
    };

    const handleScrollLeftNewReleases = () => {
        const scrollWidth = TopNewReleases.current?.scrollWidth || 0;
        const clientWidth = TopNewReleases.current?.clientWidth || 0;
        const maxScroll = scrollWidth - clientWidth;
        const newScroll = Math.max(scrollAmountNewReleases - scrollStep, 0);
        setScrollAmountNewReleases(newScroll > maxScroll ? maxScroll : newScroll);
    };

    const handleScrollRightNewReleases = () => {
        const scrollWidth = TopNewReleases.current?.scrollWidth || 0;
        const clientWidth = TopNewReleases.current?.clientWidth || 0;
        const maxScroll = scrollWidth - clientWidth;
        const newScroll = Math.min(scrollAmountNewReleases + scrollStep, maxScroll);
        setScrollAmountNewReleases(newScroll < 0 ? 0 : newScroll);
    };

    useEffect(() => {
        if (MegaSaleSpotlight.current?.style) {
            MegaSaleSpotlight.current.style.transform = `translateX(-${scrollAmountMegaSale}px)`;
        }
    }, [scrollAmountMegaSale]);

    useEffect(() => {
        if (TopNewReleases.current?.style) {
            TopNewReleases.current.style.transform = `translateX(-${scrollAmountNewReleases}px)`;
        }
    }, [scrollAmountNewReleases]);

    return(
        <div className="section-1">
            <span className="span_1">
                <div className="banner">
                    <a href="#">
                        <img src={mega_sale} alt="Mega Sale" className="banner-image"/>
                    </a>
                </div>
                <div className="banner">
                    <a href="#">
                        <img src={shop_earn_redeem} alt="SHOP. EARN. REDEEM" className="banner-image"/>
                    </a>
                </div>
                <div className="banner">
                    <a href="#">
                        <img src={featured_giveaways} alt="FEATURED GIVEAWAYS" className="banner-image"/>
                    </a>
                </div>
            </span>
            <span className="span_2">
                <div className="main-content">
                    <div className="game-banner">
                        <div className="title-game">
                            <h2>SAVE DURING MEGA SALE</h2>
                            <p>Premium Edition includes the complete GTAV story,
                                Grand Theft Auto Online and all existing gameplay upgrades and content.
                            </p>
                            <div className="price-game">
                                <div className="discount">
                                    -50%
                                </div>
                                <div className="first-price">
                                    ₫455.500
                                </div>
                                <div className="price-now">
                                    ₫227.750
                                </div>
                            </div>
                            <div className="down-add">
                                <div className="down">
                                    <button className="btn-down">
                                        SAVE NOW
                                    </button>
                                </div>
                                <div className="add">
                                    <button className="btn-add">
                                        <IoAdd size={25} className="icon-add"/>
                                        ADD TO WISHLIST
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="sidebar">
                        <div className="game">
                            <img src={game_gta} alt="Wuthering Waves" className="game-img"/>
                            <div className="name-game">
                                Wuthering Waves
                            </div>
                        </div>
                        <div className="game">
                            <img src={game_gta} alt="EA SPORTS FC™ 24" className="game-img"/>
                            <div className="name-game">
                                EA SPORTS FC™ 24
                            </div>
                        </div>
                        <div className="game">
                            <img src={game_gta} alt="Hades II" className="game-img"/>
                            <div className="name-game">
                                Hades II
                            </div>
                        </div>
                        <div className="game">
                            <img src={game_gta} alt="Alan Wake 2" className="game-img"/>
                            <div className="name-game">
                                Grand Theft Auto V
                            </div>
                        </div>
                    </div>
                </span>
            <span className="span_3">
                <div className="top-container">
                    <div className="title-top">
                        <h2>MEGA Sale Spotlight</h2>
                        <GrNext size={10} className="icon-title"/>
                    </div>
                    <div className="next-prev">
                        <GrPrevious className="btn-next-prev btn-left" onClick={() => handleScrollLeftMegaSale()}/>
                        <GrNext  className="btn-next-prev btn-right" onClick={() => handleScrollRightMegaSale()}/>
                    </div>
                </div>
                <div className="games-list-container">
                    <div className="games-list" ref={MegaSaleSpotlight}>
                        {gameData.map((game, index) => (
                            <div className="game-card" key={index}>
                                <div className="img-game">
                                    <button className="add-game-to-wishlist"><IoAdd size={18}/></button>
                                    <img src={game.image} alt={game.title}/>
                                </div>
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
            </span>
            <span className="span_4">
                <div className="top-container">
                    <div className="title-top">
                        <h2>Top New Releases</h2>
                        <GrNext size={10} className="icon-title"/>
                    </div>
                    <div className="next-prev">
                        <GrPrevious className="btn-next-prev btn-left" onClick={() => handleScrollLeftNewReleases()}/>
                        <GrNext className="btn-next-prev btn-right" onClick={() => handleScrollRightNewReleases()}/>
                    </div>
                </div>
                <div className="games-list-container">
                    <div className="games-list" ref={TopNewReleases}>
                        {gameData.map((game, index) => (
                            <div className="game-card" key={index}>
                                <div className="img-game">
                                    <button className="add-game-to-wishlist"><IoAdd size={18}/></button>
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
                </div>
            </span>

            <span className="span_5">
                <div className="list_deal">
                    <div className="list_deal-img-game">
                        <img src={farcry4}/>
                        <div className="title">
                            Deals of the Week
                        </div>
                    </div>
                    <div className="list_deal-content">
                        <div className="list_deals-title-game">
                            Kao the Kangaroo
                        </div>
                        <div className="list_deal-price-game">
                            <div className="list_deals-discout">
                                -70%
                            </div>
                            <div className="list_deal-original-price">
                                ₫600,000
                            </div>
                            <div className="list_deal-price">
                                ₫180,000
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list_deal">
                    <div className="list_deal-img-game">
                        <img src={farcry4}/>
                        <div className="title">
                            Deals of the Week
                        </div>
                    </div>
                    <div className="list_deal-content">
                        <div className="list_deals-title-game">
                            Kao the Kangaroo
                        </div>
                        <div className="list_deal-price-game">
                            <div className="list_deals-discout">
                                -70%
                            </div>
                            <div className="list_deal-original-price">
                                ₫508,000
                            </div>
                            <div className="list_deal-price">
                                ₫101,600
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list_deal">
                    <div className="list_deal-img-game">
                        <img src={deals}/>
                    </div>
                    <div className="list_deal-content">
                        <div className="list_deals-title-game">
                            Check out all the deals for this week.
                        </div>
                        <div className="list_deal-link">
                            <a href="#">Browse</a>
                        </div>
                    </div>
                </div>
            </span>
            <span className="span_6">
                <div className="free_game-top">
                    <div className="title-top">
                        <CiGift size={50}/>
                        <p>Free Games</p>
                    </div>
                    <a href="#" className="btn-view-more">
                        View More
                    </a>
                </div>
                <div className="free-game">
                    <div className="game_free-content">
                        <div className="game-img">
                            <img src={farcry4}/>
                            <p>Free Now</p>
                        </div>
                        <div className="game_free-title">
                            <div className="title">Farming Simulator 22</div>
                            <p>Free Now - May 30 at 10:00PM</p>
                        </div>
                    </div>
                    <div className="game_free-content">
                        <div className="game-img">
                            <img src={free_games_news}/>
                            <p className="free_game-new">Mystety Game</p>
                        </div>
                        <div className="game_free-title">
                            <div className="title-game-new">Unlocking in 00:00:00:00</div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
};

export default Discover_section1;