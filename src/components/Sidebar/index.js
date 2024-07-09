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

export default function Sidebar({ location }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (event, path) => {
    if (location.pathname === path) {
      event.preventDefault();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`nav-bar ${menuOpen ? 'open' : ''}`}>
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="srikruth" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={(event) => handleClick(event, '/')}
        >
          <div className="nav-item-container" data-text="Home">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </div>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={(event) => handleClick(event, '/about')}
        >
          <div className="nav-item-container" data-text="About">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </div>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="experience-link"
          to="/experience"
          onClick={(event) => handleClick(event, '/experience')}
        >
          <div className="nav-item-container" data-text="Experience">
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </div>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
          onClick={(event) => handleClick(event, '/projects')}
        >
          <div className="nav-item-container" data-text="Projects">
            <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
          </div>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={(event) => handleClick(event, '/contact')}
        >
          <div className="nav-item-container" data-text="Contact">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </div>
        </NavLink>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faClose : faBars} />
      </div>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/srikruth-reddy-puram/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SrikruthReddy"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
}
