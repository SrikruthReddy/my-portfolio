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
import { motion } from 'framer-motion';
import './index.scss';
const zoomVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
    type: 'spring',
    mass: 0,
  },
  in: {
    scale: 1,
    opacity: 1,
  },
  out: {
    scale: 0.8,
    opacity: 0,
  },
};
const About = ({ location }) => {
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
            I’m a software developer with a knack for those hard-knock software
            engineering problems. My journey began with a ‘Hello World’ and a
            fascination for clever tricks that make computers do amazing things.
          </p>
          <p align="LEFT">
            This experience sparked my curiosity, leading me through the
            fascinating world of algorithms, where I not only learned about them
            but also mastered their practical use.
          </p>
          <p>
            Now, as a seasoned full-stack developer being equipped with nearly{' '}
            <span style={{ color: '#FFD700', fontWeight: 600 }}>
              2&nbsp;years&nbsp;of&nbsp;experience
            </span>{' '}
            in crafting robust, scalable products,
            <br />I also hold a{' '}
            <span
              style={{
                color: '#FFD700',
                fontStyle: 'italic',
                fontWeight: 600,
              }}
            >
              Master’s degree in Computer Science
            </span>{' '}
            from the{' '}
            <span
              style={{
                color: '#FFD700',
                fontWeight: 600,
              }}
            >
              University&nbsp;of&nbsp;Florida
            </span>
            , which has further honed my technical expertise and analytical
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
