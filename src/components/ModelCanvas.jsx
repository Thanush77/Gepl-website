// components/ModelCanvas.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EarthModel } from './EarthModel';
import { ModelLoader } from './ModelLoader';

export function ModelCanvas() {
  return (
    <Suspense fallback={<ModelLoader />}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ 
          width: '100%', 
          height: '100%',
          minHeight: '400px'
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <EarthModel />
      </Canvas>
    </Suspense>
  );
}
