// index.js
import React, { useEffect } from 'react';
import './index.scss';
import { SKILLS_DATA } from '../../../data';

const SkillsSphere = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.goat1000.com/tagcanvas.min.js';
    script.async = true;
    script.onload = () => {
      try {
        window.TagCanvas.Start('myCanvas', 'tags', {
          textColour: '#ffffff',
          outlineColour: '#ffffff',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          initial: [0.1, 0.1], // Start with a slight rotation
          wheelZoom: false, // Disable zoom on mouse wheel
        });
      } catch (e) {
        document.getElementById('myCanvasContainer').style.display = 'none';
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="myCanvasContainer">
      <canvas width="600" height="600" id="myCanvas">
        <p>
          Anything in here will be replaced on browsers that support the canvas
          element
        </p>
      </canvas>
      <ul id="tags">
        {SKILLS_DATA.map((skill, index) => (
          <li key={index}>
            <a href="#">{skill}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSphere;
