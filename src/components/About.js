import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function About() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      const scale = 1 + Math.sin(state.clock.getElapsedTime()) * 0.1;
      sphereRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <>
      {/* Main sphere */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting spheres */}
      <OrbitingSphere angle={0} radius={3} color="#00ffff" />
      <OrbitingSphere angle={120} radius={3} color="#ff00ff" />
      <OrbitingSphere angle={240} radius={3} color="#ffff00" />
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

export default About;
