import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

  const sectionData = {
    hero: {
      title: 'SOFTWARE ENGINEER',
      description: 'Welcome to an immersive 3D experience. Navigate through interactive sections to explore projects, skills, and more. Use the menu above to explore different areas.'
    },
    about: {
      title: 'ABOUT',
      description: 'A passionate software engineer specializing in creating immersive web experiences. Proficient in modern web technologies and 3D graphics. Always exploring new ways to push the boundaries of what\'s possible on the web.'
    },
    skills: {
      title: 'SKILLS',
      description: 'Expertise in modern technologies and frameworks for building cutting-edge applications.',
      list: ['JavaScript', 'React', 'Three.js', 'Node.js', 'Python', 'WebGL']
    },
    projects: {
      title: 'PROJECTS',
      items: [
        { title: '3D Portfolio', description: 'An interactive 3D portfolio website built with Three.js and React Three Fiber' },
        { title: 'Web Application', description: 'Full-stack web application with modern technologies and best practices' },
        { title: 'Mobile App', description: 'Cross-platform mobile application with seamless user experience' }
      ]
    },
    contact: {
      title: 'GET IN TOUCH',
      links: [
        { label: 'Email', href: 'mailto:contact@example.com' },
        { label: 'GitHub', href: 'https://github.com', target: '_blank' },
        { label: 'LinkedIn', href: 'https://linkedin.com', target: '_blank' }
      ]
    }
  };

  const currentData = sectionData[sections[currentSection]];

  return (
    <div className="App">
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        sections={sections}
      />
      
      {/* HTML Overlays */}
      {currentSection === 0 && (
        <div className="section-overlay">
          <h1 className="section-title">{currentData.title}</h1>
          <p className="section-description">{currentData.description}</p>
        </div>
      )}
      
      {currentSection === 1 && (
        <div className="section-overlay">
          <h1 className="section-title">{currentData.title}</h1>
          <p className="section-description">{currentData.description}</p>
        </div>
      )}
      
      {currentSection === 2 && (
        <>
          <div className="section-overlay">
            <h1 className="section-title">{currentData.title}</h1>
            <p className="section-description">{currentData.description}</p>
          </div>
          <div className="skills-overlay">
            {currentData.list.map((skill, index) => (
              <div key={index} className="skill-item">{skill}</div>
            ))}
          </div>
        </>
      )}
      
      {currentSection === 3 && (
        <div className="projects-overlay">
          {currentData.items.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {currentSection === 4 && (
        <div className="contact-overlay">
          <h1 className="contact-title">{currentData.title}</h1>
          <div className="contact-links">
            {currentData.links.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="contact-link"
                target={link.target}
                rel={link.target ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
      
      <Suspense fallback={<LoadingScreen />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: '#000' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={0.5} />
          
          {currentSection === 0 && <Hero />}
          {currentSection === 1 && <About />}
          {currentSection === 2 && <Skills />}
          {currentSection === 3 && <Projects />}
          {currentSection === 4 && <Contact />}
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
