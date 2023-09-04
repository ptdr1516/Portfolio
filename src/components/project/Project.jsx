import React from "react";
import "./project.css";
import IMG1 from '../../assets/codeial.jpg'
import IMG2 from '../../assets/mealapp.png'
import IMG3 from '../../assets/ERS.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio4.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Codeial: Chat Application using Node JS',
    github: 'https://github.com/',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Meal recipe searching web app using vanilla JS',
    github: 'https://github.com/ptdr1516/mealapp.github.io',
    demo: 'https://ptdr1516.github.io/mealapp.github.io/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Employee Review System using vanilla JS',
    github: 'https://github.com/ptdr1516/employee_review_system',
    demo: 'https://ers-uosk.onrender.com/sign-in'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Habit Tracker App using Node.js',
    github: 'https://github.com/ptdr1516/habittracker.github.io',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Hospital API creation',
    github: 'https://github.com/ptdr1516/Hospital-API',
    demo: 'https://hospitalapi-q3cs.onrender.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'React Album Listing',
    github: 'https://github.com/ptdr1516/albums-react-app',
    demo: 'https://reactalbumlist.onrender.com/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className="btn">
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
            );
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
