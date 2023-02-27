import React, { Component } from "react";
import './Footer.css';
import { Outlet, Link } from "react-router-dom";
import calender from '../../assets/SecureAdvCalendarLogo.png';
import clock from '../../assets/SecureAdvClockLogo.png';
import fb from '../../assets/SecureAdvFbLogo.png';
import tw from '../../assets/SecureAdvTwLogo.png';
import insta from '../../assets/SecureAdvInstLogo.png';
import call from '../../assets/SecureAdvCallLogo.png';
import email from '../../assets/SecureAdvEmailLogo.png';
import location from '../../assets/SecureAdvLocationLogo.png';

export default function Footer(){
    return(
        <div className="footerContainer">
            <div className="footerSection1">
                <div><span className="brandFirstpart">Secure</span><span className="brandSecondpart">Adv</span></div>
                <div className="footerSubHeader">The Key to a Secure Tomorrow, Expert Advice Today</div>
                <div className="footerHeader">OPERATIONAL HOURS</div>
                <div className="footerInfo"><img src={calender} className="footerIcons"></img><span className="footerContent">MONDAY - Friday</span></div>
                <div className="footerInfo"><img src={clock} className="footerIcons"></img><span className="footerContent">9:00 AM - 5:00 PM</span></div>
                <div className="footerSocialLinksContainer">
                    <img src={fb} className="footerSocialIcons"></img>
                    <img src={tw} className="footerSocialIcons"></img>
                    <img src={insta} className="footerSocialIcons"></img>
                </div>
            </div>
            <div className="footerSection2">
                <div className="footerHeader">QUICK LINKS</div>
                <a className="footerLinks"><Link className='footerLink' to="/">Home</Link></a>
                <a className="footerLinks"><Link className='footerLink' to="/services">Services</Link></a>
                <a className="footerLinks"><Link className='footerLink' to="/workshop">Website</Link></a>
                <a className="footerLinks"><Link className='footerLink' to="/contact">Contact Us</Link></a>
            </div>
            <div className="footerSection3">
                <div className="footerHeader">CONTACT US</div>
                <div className="footerContactInfo"><img src={call} className="footerIcons"></img><span className="footerContent">407-680-9937</span></div>
                <div className="footerContactInfo"><img src={email} className="footerIcons"></img><span className="footerContent">support@secureadv.com</span></div>
                <div className="footerContactInfo"><img src={location} className="footerIcons"></img><span className="footerContent">coming soon</span></div>
            </div>

        </div>
    );
}