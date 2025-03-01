import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialSection = () => {
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/guardianenviro', name: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com/guardianenviro', name: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/guardianenviro', name: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://instagram.com/guardianenviro', name: 'Instagram' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="social-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect With Us
      </motion.h3>
      <div className="social-links">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="social-link"
          >
            {social.icon}
            <span className="social-name">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialSection; 