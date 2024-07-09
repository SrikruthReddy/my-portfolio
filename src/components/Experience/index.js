import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import ExpSidebar from './ExpSidebar';
import { JOB_DATA, SKILLS_DATA } from '../../data';
import './index.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [letterClass, setLetterClass] = useState('text-animate-exp');
  const [job, setJob] = useState('osi');
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0, // Trigger animation as soon as any part of the ul is visible
    triggerOnce: true, // Only trigger the animation once (on initial load)
  });
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  useEffect(() => {
    const initTagCanvas = () => {
      if (window.TagCanvas) {
        try {
          window.TagCanvas.Start('myCanvas', 'skills-list', {
            textColour: '#fff',
            outlineColour: '#0000',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            initial: [0.1, -0.1],
            wheelZoom: true,
            noSelect: true,
            pinchZoom: true,
          });
        } catch (e) {
          console.error('Canvas error:', e);
        }
      }
    };

    const cleanupTagCanvas = () => {
      if (window.TagCanvas && window.TagCanvas.Delete) {
        window.TagCanvas.Delete('myCanvas');
        const canvas = document.getElementById('myCanvas');
        if (canvas) {
          const parent = canvas.parentNode;
          if (parent) {
            parent.removeChild(canvas);
            const newCanvas = document.createElement('canvas');
            newCanvas.id = 'myCanvas';
            newCanvas.width = 600;
            newCanvas.height = 600;
            parent.appendChild(newCanvas);
          }
        }
      }
    };

    cleanupTagCanvas();
    initTagCanvas();

    return () => {
      cleanupTagCanvas();
    };
  }, []);

  function handleJobClick(newJob) {
    setJob(newJob);
  }

  const strArray = 'Experience'.split('');
  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={14}
            />
          </h1>
          <div className="box">
            <ExpSidebar onJobClick={handleJobClick} currentJob={job} />
            <div className="box-content">
              <h3>
                <span>{JOB_DATA[job].title}</span>
                <span className="company">
                  &nbsp;@&nbsp;
                  {job === 'drdl' ? (
                    JOB_DATA[job].company
                  ) : (
                    <a
                      href={JOB_DATA[job].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-link"
                    >
                      {JOB_DATA[job].company}
                    </a>
                  )}
                </span>
              </h3>
              <p>{JOB_DATA[job].dates}</p>
              <motion.ul ref={ref}>
                {JOB_DATA[job].points.map((point, index) => (
                  <motion.li
                    key={`${job}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Animate based on inView
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <p>{point}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
        <div className="skills-sphere">
          <div id="myCanvasContainer">
            <canvas width="600" height="600" id="myCanvas"></canvas>
          </div>
          <div id="skills-list" style={{ display: 'none' }}>
            <ul>
              {SKILLS_DATA.map((skill, index) => (
                <li key={index}>
                  <a href="#!">{skill}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
