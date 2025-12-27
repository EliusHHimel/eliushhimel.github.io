import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

function Projects() {
  const projects = [
    {
      title: '3D Portfolio',
      description: 'An interactive 3D portfolio website built with Three.js and React Three Fiber'
    },
    {
      title: 'Web Application',
      description: 'Full-stack web application with modern technologies and best practices'
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application with seamless user experience'
    }
  ];

  return (
    <>
      {/* Project cards in 3D space */}
      <ProjectCard position={[-3, 0, 0]} rotation={[0, 0.2, 0]} color="#ff00ff" delay={0} />
      <ProjectCard position={[0, 0, 0]} rotation={[0, 0, 0]} color="#00ffff" delay={0.2} />
      <ProjectCard position={[3, 0, 0]} rotation={[0, -0.2, 0]} color="#ffff00" delay={0.4} />

      {/* Grid background */}
      <Grid />

      {/* HTML overlay */}
      <Html projects={projects} />
    </>
  );
}

function ProjectCard({ position, rotation, color, delay }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time * 2 + delay) * 0.3;
      meshRef.current.rotation.y = rotation[1] + Math.sin(time + delay) * 0.1;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1.5, 2, 0.2]}
      radius={0.05}
      smoothness={4}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        metalness={0.7}
        roughness={0.3}
      />
    </RoundedBox>
  );
}

function Grid() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = -2 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[20, 20, 20, 20]} />
      <meshBasicMaterial
        color="#00ffff"
        wireframe={true}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function Html({ projects }) {
  return (
    <div className="projects-overlay">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
