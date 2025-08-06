import React from 'react';
import './contact.css';
import InstagramIcon from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const Contact = () => {
  return (
    <div className="contact">
      <h2>📧 Contact Me</h2>
      <div className="social-icons">
        <a href=" https://github.com/Janhavibhamare " target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/janhavi-bhamare-181636265/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="icon" />
        </a>
        <a href=" https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=uer1hpi" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;



