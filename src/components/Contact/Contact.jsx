import React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5gfa87g', 'template_avzypm7', e.target
            ,"XRMfYP5gJpFcfqjf8"
        )
            .then((result) => {
                alert('Email sent successfully!');
                setFormData({
                    firstName: '',
                    secondName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }, (error) => {
                console.error('Error:', error);
                alert('Failed to send email.');
            });
    };


    return (
        <>
            <style>
                {
                    `
                        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
}
.contact-bg{
    height: 40vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(../image/contact-bg.jpg);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.contact-bg h3{
    font-size: 1.3rem;
    font-weight: 400;
}
.contact-bg h2{
    font-size: 3rem;
    text-transform: uppercase;
    padding: 0.4rem 0;
    letter-spacing: 4px;
}
.line div{
    margin: 0 0.2rem;
}
.line div:nth-child(1),
.line div:nth-child(3){
    height: 3px;
    width: 70px;
    background: rgba(55,155,255,100);
    border-radius: 5px;
}
.line{
    display: flex;
    align-items: center;
}
.line div:nth-child(2){
    width: 10px;
    height: 10px;
    background: rgba(55,155,255,100);
    border-radius: 20%;
}
.text{
    font-weight: 300;
    opacity: 0.9;
}
.contact-bg .text{
    margin: 1rem 0;
}
.contact-body{
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 1rem;
}
.contact-info{
    margin: 1rem 0;
    text-align: center;
    padding: 2rem 0;
}
.contact-info span{
    display: block;
}
.contact-info div{
    margin: 0.8rem 0;
    padding: 1rem;
}
.contact-info span .fas{
    font-size: 2rem;
    padding-bottom: 0.9rem;
    color: rgba(55,155,255,100);
}
.contact-info div span:nth-child(2){
    font-weight: 500;
    font-size: 1.1rem;
}
.contact-info .text{
    padding-top: 0.4rem;
}
.contact-form{
    padding: 2rem 0;
    border-top: 1px solid #c7c7c7;
}
.contact-form form{
    padding-bottom: 1rem;
}
.form-control{
    width: 100%;
    border: 1.5px solid #c7c7c7;
    border-radius: 5px;
    padding: 0.7rem;
    margin: 0.6rem 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    outline: 0;
}
.form-control:focus{
    box-shadow: 0 0 6px -3px rgba(48, 48, 48, 1);
}
.contact-form form div{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.6rem;
}
.send-btn{
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    color: #fff;
    background: rgba(55,155,255,100);
    border: none;
    border-radius: 5px;
    padding: 0.7rem 1.5rem;
    cursor: pointer;
    transition: all 0.4s ease;
}
.send-btn:hover{
    opacity: 0.8;
}
.contact-form > div img{
    width: 85%;
}
.contact-form > div{
    margin: 0 auto;
    text-align: center;
}
.contact-footer{
    padding: 2rem 0;
    background: #000;
}
.contact-footer h3{
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 1rem;
    text-align: center;
}
.social-links{
    display: flex;
    justify-content: center;
}
.social-links a{
    text-decoration: none;
    width: 40px;
    height: 40px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.4rem;
    transition: all 0.4s ease;
}
.social-links a:hover{
    color: rgba(55,155,255,100);
    border-color: rgba(55,155,255,100);
}

@media screen and (min-width: 768px){
    .contact-bg .text{
        width: 70%;
        margin-left: auto;
        margin-right: auto;
    }
    .contact-info{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 992px){
    .contact-bg .text{
        width: 50%;
    }
    .contact-form{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }
}

@media screen and (min-width: 1200px){
    .contact-info{
        grid-template-columns: repeat(4, 1fr);
    }
}
                    `
                }
            </style>

            <section className = "contact-section grey-color-bg light-color-text">
                <div className = "contact-bg" style={{background: "transparent"}}>
                    <h3>Get in Touch with Us</h3>
                    <h2>contact us</h2>
                    <div className = "line">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>


                <div className = "contact-body">
                    <div className = "contact-info">
                        <div>
                            <span><i className = "fas fa-mobile-alt"></i></span>
                            <span>Phone No.</span>
                            <span className = "text">+91 7845634734</span>
                        </div>
                        <div>
                            <span><i className = "fas fa-envelope-open"></i></span>
                            <span>E-mail</span>
                            <span className = "text">dubaiProtonCompany@gmail.com</span>
                        </div>
                        <div>
                            <span><i className = "fas fa-map-marker-alt"></i></span>
                            <span>Address</span>
                            <span className = "text">Dubai kuruku sandhu, Dubai Main road, Dubai</span>
                        </div>
                        <div>
                            <span><i className = "fas fa-clock"></i></span>
                            <span>Company</span>
                            <span className = "text">ProtonTech</span>
                        </div>
                    </div>

                    <div className = "contact-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type = "text" className = "form-control" placeholder="First Name" name="firstName" value={formData.firstName}
                                       onChange={handleChange} required/>
                                    <input type = "text" className = "form-control" placeholder="Last Name" name="secondName" value={formData.secondName}
                                           onChange={handleChange} required/>
                            </div>
                            <div>
                                <input type = "email" className = "form-control" placeholder="E-mail" name="email" value={formData.email}
                                       onChange={handleChange} required/>
                                    <input type = "text" className = "form-control" placeholder="Phone" name="phone" value={formData.phone}
                                           onChange={handleChange} required/>
                            </div>
                            <textarea rows = "7" placeholder="Message" className = "form-control" name="message" value={formData.message}
                                      onChange={handleChange} required></textarea>
                            <input type = "submit" className = "send-btn" value = "send message" />
                        </form>

                        <div>
                            <img
                                src = "/images/contact-png.png"
                                alt = "contact"
                            />
                        </div>
                    </div>
                </div>

                <div className = "map mx-auto" style={{width: '85%'}}>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.4561674293927!2d80.098579!3d13.176288299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5287f7dc891cf1%3A0x52f8705771989027!2s400%20Feet%20Outer%20Ring%20Rd%2C%20Chennai%2C%20Tamil%20Nadu%20600062!5e1!3m2!1sen!2sin!4v1709971323805!5m2!1sen!2sin"
                            width="100%" height="450"
                    // style={{border:"0", allowFullScreen:"", ariaHidden:"false", tabIndex:"0"}}
                    ></iframe>
                </div>

                <div className = "contact-footer" style={{background: "transparent"}}>
                    <h3>Follow Us</h3>
                    <div className = "social-links">
                        <a href = "#" className = "fab fa-facebook-f"></a>
                        <a href = "#" className = "fab fa-twitter"></a>
                        <a href = "#" className = "fab fa-instagram"></a>
                        <a href = "#" className = "fab fa-linkedin"></a>
                        <a href = "#" className = "fab fa-youtube"></a>
                    </div>
                </div>
            </section>
            </>
    )
}
