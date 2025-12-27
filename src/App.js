import React, { Suspense, useState, useRef } from 'react';
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

  return (
    <div className="App">
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
        sections={sections}
      />
      
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
