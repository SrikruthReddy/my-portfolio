import './index.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faSuitcase,
  faEnvelope,
  faBars,
  faClose,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="srikruth" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="experience-link"
          to="/experience"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/srikruth-reddy-puram/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SrikruthReddy"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
}
