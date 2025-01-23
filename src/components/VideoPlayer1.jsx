// VideoPlayer.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EarthVideo from '../assets/back.mp4';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      const handleError = (e) => {
        setError('Error loading video');
        console.error('Video error:', e);
      };

      videoElement.addEventListener('loadeddata', handleLoadedData);
      videoElement.addEventListener('error', handleError);

      return () => {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
        videoElement.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '300px',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden'
      }}
    >
      {!isLoaded && !error && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff'
          }}
        >
          Loading...
        </div>
      )}
      
      {error && (
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#ff4444'
          }}
        >
          {error}
        </div>
      )}

      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '16px'
        }}
        playsInline
        autoPlay
        muted
        loop
      >
        <source src={EarthVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default VideoPlayer;