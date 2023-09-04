import React from 'react'
import './experience.css'
import { 
  FaReact, 
  FaNodeJs,
  FaCode,
  FaDatabase,
  FaPython,
  FaJava  
} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {
  BsFiletypeHtml,
  BsFiletypeCss,
  BsFillBootstrapFill,
  BsFiletypeSql
} from 'react-icons/bs'
import {DiJavascript1} from 'react-icons/di'
import {AiOutlineDatabase} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__softskills">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaJava className='experience__details-icon'/>
              <div>
              <h4>JAVA</h4>
              <small className='text-light'>Experienced</small>
              </div> &nbsp;
              <br/>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCplusplus className='experience__details-icon' />
              <div>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <AiOutlineDatabase className='experience__details-icon' />
              <div>
              <h4>DSA</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFiletypeHtml className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div> &nbsp;
              <br/>
            </article>
            <article className='experience__details'>
              <BsFiletypeCss className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBootstrapFill className='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Developement</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
              </div> 
              <br/>
            </article>
            <article className='experience__details'>
              <FaCode className='experience__details-icon' />
              <div>
              <h4>ExpressJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaDatabase className='experience__details-icon' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFiletypeSql className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience;
