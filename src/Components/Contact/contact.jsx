import React, { useRef } from 'react';
import Apple from "../../assets/Apple.png";
import Google from "../../assets/Google.jpg";
import Meta from "../../assets/Meta.jpg";
import "./contact.css";
import FacebookIcon from '../../assets/FacebookIcon.png'
import InstagramIcon from '../../assets/InstagramIcon.png'
import LinkedinIcon from '../../assets/LinkedinIcon.png'
import GithubIcon from '../../assets/GithubIcon.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3511fvd', 'template_lrl9gyk', form.current, 'djWA_Pd2FsM8tgWDH')
            .then((result) => {
                console.log(result.text);
                alert('Email Sent !');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had the  opportunity  to work  with a diverese group of companies.
                    Some of the notable  companies  I have worked  with includes
                </p>
                <div className="clientImgs">
                    <img src={Apple} alt="Apple" className='clientImg' />
                    <img src={Google} alt="Google" className='clientImg' />
                    <img src={Meta} alt="Meta" className='clientImg' />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>

                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' required name='user_name' />
                    <input type="email" className="email" placeholder='Your Email' required name='user_email' />
                    <textarea name="message" className='msg' rows="5" placeholder='Your Message' required ></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/styles.khatri/" target="_blank" rel="noopener noreferrer">
                            <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                        </a>

                        <a href="https://www.instagram.com/shooman_khatri/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src={InstagramIcon} alt="InstagramIcon" className="link" />
                        </a>

                        <a href="https://www.linkedin.com/in/shooman-khatri-6bb14926a/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedinIcon} alt="LinkedinIcon" className="link" />
                        </a>

                        <a href="https://github.com/ShoomanKhatri" target="_blank" rel="noopener noreferrer">
                            <img src={GithubIcon} alt="GithubIcon" className="link" />
                        </a>

                    </div>
                </form>

            </div>
        </section>
    )
}

export default Contact;