// // VideoPlayer.jsx
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import '../styles/VideoPlayer.css';
// import BobbyImage from '../assets/efg.png';
// import B1Image from '../assets/abcd.png';
// import CETP from '../assets/cetp.png';
// import ETP from '../assets/etp.png';
// import B2Image from '../assets/efg.png';

// const VideoPlayer = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: true
//   });

//   const slides = [
//     {
//       title: "Common Effluent Treatment Plant",
//       image: CETP ,
//       description: "Innovative solutions for a sustainable future"
//     },
//     {
//       title: "Effluent Treatment Plant",
//       image: ETP,
//       description: "Advanced eco-friendly technologies"
//     },
//     {
//       title: "Sustainable Future",
//       image: CETP,
//       description: "Building a better tomorrow"
//     },
//     {
//       title: "Green Technology",
//       image: CETP,
//       description: "Advanced eco-friendly technologies"
//     },
//     {
//       title: "Green Technology",
//       image: CETP,
//       description: "Advanced eco-friendly technologies"
//     },
//     {
//       title: "Green Technology",
//       image: CETP,
//       description: "Advanced eco-friendly technologies"
//     },
//     {
//       title: "Green Technology",
//       image: CETP,
//       description: "Advanced eco-friendly technologies"
//     },
//     {
//       title: "Green Technology",
//       image: BobbyImage,
//       description: "Advanced eco-friendly technologies"
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const slideVariants = {
//     enter: {
//       opacity: 0,
//       scale: 0.95,
//     },
//     center: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.4, 0, 0.2, 1],
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 1.05,
//       transition: {
//         duration: 0.5,
//         ease: [0.4, 0, 0.2, 1],
//       },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className="video-player-wrapper"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="slider-container">
//         <button 
//           className="slider-button prev" 
//           onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
//         >
//           ←
//         </button>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIndex}
//             className="slide"
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//           >
//             <div className="content-card">
//               <motion.h3 className="content-heading">
//                 {slides[currentIndex].title}
//               </motion.h3>
//               <motion.div 
//                 className="image-container"
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <motion.img
//                   className="content-image"
//                   src={slides[currentIndex].image}
//                   alt={slides[currentIndex].title}
//                   loading="lazy"
//                 />
//                 <div className="image-overlay">
//                   <p>{slides[currentIndex].description}</p>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         <button 
//           className="slider-button next" 
//           onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
//         >
//           →
//         </button>

//         <div className="dots-container">
//           {slides.map((_, index) => (
//             <div
//               key={index}
//               className={`dot ${index === currentIndex ? 'active' : ''}`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default VideoPlayer;



// VideoPlayer.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/VideoPlayer.css';
import BobbyImage from '../assets/efg.png';
import B1Image from '../assets/abcd.png';
import CETP from '../assets/cetp.png';
import ETP from '../assets/etp.png';
import B2Image from '../assets/efg.png';
import A from '../assets/a.jpeg';
import B from '../assets/b.jpg';
import C from '../assets/c.jpeg';
import D from '../assets/d.jpeg';
import F from '../assets/ab.jpg';
import G from '../assets/ab3.jpg';
import H from '../assets/d.jpg';
import O from '../assets/f.jpg';
import I from '../assets/k.jpg';
import J from '../assets/j.jpg';
import K from '../assets/h.jpg';
import L from '../assets/i.jpg';
import M from '../assets/e.jpg';
import N from '../assets/e.jpeg';

const VideoPlayer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Pollution is never a Solution",
      image: N,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
    {
      title: "Effluent Treatment Plant",
      image: L,
      description: "Advanced eco-friendly technologies",
      buttonText: "LEARN MORE",
      buttonLink: "/learn-more"
    },
    {
      title: "Pollution is never a Solution",
      image: L,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
    {
      title: "Pollution is never a Solution",
      image: M,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
    {
      title: "Pollution is never a Solution",
      image: O,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
    {
      title: "Pollution is never a Solution",
      image: F,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
    {
      title: "Pollution is never a Solution",
      image: G,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
    {
      title: "Pollution is never a Solution",
      image: H,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
    {
      title: "Pollution is never a Solution",
      image: I,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
    {
      title: "Pollution is never a Solution",
      image: J,
      description: "Innovative solutions for a sustainable future",
      buttonText: "VIEW PROJECTS",
      buttonLink: "/projects"
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    enter: { 
      opacity: 0, 
      x: '100%',  // Slide in from right
      transition: { 
        duration: 0.5, 
        ease: 'easeInOut' 
      }
    },
    center: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: 'easeInOut' 
      }
    },
    exit: { 
      opacity: 0, 
      x: '-100%',  // Slide out to left
      transition: { 
        duration: 0.5, 
        ease: 'easeInOut' 
      }
    }
  };

  return (
    <div className="video-player-wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="slide"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        >
          <div className="content-overlay">
            <h1 className="content-title">{slides[currentIndex].title}</h1>
            <p className="content-description">{slides[currentIndex].description}</p>
            <button className="content-button">{slides[currentIndex].buttonText}</button>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="slider-button prev"
        onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
      >
        ←
      </button>
      <button
        className="slider-button next"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
      >
        →
      </button>
    </div>
  );
};


export default VideoPlayer;