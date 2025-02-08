import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/VideoPlayer.css';
import F from '../assets/ab.jpg';
import G from '../assets/ab3.jpg';
import H from '../assets/d.jpg';
import O from '../assets/f.jpg';
import I from '../assets/k.jpg';
import J from '../assets/j.jpg';
import L from '../assets/i.jpg';
import M from '../assets/e.jpg';

const VideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "Together, we make a difference. Supporting communities, protecting nature!",
      image: M,
      description: "Guardian Enviro Private Limited",
      buttonLink: "/projects"
    },
    {
      title: "From waste to wellness—treating industrial effluents responsibly! ♻️  ",
      image: L,
      description: "Guardian Enviro Private Limited",
    },
    {
      title: "Effluent treatment that protects the environment and preserves water resources!",
      image: L,
      description: "Guardian Enviro Private Limited",
    },
    {
      title: "CETP solutions for industries—because every drop counts! ",
      image: M,
      description: "Guardian Enviro Private Limited",
    },
    {
      title: "Plant a tree, grow a future! ",
      image: O,
      description: "Guardian Enviro Private Limited",
    },
    {
      title: "Safe disposal, sustainable future! Managing hazardous waste the right way",
      image: F,
      description: "Guardian Enviro Private Limited",
    },
    {
      title: "Keeping industries clean and the planet safer with sustainable waste management!",
      image: G,
      description: "Guardian Enviro Private Limited",
    },
    {
      title: "No shortcuts in hazardous waste management—safe, compliant, and eco-friendly disposal! 🚯",
      image: H,
      description: "Guardian Enviro Private Limited",
    },
    {
      title: "Innovative waste solutions for a cleaner environment and safer industries!",
      image: I,
      description: "Guardian Enviro Private Limited",
    },
    {
      title: "Innovative waste solutions for a cleaner environment and safer industries!",
      image: J,
      description: "Guardian Enviro Private Limited",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, isAnimating]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0,
      }
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const paginate = (newDirection) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  return (
    <div className="video-player-wrapper">
      <AnimatePresence
        initial={false}
        custom={direction}
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={currentIndex}
          className="slide"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="content-overlay">
            <h1 className="content-title">{slides[currentIndex].title}</h1>
            <p className="content-description">{slides[currentIndex].description}</p>
            {slides[currentIndex].buttonText && (
              <a href={slides[currentIndex].buttonLink} className="content-button">
                {slides[currentIndex].buttonText}
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <button 
        className="slider-button prev" 
        onClick={() => paginate(-1)}
        disabled={isAnimating}
      >
        ←
      </button>
      <button 
        className="slider-button next"
        onClick={() => paginate(1)}
        disabled={isAnimating}
      >
        →
      </button>
    </div>
  );
};

export default VideoPlayer;