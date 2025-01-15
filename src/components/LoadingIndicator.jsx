// components/LoadingIndicator.jsx
import React from "react";
import { motion } from "framer-motion";

const LoadingIndicator = () => {
  return (
    <motion.div
      className="loading-indicator"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default LoadingIndicator;
