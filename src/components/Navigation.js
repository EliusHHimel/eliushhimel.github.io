import React from 'react';

function Navigation({ currentSection, setCurrentSection, sections }) {
  return (
    <nav className="navigation">
      <div className="logo" onClick={() => setCurrentSection(0)}>
        3D PORTFOLIO
      </div>
      <ul className="nav-menu">
        {sections.map((section, index) => (
          <li
            key={section}
            className={`nav-item ${currentSection === index ? 'active' : ''}`}
            onClick={() => setCurrentSection(index)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
