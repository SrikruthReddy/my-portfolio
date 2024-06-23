// index.js
import React, { useEffect } from 'react';
import './index.scss';
import { SKILLS_DATA } from '../../../data';

const SkillsSphere = () => {
  useEffect(() => {
    // Initialize TagCanvas
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
  }, []);

  return (
    <>
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
    </>
  );
};

export default SkillsSphere;
