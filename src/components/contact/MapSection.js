import React from 'react';
import { motion } from 'framer-motion';

const MapSection = () => {
  return (
    <motion.div
      className="map-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="map-container">
        <iframe
          title="Guardian Enviro Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.006855277207!2d77.60814227479547!3d12.972366914894386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16795dec40e1%3A0xec34b67f74850e8f!2sNo%2013%2C%20St%20Johns%20Church%20Rd%2C%20Cleveland%20Town%2C%20Pulikeshi%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560005!5e0!3m2!1sen!2sin!4v1704035099614!5m2!1sen!2sin" // Replace with your Google Maps embed URL
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </motion.div>
  );
};

export default MapSection; 