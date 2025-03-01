import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import VideoPlayer from "./videoplayer.jsx";
import "../styles/Hero.css";

const Hero = () => {
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${
        e.clientY - 10
      }px)`;
      cursorTrail.style.transform = `translate(${e.clientX - 20}px, ${
        e.clientY - 20
      }px)`;
    };

    const addHoverEffect = () => {
      cursor.style.transform = "scale(1.5)";
      cursor.style.backgroundColor = "var(--primary-color)";
    };

    const removeHoverEffect = () => {
      cursor.style.transform = "scale(1)";
      cursor.style.backgroundColor = "transparent";
    };

    document.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(".interactive");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  const stats = [
    { icon: <FaChartLine />, number: "500+", label: "Projects Completed" },
    { icon: <FaShieldAlt />, number: "100+", label: "Happy Clients" },
    { icon: <FaLeaf />, number: "50+", label: "Expert Team" },
  ];

  return (
    <section className="hero-section">
      <div className="cursor-effect" ref={cursorRef}></div>
      <div className="cursor-trail" ref={cursorTrailRef}></div>

      <div className="hero-flex-container">
        <div className="video-section-wrapper">
          <VideoPlayer className="video-background" />
        </div>

        <div className="content-grid">
          <div className="hero-content-section">
            <HeroBadge />
            <HeroTitles />
            <HeroDescription />
            <HeroCTA />
          </div>
          <HeroStats stats={stats} />
        </div>
      </div>
    </section>
  );
};

const HeroBadge = () => (
  <motion.div 
    className="hero-badge interactive"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
  >
    <FaShieldAlt className="badge-icon" />
    <span>Leading Environmental Solutions</span>
  </motion.div>
);

const HeroTitles = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="hero-titles-container">
      <motion.div
        className="hero-title-section"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={titleVariants}
      >
        <h1 className="hero-title" aria-label="Engineering a Greener Tomorrow">
          Engineering <span className="gradient-text">a</span> Greener Tomorrow
        </h1>
      </motion.div>

      <motion.div
        className="hero-title-section"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={titleVariants}
        transition={{ delay: 0.2 }}
      >
        <h2 className="hero-subtitle" aria-label="Comprehensive Environmental Solutions for a Sustainable Future">
          Comprehensive Environmental Solutions{" "}
          <span className="gradient-text">for</span> a Sustainable Future
        </h2>
      </motion.div>
    </div>
  );
};

const HeroDescription = () => (
  <motion.p
    className="hero-description"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
  >
    Welcome to Guardian Enviro Private Limited, a trusted leader in
    environmental engineering and compliance with environmental
    regulations. We focus on sustainable development and resource
    optimization.
  </motion.p>
);

const HeroCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-cta">
      <motion.button
        className="secondary-button interactive"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/about")}
      >
        Learn More About Us
        <FaLeaf className="button-icon" />
      </motion.button>

      <motion.button
        className="primary-button interactive"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/services")}
      >
        Explore Our Services
        <FaArrowRight className="button-icon" />
      </motion.button>
    </div>
  );
};

const HeroStats = ({ stats }) => (
  <div className="hero-stats">
    {stats.map((stat, index) => (
      <motion.div
        key={index}
        className="stat-card interactive"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 * index }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
      >
        <div className="stat-icon">{stat.icon}</div>
        <h3>{stat.number}</h3>
        <p>{stat.label}</p>
      </motion.div>
    ))}
  </div>
);

export default Hero;