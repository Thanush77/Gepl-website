import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';

// Main VideoComponent
export default function VideoModel() {
  return (
    <div className="model-wrapper" style={{ height: '600px' }}>
      {/* The Three.js Canvas */}
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Background Elements */}
        <OrbitControls enableDamping enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Environment preset="night" background />
      </Canvas>

      {/* Video Element */}
      <div className="video-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <video
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="gepl/src/assets/earth.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
