import React from 'react';
import './skills.css'
import BackendDevelopment from '../../assets/Backend-development.png';
import DatabaseDesignManagement from '../../assets/Database.png';
import WebApp from '../../assets/webApp.png';
import DataAutomation from '../../assets/DataAutomation.png';

export const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>💻 What I do</span>
        <span className='skillDesc'>I’m a backend-focused developer with hands-on experience in building fast, secure, and scalable web applications. I specialize in Python-based frameworks like Django and FastAPI, with solid knowledge of databases, API integration, and performance optimization.

        I combine backend development with a working knowledge of frontend tools like React to deliver complete, end-to-end solutions.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={BackendDevelopment} alt='BackendDevelopment' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Backend Development</h2>
                    <p>I build robust APIs and backend services using Python, Django, and FastAPI — focusing on performance, security, and scalability.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={DatabaseDesignManagement} alt='DatabaseDesignManagement' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Database Design & Management</h2>
                    <p>Skilled in SQL, PostgreSQL, and DBMS concepts, I structure data models that ensure reliability and consistency in modern applications.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebApp} alt='WebApp' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Web Applications</h2>
                    <p>From idea to deployment, I create full-stack web apps using Django/React with clean architecture and responsive UIs.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={DataAutomation} alt='DataAutomation' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Data & Automation</h2>
                    <p>Experienced with Excel and scripting to automate workflows, extract insights, and manage structured data efficiently.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
