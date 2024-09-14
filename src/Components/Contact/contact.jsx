import React, { useRef } from 'react';
// import Apple from "../../assets/Apple.png";
// import Google from "../../assets/Google.jpg";
// import Meta from "../../assets/Meta.jpg";
import "./contact.css";
import FacebookIcon from '../../assets/FacebookIcon.png'
import InstagramIcon from '../../assets/InstagramIcon.png'
import LinkedinIcon from '../../assets/LinkedinIcon.png'
import GithubIcon from '../../assets/GithubIcon.png'
import emailjs from '@emailjs/browser';
import pending from '../../assets/pending.jpg';
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
               
               
               {/* experience */}
               <div className="bg-[rgb(50,50,50)] py-12 px-4 md:px-8 rounded-3xl">
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold text-center text-white mb-6">My Experience</h1>
      
      {/* Description of the Experience */}
      <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
        I've had the privilege to work as a frontend developer at{' '}
        <span className="font-bold text-white">Hyperce</span>, where I utilized{' '}
        <span className="text-blue-400">React</span> and{' '}
        <span className="text-blue-400">Next.js</span> to create engaging, modern web applications.
      </p>
      
      {/* Hyperce Logo and Name Section */}
      <div className="flex justify-center items-center space-x-4 mb-10">
        {/* Logo and Company Name */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
          {/* Hyperce Logo */}
          <img src="./hyperce.svg" alt="Hyperce Logo" className="h-16 w-auto rounded-lg" />
          
          {/* Hyperce Name and Tagline */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Hyperce</h2>
            <p className="text-gray-500">Innovating with Technology</p>
          </div>
        </div>
      </div>

      {/* Tech Stack Icons */}
      <div className="flex justify-center space-x-4 text-white">
        {/* React Icon */}
        <div className="flex flex-col items-center">
          <i className="devicon-react-original text-5xl"></i>
          <p className="mt-2 text-sm text-gray-400">React</p>
        </div>

        {/* Next.js Icon */}
        <div className="flex flex-col items-center">
          <i className="devicon-nextjs-original text-5xl"></i>
          <p className="mt-2 text-sm text-gray-400">Next.js</p>
        </div>

        {/* Tailwind CSS Icon */}
        <div className="flex flex-col items-center">
          <i className="devicon-tailwindcss-plain text-5xl"></i>
          <p className="mt-2 text-sm text-gray-400">Tailwind CSS</p>
        </div>
      </div>
    </div>

                <button className="submitBtn"><a href="../../public/SumanResume.pdf" download="SumanResume.pdf" style={{ color: 'white' }}>Download CV</a></button>
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
                        <a href="https://www.facebook.com/shoomankhatri/" target="_blank" rel="noopener noreferrer">
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