import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Janhavi</span><br />Developer & Tech Enthusiast</span> 
            <p className='introPara'>I’m a passionate and versatile developer with experience in building web applications, APIs, and <br/>data-driven solutions. I enjoy turning ideas into impactful digital experiences.</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire me'className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro;