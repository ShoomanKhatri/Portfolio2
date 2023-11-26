import React from 'react';
import './intro.css';
import profile from '../../assets/profile1.png';
import hireme from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hello,</span>
                <span className="introText"> I'm<span className="introName"> Shooman</span></span>
                Frontend Web Developer
                <p className="introPara">I'm Suman Khatri, an enthusiastic web developer with a strong emphasis on
                    practicing <br /> frontend technologies. Currently a student, I'm embarking on a journey to become a
                    <br /> proficient full-stack developer by continually venturing into the realms of both frontend <br />
                    and
                    backend development.
                </p>
                <Link><button className='btn'><img src={hireme} alt="hireme" className='btnImg' />Hire Me</button></Link>
                <img src={profile} alt="profile" className='bg' />
            </div>
        </section>
    );
}

export { Intro };