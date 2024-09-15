import React from 'react';
import './intro.css';
import profile from '../../assets/profile1.png';
import hireme from '../../assets/hireme.png';
import mobileBackground from '../../assets/codimg.png';
import { Link } from "react-scroll"

//This is not working on my browser but it runs fine on every other same browser. dont know why. 

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hello,</span>
                <span className="introText"> I'm<span className="introName"> Shooman</span></span>
                Fullstack Web Developer
                <p className="introPara">I'm Suman Khatri, an enthusiastic web developer with a strong emphasis on
                    practicing both frontend and backend technologies. Currently a student, I'm embarking on a journey to become a
                     proficient full-stack developer by continually venturing into the realms of both frontend 
                    and
                    backend development.
                </p>
                <Link to="contact" smooth={true} duration={500}><button className='btn'><img src={hireme} alt="hireme" className='btnImg' />Hire Me</button></Link>
                <img src={profile} alt="profile" className='bg' />
                <img src={mobileBackground} alt="mobile-background" className='mobile-bg' />
            </div>
        </section>
    );
}

export { Intro };