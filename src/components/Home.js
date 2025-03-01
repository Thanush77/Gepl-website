import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaSeedling, FaArrowRight } from "react-icons/fa";
import { CardSkeleton } from "./SkeletonLoader";
import "../styles/Home.css";

// Lazy load feature cards
const FeatureCard = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./FeatureCard"));
    }, 1000);
  });
});

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

  const features = [
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
  ];

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
          {features.map((feature, index) => (
            <Suspense key={index} fallback={<CardSkeleton />}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                index={index}
              />
            </Suspense>
          ))}
        </motion.div>
      </section>

      {/* <section className="cta-section">
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
      </section> */}
    </div>
  );
};

export default Home;