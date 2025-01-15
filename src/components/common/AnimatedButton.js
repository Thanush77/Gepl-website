import React from 'react';
import { motion } from 'framer-motion'; // This import was missing

const AnimatedButton = ({ children, onClick }) => {
  return (
    <motion.button 
      className="animated-button"
      onClick={onClick}
      whileHover={{ 
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
