import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Gathering insights about the target audience through surveys, interviews, and testing.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Creating visual representations and interactive models of the user interface.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Designing visually appealing and intuitive interfaces that align with the brand.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Organizing content to ensure easy navigation and access to relevant information.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Testing prototypes and making iterative improvements based on user feedback.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Developemnt</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Designing visually appealing and engaging websites.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Integrating front-end and back-end technologies for seamless functionality.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Creating intuitive and user-friendly interfaces for websites.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Optimizing website navigation and information architecture.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Designing and developing APIs to enable data exchange.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Securing APIs using authentication and authorization mechanisms.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Designing and setting up databases to store application data.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service__head">
            <h3>Software Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Creating tailored software solutions to meet specific business needs.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Providing ongoing support, bug fixes, and updates for existing software systems.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Conducting thorough testing processes to ensure software reliability and functionality.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Extracting insights from data and presenting them in a meaningful and visually compelling manner.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Providing expert advice and guidance on software development strategies, technology choices, and project management.</p>
            </li>
          </ul>
        </article>
        {/* END OF SOFTWARE DEVELOPER */}
      </div>
    </section>
  )
}

export default Services;
