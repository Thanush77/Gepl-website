import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, color, index }) => {
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      className="feature-card"
      variants={featureVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      <div className="feature-icon" style={{ color }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <motion.div 
        className="feature-overlay"
        style={{ backgroundColor: color }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.03 }}
      />
    </motion.div>
  );
};

export default FeatureCard; 