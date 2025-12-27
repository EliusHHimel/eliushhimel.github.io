import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

function Skills() {
  return (
    <>
      {/* Animated skill boxes */}
      <SkillBox position={[-3, 2, 0]} color="#ff6b6b" delay={0} />
      <SkillBox position={[3, 2, 0]} color="#4ecdc4" delay={0.2} />
      <SkillBox position={[-3, -2, 0]} color="#45b7d1" delay={0.4} />
      <SkillBox position={[3, -2, 0]} color="#f7b731" delay={0.6} />
      <SkillBox position={[0, 0, 0]} color="#5f27cd" delay={0.8} />

      {/* Floating particles */}
      <FloatingParticles />
    </>
  );
}

function SkillBox({ position, color, delay }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(time + delay) * 0.5;
      meshRef.current.rotation.y = Math.cos(time + delay) * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(time * 2 + delay) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.6}
        roughness={0.4}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const particlesRef = useRef();
  
  const particlesCount = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
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
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default Skills;
