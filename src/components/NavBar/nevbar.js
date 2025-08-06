import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo2" className='logo2' />

      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>

        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">About</Link>

        <Link activeClass='active' to='works-section' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">Portfolio</Link>

        <Link activeClass='active' to='education-section' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Education</Link>
      </div>

      {/* ✅ Updated Contact Me button using react-scroll */}
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        className="desktopMenuBtn"
      >
        <img src={contactImg} alt="Contact" className="desktopMenuImg" />
        Contact Me
      </Link>

      <img
        src={menu}
        alt="Menu"
        className='mobMenu'
        onClick={() => setShowMenu(!showMenu)}
      />

      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>

        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>

        <Link activeClass='active' to='works-section' spy={true} smooth={true} offset={-40} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>

        <Link activeClass='active' to='education-section' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Education</Link>

        <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-60} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
