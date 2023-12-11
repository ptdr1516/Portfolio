import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
// import Toolstack from './Toolstack'
// import Techstack from './Techstack'
// import Particle from '../Particle'

const About = () => {
  return (
    <section id='about'>
      {/* <Particle /> */}
      <div className='about-me'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>

          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
          👋 Hi, I'm Purvesh Patidar ,Full Stack Developer with a passion for creating innovative software solutions. I have a proven track record of evaluating requirements and designing out-of-the-box solutions for software development projects. As an out-of-the-box thinker and problem solver, I am dedicated to improving performance and consistently delivering high-quality results.
🎓I completed my B.Tech in Computer Science Engineering from SRM University Chennai(2017-2021).
🔧 I contributed to the development of the BRM application layer using C, SQL database, and Linux server. I collaborated effectively with the web development team and other departments, creating React.js and Node.js web app, and ensured the creation of clean, validation-ready code for project needs.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        {/* <h1 className="project-heading">
          Professional Skillset
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>
        <Toolstack /> */}
      </div>
    </section>
  )
}

export default About;
