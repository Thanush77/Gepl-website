import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Earth Component
function Earth() {
  const ref = useRef();
  const [textures, setTextures] = useState(null);

  // Load textures asynchronously
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    Promise.all([
      
      textureLoader.loadAsync('/textures/abc.jpeg'),
      textureLoader.loadAsync('/textures/earth_specular.png')
    ]).then(([map, bumpMap, specularMap]) => {
      setTextures({ map, bumpMap, specularMap });
    });
  }, []);

  // Mouse interactive rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  if (!textures) return null;

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={textures.map}
        bumpMap={textures.bumpMap}
        bumpScale={0.05}
        roughness={0.5}
        metalness={0.1}
      />
    </mesh>
  );
}

// Main EarthModel Component
export default function EarthModel() {
  return (
    <div className="model-wrapper" style={{ height: '600px' }}>
      {/* The Three.js Canvas */}
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Earth Component */}
        <Earth />

        {/* Background Elements */}
        <OrbitControls enableDamping enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Environment preset="night" background />
      </Canvas>
    </div>
  );
}
