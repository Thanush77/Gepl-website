import { motion } from 'framer-motion';
import React from 'react';

function ProductGallery() {
  return (
    <div className="product-gallery">
      <motion.div 
        className="gallery-item"
        whileHover={{ 
          scale: 1.1,
          rotateY: 180,
          transition: { duration: 0.6 }
        }}
      >
        <div className="gallery-item-front">
          <img src="/product-image.jpg" alt="Product" />
        </div>
        <div className="gallery-item-back">
          <h3>Product Details</h3>
          <p>Description goes here</p>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductGallery;
