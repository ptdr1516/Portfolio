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
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
          👋 Hi, I'm Purvesh Patidar ,an enthusiastic Full Stack Developer with over 3 years of experience in designing, developing, and maintaining robust web applications using the MERN stack and other modern technologies. My passion for coding and problem-solving drives me to create innovative and efficient solutions that enhance user experience and business performance.
🎓I completed my B.Tech in Computer Science Engineering from SRM University Chennai(2017-2021).
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
