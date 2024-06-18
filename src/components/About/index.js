import { useEffect, useState } from 'react';
import {
  faJava,
  faGitAlt,
  faAws,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Delay the start of the animation to ensure page load
    setTimeout(() => {
      setAnimationClass('start-animation');
    }, 1200); // Adjust this delay as needed
  }, []);

  const strArray = 'About me'.split('');

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={14}
            />
          </h1>
          <p>
            I'm an experienced full-stack developer with a strong background in
            building and optimizing enterprise-level systems. At OSI Systems, I
            developed RESTful Microservices for the CertScan platform using
            Java, Spring Boot, Hibernate, and PostgreSQL. I also designed and
            developed Angular-based widgets that improved operational
            efficiency.
          </p>
          <p align="LEFT">
            I excel in collaborative environments and have hands-on experience
            with Agile, Git, AWS CodeCommit, and Jenkins. My Master's in
            Computer Science from the University of Florida and my role as a
            Graduate Student Assistant have further honed technical and teaching
            skills.
          </p>
          <p>
            Outside of work, I'm a dedicated family person who enjoys sports,
            movies, and hitting the gym. I'm eager to bring my skills to
            innovative projects and grow professionally.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className={`cubespinner ${animationClass}`}>
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDatabase} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
