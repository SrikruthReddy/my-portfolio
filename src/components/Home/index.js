import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = 'rikruth'.split('');
  const jobArray = 'A Full-Stack Developer'.split('');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
  return (
    <>
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
            ></AnimatedLetters>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            ></AnimatedLetters>
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
      <Loader type="pacman" />
    </>
  );
}
