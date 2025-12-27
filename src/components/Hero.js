import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
import * as THREE from 'three';

function Hero() {
  const geometryRef = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    if (geometryRef.current) {
      geometryRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      geometryRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  // Create particles
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <>
      {/* Animated central geometry */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={geometryRef} position={[0, 0, 0]}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {/* Background particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00ffff"
          transparent
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>

      {/* HTML overlay */}
      <Html />
    </>
  );
}

function Html() {
  return (
    <>
      <div className="section-overlay">
        <h1 className="section-title">SOFTWARE ENGINEER</h1>
        <p className="section-description">
          Welcome to an immersive 3D experience. Navigate through interactive sections
          to explore projects, skills, and more. Use the menu above to explore different areas.
        </p>
      </div>
    </>
  );
}

export default Hero;
