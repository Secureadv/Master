import React from "react";
import contactpageImg from "../../assets/contactPageImg.png";
import contactLogo from "../../assets/SecureAdvCallLogo (1).png";
import timingsLogo from "../../assets/SecureAdvClockLogo (1).png";
import locationLogo from "../../assets/SecureAdvLocationLogo (1).png";
import "./ContactUs.css";

import { useState,setFormData } from "react";
import { width } from "@mui/system";

import  { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';


export default function () {
   
    const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_q8tdion', 'template_8x6japa', form.current, 'UzpOPpmLhNKkW9F9H')
    //     .then((result) => {
    //         console.log(result.text);
    //         console.log('message sent')
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // }

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
        phoneNumber:''
       
    })

    const PostData =async(e)=>{
        // e.preventDefault()

        const{firstName,lastName,email,phoneNumber}=details;

       const res=await fetch("https://adv-5a40a-default-rtdb.firebaseio.com/contactform.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber
           
           })
        })

    }
    
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
        console.log(firstName, lastName, email, phoneNumber);
        PostData(event)

        // sendEmail(event)
       

    };
    return (
        <div>
            {/* section 1 */}
            <div>
                <img src={contactpageImg} className="contactPageImg"></img>

                <div className="contactFormContainerText">
                    <div className="heading">Contact Us</div>
                    <div  className="contactForm">
                        <form onSubmit={handleSubmit}>
                            <div className="contactFormUsername">
                                <label className="registerFormlabel">
                                    First Name*
                                   
                                    <input style={{width:"80%"}}
                                        type="text"
                                        value={firstName}
                                        name="user_name"
                                        placeholder="Enter first name"
                                        onChange={handleFirstNameChange}
                                    />
                                   
                                    {firstName == "" &&
                                    isValidFirstName == 0 ? (
                                        <p className="error">Please enter valid first name</p>
                                    ) : (
                                        ""
                                    )}
                                </label>
                                <label className="registerFormlabel">
                                    Last Name*
                                    <input
                                        type="text"
                                        value={lastName}
                                        name="user_lastname"
                                        placeholder="Enter last name"
                                        onChange={handleLastNameChange}
                                    />
                                    {lastName == "" &&
                                    isValidSecondName == 0 ? (
                                        <p className="error">Please enter valid second name</p>
                                    ) : (
                                        ""
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="registerFormlabel">
                                    Email*
                                    <input
                                        type="email"
                                        value={email}
                                        name="email"
                                        placeholder="Enter Email"
                                        onChange={handleEmailChange}
                                    />
                                    {email == "" && isEmailEmpty == 0 ? (
                                        <p className="error">Please fill out this field</p>
                                    ) : (
                                        ""
                                    )}
                                    {email != "" && isValidEmail == 0 ? (
                                        <p className="error" >Please enter valid email</p>
                                    ) : (
                                        ""
                                    )}
                                </label>
                            </div>
                            <div>
                                <label className="registerFormlabel">
                                    Phone Number*
                                    <input
                                        type="number"
                                        value={phoneNumber}
                                        name="phonenumber"
                                        placeholder="Enter phone number"
                                        onChange={handlePhoneNumberChange}
                                        maxLength={10}
                                    />
                                    {phoneNumber == "" &&
                                    isValidPhoneNumber == 0 ? (
                                        <p className="error">Please enter phone number</p>
                                    ) : (
                                        ""
                                    )}
                                </label>
                            </div>
                            

                            <button type="submit" className="registerBtn">Submit</button>
                        </form>
                    </div>
                </div>
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

            {/* testing email.js  */}
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <button type="submit"  value="Send" className="primaryBtn">Submit</button>
            </form> */}


        </div>
    );
}
