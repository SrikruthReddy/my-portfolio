import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showLoader, setShowLoader] = useState(true);

  const nameArray = 'rikruth'.split('');
  const jobArray = 'A Full-Stack Developer'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
      setShowLoader(false); // Hide loader after animation
    }, 4000);
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition
        key="main-content"
        classNames="fade"
        timeout={{ enter: 500, exit: 0 }}
      >
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _02`}>i,</span>
              <br />
              <span className={`${letterClass} _03`}>I</span>
              <span className={`${letterClass} _04`}>'m</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <Link to="/resume" className="flat-button">
              RESUME
            </Link>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo />
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Home;
