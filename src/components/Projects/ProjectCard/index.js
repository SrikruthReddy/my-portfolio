import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import IconFolder from '../../IconFolder';

const ProjectCard = ({ title, description, stack, github, host }) => {
  return (
    <div className="project-card-container">
      <div className="project-card-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <IconFolder />
            </div>
            <div className="project-links">
              <a target="_blank" rel="noreferrer" href={github}>
                <FontAwesomeIcon icon={faGithub} color="#a8b2d1" />
              </a>

              {host && (
                <>
                  &nbsp;&nbsp;
                  <a target="_blank" rel="noreferrer" href={host}>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      color="#a8b2d1"
                    />
                  </a>
                </>
              )}
            </div>
          </div>
          <h3 className="project-title">
            {host ? (
              <a href={host} target="_blank" rel="noreferrer">
                {title}
              </a>
            ) : (
              <a href={github} target="_blank" rel="noreferrer">
                {title}
              </a>
            )}
          </h3>
          <div className="project-description">
            {host ? (
              <a href={host} target="_blank" rel="noreferrer">
                {description}
              </a>
            ) : (
              <a href={github} target="_blank" rel="noreferrer">
                {description}
              </a>
            )}
          </div>
        </header>
        <footer>
          <ul className="project-tech-list">
            {stack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default ProjectCard;
