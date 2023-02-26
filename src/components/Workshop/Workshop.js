import React, { useState } from "react";
import highlightCheckbox from "../../assets/Investment vehicles workhop highlights.png";
import workshopImg from "../../assets/OptionTradingInvestmentImg.png";
import clock from "../../assets/Workshoptimingsclock.png";
import "./Workshop.css";

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function () {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [workshopName, setWorkshopName] = useState("");
    const [isValidFirstName, setIsValidFirstName] = useState(1);
    const [isValidSecondName, setIsValidSecondName] = useState(1);
    const [isEmailEmpty, setIsEmailEmpty] = useState(1);
    const [isValidEmail, setIsValidEmail] = useState(1);
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(1);
    const [isValidWorkshop, setIsValidWorkshop] = useState(1);

    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber:'', 
        workshopName:''
       
    })

    const PostData =async(e)=>{
        // e.preventDefault()

        const{firstName,lastName,email,phoneNumber,workshopName}=details;

       const res=await fetch("https://adv-5a40a-default-rtdb.firebaseio.com/registerform.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            workshopName
           
           })
        })

    }
    


    const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_1u92y5o', 'template_rvsfk5n', form.current, 'hKFHJnE0k-KUJuRoS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



    var handleFirstNameChange = (e) => {
        // setIsValidFirstName(1);
        setfirstName(e.target.value);
        setDetails({...details,firstName:e.target.value})
        if (firstName.length > 0) {
            setIsValidFirstName(1);
        }
    };
    var handleLastNameChange = (e) => {
        setlastName(e.target.value);
        setDetails({...details,lastName:e.target.value})
        if (lastName.length > 0) {
            setIsValidSecondName(1);
        }
    };
    var handleEmailChange = (e) => {
        setIsValidEmail(0);
        if (email.length > 0) {
            setIsEmailEmpty(1);
        }
        setEmail(e.target.value);
        setDetails({...details,email:e.target.value})
        if (
            email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            setIsValidEmail(1);
        }
    };
    var handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
        setDetails({...details,phoneNumber:e.target.value})
        if (phoneNumber.length == 10) {
            setIsValidPhoneNumber(1);
        }
    };

    var handleWorkshopChange = (e) => {
        setWorkshopName(e.target.value);
        setDetails({...details,workshopName:e.target.value})
        if (workshopName.length > 0) {
            setIsValidSecondName(1);
        }
        console.log(e.target.value);
    };

    const handleSubmit = (event) => {
        if (firstName.length > 0) {
            setIsValidFirstName(1);
        } else {
            setIsValidFirstName(0);
        }
        if (lastName.length > 0) {
            setIsValidSecondName(1);
        } else {
            setIsValidSecondName(0);
        }
        if (email.length > 0) {
            setIsEmailEmpty(1);
        } else {
            setIsEmailEmpty(0);
        }
        if (phoneNumber.length == 10) {
            setIsValidPhoneNumber(1);
        } else {
            setIsValidPhoneNumber(0);
        }

        if (workshopName.length > 0) {
            setIsValidWorkshop(1);
        } else {
            setIsValidWorkshop(0);
        }
        // event.preventDefault();

        console.log(firstName, lastName, email, phoneNumber,workshopName);
        if(firstName.length > 0 && lastName.length > 0 && email.length > 0 && phoneNumber.length == 10 ){

        PostData(event)

        sendEmail(event)

        setfirstName(' ')
        setlastName(' ')
        setEmail(' ')
        setPhoneNumber(' ')
        setWorkshopName(' ')
        }
    };

    return (
        <div>
            {/* section 1 */}
            <div className="contactPageSection1Container">
                <div className="Section1Col1">
                    <div className="contactPageHeader1">
                        Investment Vehicles Workshop
                    </div>
                    <div className="contactPageContent">
                        Plan and secure your financial future by investing less
                        than 15 hours of your time on this pragmatic, market
                        agnostic, retail investor friendly workshop.{" "}
                    </div>
                    <div className="workshopPrice">
                        Get started for just $395
                    </div>
                    <div>
                        <button className="primaryBtn">
                            <a className="Btn" href="#register-section">
                                Register Now
                            </a>
                        </button>
                    </div>
                </div>
                <div className="section1col2">
                    <img src={workshopImg} className="optionTradingImg"></img>
                </div>
            </div>

            {/* section 2 */}
            <div className="contactPageSection2">
                <div className="contactPageHeader2"> Workshop Highlights</div>
                <div className="workshopHighlightsCard">
                    <div className="workshopHighlights">
                        <img src={highlightCheckbox}></img>
                        <span className="highlightsContent">
                            Bring you from zero to hundred in option trading
                            concepts and how they can be applied in the markets
                        </span>
                    </div>
                    <div className="workshopHighlights">
                        <img src={highlightCheckbox}></img>
                        <span className="highlightsContent">
                            Take home time tested home grown indicators which
                            work both in bull & bear markets
                        </span>
                    </div>
                    <div className="workshopHighlights">
                        <img src={highlightCheckbox}></img>
                        <span className="highlightsContent">
                            Live trading roadshows where you will work with our
                            experts
                        </span>
                    </div>
                    <div className="workshopHighlights">
                        <img src={highlightCheckbox}></img>
                        <span className="highlightsContent">
                            Learn portfolio and risk management from experts who
                            have extensive experience building large portfolios
                        </span>
                    </div>
                    <div className="workshopHighlights">
                        <img src={highlightCheckbox}></img>
                        <span className="highlightsContent">
                            Learn about investment vehicles like IULs, Annuities
                            , IRAs and a host of other products
                        </span>
                    </div>
                    <div className="workshopHighlights">
                        <img src={highlightCheckbox}></img>
                        <span className="highlightsContent">
                            Work with our licensed financials professionals to
                            design and implement the right investment vehicle
                            which helps you meet your financial goals
                        </span>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className="contactPageSection3">
                <div className="contactPageHeader2"> Workshop Overview</div>
                <div className="workshopOverviewCardsSection">
                    <div className="workshopOverviewCard1">
                        <button className="workshopOverviewsteps">1</button>
                        <div className="workshopOverviewHeader">
                            Expertise on concepts
                        </div>
                        <div className="workshopOverviewContent">
                            Learn options , charting and account management
                            concepts.
                        </div>
                        <div className="timingSection">
                            <img src={clock}></img>
                            <span className="WorkshopOverviewTimings">
                                3:00 Hours
                            </span>
                        </div>
                    </div>
                    <div className="workshopOverviewCard1">
                        <button className="workshopOverviewsteps">2</button>
                        <div className="workshopOverviewHeader">
                            Live trading roadshow
                        </div>
                        <div className="workshopOverviewContent">
                            Set up paper accounts, and trade live with the
                            experts in real market conditions
                        </div>
                        <div className="timingSection">
                            <img src={clock}></img>
                            <span className="WorkshopOverviewTimings">
                                3:00 Hours
                            </span>
                        </div>
                    </div>
                    <div className="workshopOverviewCard1">
                        <button className="workshopOverviewsteps">3</button>
                        <div className="workshopOverviewHeader">
                            Investment vehicles
                        </div>
                        <div className="workshopOverviewContent">
                            Understand different investment vehicles to secure
                            your short team and long term financial goals.
                        </div>
                        <div className="timingSection">
                            <img src={clock}></img>
                            <span className="WorkshopOverviewTimings">
                                3:00 Hours
                            </span>
                        </div>
                    </div>
                    <div className="workshopOverviewCard1">
                        <button className="workshopOverviewsteps">4</button>
                        <div className="workshopOverviewHeader">
                            Continued education & Implementation
                        </div>
                        <div className="workshopOverviewContent">
                            Work with our industry experts to tailor the
                            investment vehicles for your needs. Create passive
                            streams of income by participating in option trading
                            . Life long alerts available from outr experts{" "}
                        </div>
                        <div className="timingSection">
                            <img src={clock}></img>
                            <span className="WorkshopOverviewTimings">
                                4:00 Hours
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* section 4 */}

            <div className="registerFormContainer" id="register-section">
                <div className="registerFormheading">Register Here</div>
                <div className="registerForm">
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="registerFormUsername">
                            <label className="registerFormlabel">
                                First Name*
                                <div className="registerFormInput">
                                    <input 
                                        type="text"
                                        value={firstName}
                                        name="user_firstName"
                                        placeholder="Enter first name"
                                        onChange={handleFirstNameChange}
                                    />
                                    {firstName == "" &&
                                    isValidFirstName == 0 ? (
                                        <p className="error">Please enter firstname</p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </label>
                            <label className="registerFormlabel">
                                Last Name*
                                <div>
                                    <input
                                        type="text"
                                        value={lastName}
                                        name="user_lastName"
                                        placeholder="Enter last name"
                                        onChange={handleLastNameChange}
                                    />
                                    {lastName == "" &&
                                    isValidSecondName == 0 ? (
                                        <p className="error">Please enter lastname</p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className="registerFormlabel">
                                Email*
                                <div>
                                    <input
                                        type="email"
                                        value={email}
                                        name="user_email"
                                        placeholder="Enter Email"
                                        onChange={handleEmailChange}
                                    />
                                    {email == "" && isEmailEmpty == 0 ? (
                                        <p className="error">Please fill out this feild</p>
                                    ) : (
                                        ""
                                    )}
                                    {email != "" && isValidEmail == 0 ? (
                                        <p className="error">Please enter valid email</p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className="registerFormlabel">
                                Phone Number*
                                <div>
                                    <input
                                        type="number"
                                        value={phoneNumber}
                                        name="user_phoneNumber"
                                        placeholder="Enter phone number"
                                        onChange={handlePhoneNumberChange}
                                    />
                                    {phoneNumber == "" &&
                                    isValidPhoneNumber == 0 ? (
                                        <p className="error">Please fill out this feild</p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className="container">
                                Workshop 1
                                <input
                                    type="radio"
                                    name="radio"
                                    value="workshop1"
                                    onChange={handleWorkshopChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label className="container">
                                Workshop 2
                                <input
                                    type="radio"
                                    name="radio"
                                    value="workshop2"
                                    onChange={handleWorkshopChange}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        {workshopName == "" && isValidWorkshop == 0 ? (
                            <p className="error">Choose any one of the above Workshops</p>
                        ) : (
                            ""
                        )}

                        <button type="submit" value="Send" className="registerBtn">
                            Next
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
