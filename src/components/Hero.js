import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

function Hero() {
  const geometryRef = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    if (geometryRef.current) {
      geometryRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      geometryRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
      geometryRef.current.scale.set(scale, scale, scale);
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  // Create particles
  const particlesCount = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  return (
    <>
      {/* Animated central geometry */}
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
    </>
  );
}

export default Hero;
