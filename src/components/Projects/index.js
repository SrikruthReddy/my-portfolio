import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const strArray = 'Projects'.split('');
  const strArray1 = 'Some noteworthy projects...'.split('');
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="container projects-page">
      <div className="text-zone1">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strArray}
            idx={14}
          />
        </h1>
        <h3>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strArray1}
            idx={14}
          />
        </h3>
        <div className="project-cards">
          <div className="project-card">
            <ProjectCard />
          </div>
          <div className="project-card">
            <ProjectCard />
          </div>
          <div className="project-card">
            <ProjectCard />
          </div>
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
  );
};

export default Projects;
