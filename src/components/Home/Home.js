import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import './Home.css';
import secureAdvHomeBg from '../../assets/HomePageBgImg.png';
import optionTradingImg from '../../assets/OptionTradingInvestmentImg.png';
import financialIndependenceImg from '../../assets/InvestmentGrowthFinanacialIndependanceImg.png';
import expertGuidance from '../../assets/ExpertsGuidenceforIndexedUniversalLife.png';
import customerFeedback from '../../assets/InvestpoliciesFeedback.png';
import quotes from '../../assets/ProfessionalInvestorsQuotes.png';

export default function Home(){
    return(
        <div className="homePageSection1" >
            {/* section1 */}
            <div>
                <img src={secureAdvHomeBg} className="homeBgImg"></img>
                <div className="homeContainerText">
                    <div className="secureAdvTagline">The Key to a Secure Tomorrow,</div>
                    <div className="secureAdvTagline">Expert Advice Today</div>
                    <button className="homePageBtn"><Link className='link' to="/services"> OUR SERVICES</Link> </button>
                </div>
            </div>

            {/* section2 */}
            <div className="homePageSection2">
                <div className="contentContainer">
                    <div className="HomePageHeading">Our Mission and Vision</div>
                    <div className="content">Our mission is to be the trusted partner for our clients' financial success.
                    We achieve this by putting our clients first, building lasting relationships based on trust and integrity,
                    empowering our clients through education and market-focused solutions, and delivering practical and applicable
                    strategies tailored to meet their unique financial needs. </div>
                </div>
                <div className="cardContainer">
                    <div className="card">
                        <img src={optionTradingImg} className="cardImg"></img>
                        <div className="cardHeader">Investment Vehicles Workshop</div>
                        <div className="cardContent">Starting March 18, 2023 </div>
                        <button className="cardBtn"> <Link className='Btn' to="/workshop"> Register Now</Link></button>
                    </div>
                </div>
            </div>
            {/* section3 */}
            <div className="homePageSection3">
                <div className="header">Why you should choose us?</div>
                <div className="cardsSection">
                    <div className="card1">
                        <img src={financialIndependenceImg} className="card1Img"></img>
                        <div className="card1Header">Solutions For Financial Independance</div>
                        <div className="card1Content">Market tested and proven option trading workshops, long and short term investment vehicles and ideas. </div>
                    </div>
                    <div className="card1">
                        <img src={expertGuidance} className="card1Img"></img>
                        <div className="card1Header">Guidence From Our Expert Team</div>
                        <div className="card1Content">Learn from our experts through structured Workshops and continued educational weekly seminars  </div>
                    </div>
                    <div className="card1">
                        <img src={customerFeedback} className="card1Img"></img>
                        <div className="card1Header">Learn From Customer Feedback</div>
                        <div className="card1Content">Our experts tailer the investment vehicles to your financial needs</div>
                    </div>
                </div>
            </div>
            {/* section3 */}
            <div className="homePageSection4">
                <div className="section4Header">Trust the Professionals</div>
                <div className="cardsSection">
                    <div className="section4Card1">
                        <img src={quotes} className="section4Card1Img"></img>
                        <div className="section4Card1Header">Benjamin Graham</div>
                        <div className="section4Card1SubHeader">The father of value investing</div>
                        <div className="section4Card1Content">"The individual investor should act consistently as an investor and not as a speculator."</div>
                    </div>
                    <div className="section4Card1">
                        <img src={quotes} className="section4Card1Img"></img>
                        <div className="section4Card1Header">Warren Buffett</div>
                        <div className="section4Card1SubHeader">The most successful investor of the 20th century</div>
                        <div className="section4Card1Content">"Someone is sitting in the shade today because someone planted a tree a long time ago."</div>
                    </div>
                    <div className="section4Card1">
                        <img src={quotes} className="section4Card1Img"></img>
                        <div className="section4Card1Header">Charles Schwab</div>
                        <div className="section4Card1SubHeader">The nation's largest discount broker</div>
                        <div className="section4Card1Content">"The biggest risk in investing is not market volatility, but the tendency of human beings to do the wrong thing at the wrong time."</div>
                    </div>
                </div>
            </div>
        </div>
    );
} 