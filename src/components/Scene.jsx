// src/components/Scene.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EarthModel } from './EarthModel';

export function Scene() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <EarthModel />
          <OrbitControls />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
