import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaSeedling, FaArrowRight } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="home-container">
      <section className="features-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Core Features</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              icon: <FaLeaf />,
              title: "Sustainable Solutions",
              description: "Implementing eco-friendly approaches and innovative technologies to create lasting environmental impact for a better tomorrow.",
              color: "#2DFFF5"
            },
            {
              icon: <FaRecycle />,
              title: "Waste Management",
              description: "Comprehensive waste handling solutions utilizing advanced recycling methods and sustainable disposal practices.",
              color: "#B8B5A1"
            },
            {
              icon: <FaSeedling />,
              title: "Green Technology",
              description: "Cutting-edge environmental technologies designed to preserve and protect our natural resources for future generations.",
              color: "#4AE3B5"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={featureVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <motion.div 
                className="feature-overlay"
                style={{ backgroundColor: feature.color }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.03 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2>Ready to Make a Difference?</h2>
          <p>Join us in creating a sustainable future for generations to come.</p>
          <motion.button
            className="cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(45, 255, 245, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
            <FaArrowRight className="button-icon" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;