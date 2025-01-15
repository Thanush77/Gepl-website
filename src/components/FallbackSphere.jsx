// components/FallbackSphere.jsx
import React from 'react';
import { useFrame } from '@react-three/fiber';

export function FallbackSphere() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#64ffda"
        emissive="#64ffda"
        emissiveIntensity={0.2}
        roughness={0.7}
        metalness={0.3}
      />
    </mesh>
  );
}
