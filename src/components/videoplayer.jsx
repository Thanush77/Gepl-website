import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css/bundle';
import '../styles/VideoPlayer.css';

// Import images
import F from '../assets/ab.jpg';
import G from '../assets/ab3.jpg';
import H from '../assets/d.jpg';
import O from '../assets/f.jpg';
import I from '../assets/k.jpg';
import J from '../assets/j.jpg';
import L from '../assets/i.jpg';
import M from '../assets/e.jpg';

const slides = [
  {
    title: "Together, we make a difference. Supporting communities, protecting nature!",
    image: M,
    description: "Guardian Enviro Private Limited",
  },
  {
    title: "From waste to wellness—treating industrial effluents responsibly! ♻️",
    image: L,
    description: "Guardian Enviro Private Limited",
  },
  {
    title: "Effluent treatment that protects the environment and preserves water resources!",
    image: L,
    description: "Guardian Enviro Private Limited",
  },
  {
    title: "CETP solutions for industries—because every drop counts!",
    image: M,
    description: "Guardian Enviro Private Limited",
  },
  {
    title: "Plant a tree, grow a future!",
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

const VideoPlayer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="video-player-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div 
                className={`slide ${isActive ? 'active' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`
                }}
              >
                <motion.div 
                  className="content-overlay"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0, 
                    y: isActive ? 0 : 50 
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.h2 
                    className="content-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : 30 
                    }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p 
                    className="content-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : 20 
                    }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>
                </motion.div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div 
        className="slider-controls"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </motion.div>

      <div className="progress-bar">
        <motion.div 
          className="progress"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;