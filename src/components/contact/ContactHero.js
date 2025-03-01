import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = ({ heroOpacity, heroScale }) => {
  return (
    <motion.div 
      className="contact-hero"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Us
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Get in touch, if you also care for the next generation.
      </motion.p>
    </motion.div>
  );
};

export default ContactHero; 