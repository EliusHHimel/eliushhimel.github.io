import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function About() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <>
      {/* Distorted sphere */}
      <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ff00ff"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Orbiting spheres */}
      <OrbitingSphere angle={0} radius={3} color="#00ffff" />
      <OrbitingSphere angle={120} radius={3} color="#ff00ff" />
      <OrbitingSphere angle={240} radius={3} color="#ffff00" />

      {/* HTML overlay */}
      <Html />
    </>
  );
}

function OrbitingSphere({ angle, radius, color }) {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      const rad = ((angle + t * 30) * Math.PI) / 180;
      ref.current.position.x = Math.cos(rad) * radius;
      ref.current.position.z = Math.sin(rad) * radius;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function Html() {
  return (
    <div className="section-overlay">
      <h1 className="section-title">ABOUT</h1>
      <p className="section-description">
        A passionate software engineer specializing in creating immersive web experiences.
        Proficient in modern web technologies and 3D graphics. Always exploring new ways
        to push the boundaries of what's possible on the web.
      </p>
    </div>
  );
}

export default About;
