import React from 'react';
import './index.scss';
import styled from 'styled-components';
const jobMapping = {
  osi: 'OSI Systems',
  uf: 'University of Florida',
  drdl: 'DRDL',
};

const tabMap = {
  osi: 0,
  uf: 1,
  drdl: 2,
};
const jobKeys = Object.keys(jobMapping);

const StyledHighlight = styled.div`
  position: absolute;
  width: 2px;
  height: 52px;
  border-radius: 4px;
  background: #ffd700;
  z-index: 10;
  transform: translateY(
    calc(${({ activeTabId }) => tabMap[activeTabId]} * 52px)
  );
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
`;

export default function ExpSidebar({ onJobClick, currentJob }) {
  return (
    <div className="sidebar-container">
      <div className="buttons-container">
        <ul>
          {jobKeys.map((jobKey) => {
            const jobName = jobMapping[jobKey];
            return (
              <li key={jobKey}>
                <button
                  className={jobKey === currentJob ? 'highlighted' : ''}
                  onClick={() => onJobClick(jobKey)}
                >
                  {jobName}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <StyledHighlight activeTabId={currentJob} />
    </div>
  );
}
