import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECT_DATA } from '../../data';
import Loader from 'react-loaders';

const Projects = () => {
  const strArray = 'Projects'.split('');
  const strArray1 = 'Some Noteworthy Projects...'.split('');
  const [letterClass, setLetterClass] = useState('text-animate-exp');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone1">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={14}
            />
          </h1>
          <h3>Some Noteworthy Projects...</h3>
          <div className="project-cards">
            {PROJECT_DATA.map((project, index) => (
              <div key={index} className="project-card">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  github={project.github}
                  host={project.link}
                />
              </div>
            ))}
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SrikruthReddy"
            className="flat-button"
          >
            View more
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
