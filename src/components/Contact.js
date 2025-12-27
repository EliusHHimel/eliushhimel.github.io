import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Contact() {
  return (
    <>
      {/* Central pulsing sphere */}
      <PulsingSphere />

      {/* Orbiting rings */}
      <Ring radius={2} speed={1} color="#00ffff" />
      <Ring radius={2.5} speed={-0.8} color="#ff00ff" />
      <Ring radius={3} speed={0.6} color="#ffff00" />

      {/* Star field */}
      <StarField />

      {/* HTML overlay */}
      <Html />
    </>
  );
}

function PulsingSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      const time = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(time * 2) * 0.2;
      sphereRef.current.scale.set(scale, scale, scale);
      sphereRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[0.8, 64, 64]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function Ring({ radius, speed, color }) {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

function StarField() {
  const starsRef = useRef();
  
  const starsCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starsCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation={true}
      />
    </points>
  );
}

function Html() {
  return (
    <div className="contact-overlay">
      <h1 className="contact-title">GET IN TOUCH</h1>
      <div className="contact-links">
        <a href="mailto:contact@example.com" className="contact-link">Email</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;
