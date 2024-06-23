import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import ExpSidebar from './ExpSidebar';
import { JOB_DATA } from '../../data';
import './index.scss';

export default function Experience() {
  const [letterClass, setLetterClass] = useState('text-animate-exp');
  const [job, setJob] = useState('osi');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
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
              <ul>
                {JOB_DATA[job].points.map((point, index) => {
                  return (
                    <li key={index}>
                      <p>{point}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
