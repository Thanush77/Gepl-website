import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: direction === 'up' ? -50 : direction === 'down' ? 50 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`animated-section ${className}`}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <motion.div variants={childVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSection;