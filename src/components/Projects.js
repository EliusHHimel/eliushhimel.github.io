import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Projects() {
  return (
    <>
      {/* Project cards in 3D space */}
      <ProjectCard position={[-3, 0, 0]} rotation={[0, 0.2, 0]} color="#ff00ff" delay={0} />
      <ProjectCard position={[0, 0, 0]} rotation={[0, 0, 0]} color="#00ffff" delay={0.2} />
      <ProjectCard position={[3, 0, 0]} rotation={[0, -0.2, 0]} color="#ffff00" delay={0.4} />

      {/* Grid background */}
      <Grid />
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
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
    >
      <boxGeometry args={[1.5, 2, 0.2]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
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

export default Projects;
