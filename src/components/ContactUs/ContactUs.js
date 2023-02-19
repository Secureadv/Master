import React from "react";
import contactpageImg from "../../assets/contactPageImg.png";
import contactLogo from "../../assets/SecureAdvCallLogo (1).png";
import timingsLogo from "../../assets/SecureAdvClockLogo (1).png";
import locationLogo from "../../assets/SecureAdvLocationLogo (1).png";
import "./ContactUs.css";

import { useState } from "react";

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
    
    var handleFirstNameChange = (e) => {
        // setIsValidFirstName(1);
        setfirstName(e.target.value);
        if (firstName.length > 0) {
            setIsValidFirstName(1);
        }
    };
    var handleLastNameChange = (e) => {
        setlastName(e.target.value);
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
        if (phoneNumber.length == 10) {
            setIsValidPhoneNumber(1);
        }
    };

    var handleWorkshopChange = (e) => {
        setWorkshopName(e.target.value);
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
        event.preventDefault();
        console.log(firstName, lastName, email, phoneNumber);
    };
    return (
        <div>
            {/* section 1 */}
            <div>
                <img src={contactpageImg} className="contactPageImg"></img>

                <div className="contactFormContainerText">
                    <div className="heading">Contact Us</div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    First Name*
                                    <input
                                        type="text"
                                        value={firstName}
                                        placeholder="Enter first name"
                                        onChange={handleFirstNameChange}
                                    />
                                    {firstName == "" &&
                                    isValidFirstName == 0 ? (
                                        <p>Please enter valid first name</p>
                                    ) : (
                                        ""
                                    )}
                                </label>
                                <label>
                                    Last Name*
                                    <input
                                        type="text"
                                        value={lastName}
                                        placeholder="Enter last name"
                                        onChange={handleLastNameChange}
                                    />
                                    {lastName == "" &&
                                    isValidSecondName == 0 ? (
                                        <p>Please enter valid second name</p>
                                    ) : (
                                        ""
                                    )}
                                </label>
                            </div>
                            <div>
                                <label>
                                    Email*
                                    <input
                                        type="email"
                                        value={email}
                                        placeholder="Enter Email"
                                        onChange={handleEmailChange}
                                    />
                                    {email == "" && isEmailEmpty == 0 ? (
                                        <p>Please fill out this feild</p>
                                    ) : (
                                        ""
                                    )}
                                    {email != "" && isValidEmail == 0 ? (
                                        <p>Please enter valid email</p>
                                    ) : (
                                        ""
                                    )}
                                </label>
                            </div>
                            <div>
                                <label>
                                    Phone Number*
                                    <input
                                        type="number"
                                        value={phoneNumber}
                                        placeholder="Enter phone number"
                                        onChange={handlePhoneNumberChange}
                                        maxLength={10}
                                    />
                                    {phoneNumber == "" &&
                                    isValidPhoneNumber == 0 ? (
                                        <p>Please fill out this feild</p>
                                    ) : (
                                        ""
                                    )}
                                </label>
                            </div>
                            <div>
                                <label class="container">
                                    Workshop 1
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="workshop1"
                                        onChange={handleWorkshopChange}
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div>
                                <label class="container">
                                    Workshop 2
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="workshop2"
                                        onChange={handleWorkshopChange}
                                    />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            {workshopName == "" && isValidWorkshop == 0 ? (
                                <p>Choose any one of the above Workshops</p>
                            ) : (
                                ""
                            )}

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>

                {/* <Box  className="contactFormContainerText"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <div className="heading">Contact Us</div> 
                    <form onSubmit={handleSubmit}>
                    <div>
                        <TextField name="firstname" onChange={handleChange} required id="outlined-required" label="First Name" defaultValue="" placeholder="Enter your First Name"/>
                        <TextField name="lastname" onChange={handleChange} required id="outlined-required" label="Last Name" defaultValue="" placeholder="Enter your Last Name"/>
                    </div>
                    <div>
                        <TextField name="email" onChange={handleChange}  required id="outlined-required" label="Email" defaultValue="" placeholder="Enter your Email"/>
                    </div>
                    <div>
                        <TextField name="phnumber" onChange={handleChange}  required id="outlined-required" label="Phone Number" defaultValue="" placeholder="Enter your Phone Number"/>
                    </div>
                    <div><button type="submit" className="submitBtn">Submit</button></div>
                    </form>
                    
                </Box> */}
            </div>

            {/* section 2 */}
            <div className="contactPageSection2">
                <div className="contactPageHeader"> Meet our Advisors</div>
                <div className="contactCards">
                    <div className="contactCard">
                        <div>
                            <img src={contactLogo} alt="contactlogo"></img>
                        </div>
                        <div className="contactCardsContent">
                            (+1) 470-828-4948
                        </div>
                        <div className="contactCardsContent">
                            secureadv@gmail.com
                        </div>
                    </div>
                    <div className="contactCard">
                        <div>
                            <img src={locationLogo} alt="locationlogo"></img>
                        </div>
                        <div className="contactCardsContent">
                            SecureAdv - 1420 Gemini Blvd. Unit 12, Atlanta,
                            GEORGIA,32837 USA.
                        </div>
                    </div>
                    <div className="contactCard">
                        <img src={timingsLogo} alt="timingslogo"></img>
                        <div className="contactCardsContent">
                            Monday - Saturday
                        </div>
                        <div className="contactCardsContent">
                            9:00 AM - 5:00 PM
                        </div>
                    </div>
                </div>
            </div>

            {/* section 3 */}
            <div className="contactPageSection3">
                <div className="contactPageSection3Header">
                    Join our upcoming Investment Vehicles Workshop
                </div>
                <button className="primaryBtn">Register Now</button>
            </div>
        </div>
    );
}
