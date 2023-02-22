import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import './Services.css';
import servicesGrowth from '../../assets/InvestGrowthServices.png';
import checkbox from '../../assets/SecureAdvServicesCheckboxes.png';
import legacyPlanning from '../../assets/SecureAdviceLegacyPlanning.png';
import eduPlanning from '../../assets/SecureAdviceEducationPlanning.png';
import equityPortfolio from '../../assets/SecureAdvEquityPortfolioManagement.png';
import incomePlanning from '../../assets/Life Insurance Policies retirement Income planning.png';
import optionTrading from '../../assets/OptionTradingInvestmentImg.png';
import financialIndependenceImg from '../../assets/InvestmentGrowthFinanacialIndependanceImg.png';
import expertGuidance from '../../assets/ExpertsGuidenceforIndexedUniversalLife.png';
import customerFeedback from '../../assets/InvestpoliciesFeedback.png';

// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Services(){
    return(
        <div>
            {/* section 1 */}
            <div className="servicesSection1Container">
                <div className="Section1Col1">
                    <div className="servicesHeader1">Our Services</div>
                    <div className="servicesList">
                        <img src={checkbox} className="servicesCheckbox"></img>
                        <span className="secureAdvServices">Education Planning</span>
                    </div>
                    <div className="servicesList">
                        <img src={checkbox} className="servicesCheckbox"></img>
                        <span className="secureAdvServices">Equity Portfolio Management</span>
                    </div>
                    <div className="servicesList">
                        <img src={checkbox} className="servicesCheckbox"></img>
                        <span className="secureAdvServices">Legacy planning</span>
                    </div>
                    <div className="servicesList">
                        <img src={checkbox} className="servicesCheckbox"></img>
                        <span className="secureAdvServices">Retirement & Income Planning</span>
                    </div>
                    <div className="servicesList">
                        <img src={checkbox} className="servicesCheckbox"></img>
                        <span className="secureAdvServices">Investment Vehicles Workshop</span>
                    </div>
                    <div>
                        <button className="primaryBtn"><Link className='Btn' to="/contact">Contact Us</Link></button>
                    </div>
                </div>
                <div className="section1col2">
                    <img src={servicesGrowth} className="servicesGrowthImg"></img>
                </div>
            </div>

            {/* section 2 */}
            <div className="servicesSection2Container">
                <div className="header">OUR SERVICES</div>
                <div className="servicesCardsContainer">
                    <div className="serviceCard">
                        <div className=" servicesCardImgSection"><img src={legacyPlanning} className="servicesCardImg"></img></div>
                        <div className="serviceCardText">Legacy Planning</div>
                        <div className="serviceCardContent">
                        Our legacy planning experts can help individuals plan for the transfer of you personal, financial, and 
                        property assets to future generations. We will work with you to develop a will, create trusts, select executors
                         and trustees, and ensure that the transfer of assets is done in a tax-efficient and streamlined manner to
                         preserve their legacy and provide for their loved ones.
                        </div>
                    </div>

                    <div className="serviceCard">
                    <div className=" servicesCardImgSection"><img src={eduPlanning} className="servicesCardImg"></img></div>
                        <div className="serviceCardText">Education Planning</div>
                        <div className="serviceCardContent">
                        Our education planning experts can help families create a comprehensive plan to finance and manage the costs
                         of higher education. We will work with you  to identify the cost of education, estimate future tuition and 
                         fee increases, evaluate college savings options, and determine the best sources of funding to achieve your 
                         education goals.
                        </div>
                    </div>

                    <div className="serviceCard">
                    <div className=" servicesCardImgSection"><img src={equityPortfolio} className="servicesCardImg"></img></div>
                        <div className="serviceCardText">Equity portfolio management</div>
                        <div className="serviceCardContent">
                        Our equity portfolio management experts can help investors achieve their investment goals by managing a 
                        diversified collection of stocks, bonds, and other securities. We will work with you to regularly review
                         and adjust your portfolios, monitor market trends and economic conditions, and make informed investment 
                         decisions to help you reach your  financial goals.
                        </div>
                    </div>

                    <div className="serviceCard">
                        <div className=" servicesCardImgSection"><img src={incomePlanning} className="servicesCardImg"></img></div>
                        <div className="serviceCardText">Retirement & Income Planning</div>
                        <div className="serviceCardContent">
                        Our retirement and income planning experts can help individuals plan for a secure and independent retirement. 
                        We will work with you to estimate your retirement expenses, evaluate different retirement savings options, 
                        develop a retirement income strategy, and assess the impact of taxes, inflation, and other factors on your
                         retirement savings and income.
                        </div>
                    </div>

                    <div className="serviceCard">
                        <div className=" servicesCardImgSection"><img src={optionTrading} className="servicesCardImg1"></img></div>
                        <div className="serviceCardText">Option Trading</div>
                        <div className="serviceCardContent">
                        Our option trading experts can help individuals generate income, hedge against market risks, and capitalize 
                        on market trends. We will work with you to understand the complexities of option trading and develop a strategy
                         that meets your specific investment goals and risk tolerance. We offer a unique option trading workshop which
                         educates  you from zero to hundred in less than 10 hours. 
                        </div>
                    </div>

                </div>
            </div>

            {/* section 3 */}
            <div className="homePageSection3">
                <div className="header">Why you should choose us?</div>
                <div className="cardsSection">
                    <div className="card1">
                        <img src={financialIndependenceImg} className="card1Img"></img>
                        <div className="card1Header">Solutions For Financial Independance</div>
                        <div className="card1Content">Lorem ipsum dolor sit amet, consectetur adipiscing  </div>
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
        </div>
    );
}