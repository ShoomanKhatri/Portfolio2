import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.jpg';
import contactme5 from '../../assets/contactme5.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <nav className="NavBar">
                {/* <img src={logo} alt="Logo" className='logo' /> */}
                <h1>Suman.</h1>
                <div className="desktopMenu">
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className='desktopMenuListItem'>About</Link>
                    <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Projects</Link>
                    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Experience</Link>
                </div>

                <button className="desktopMenuBtn" onClick={() => {
                    document.getElementById('contact').scrollIntoView({ behaviour: 'smooth', block: 'end' });
                }}>
                    <img src={contactme5} alt="contactimg" className="desktopMenuImg" />Contact Me</button>

                <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
                <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Home</Link>
                    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>About</Link>
                    <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Projects</Link>
                    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>experience</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>Contact</Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;