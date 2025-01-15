import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import EarthModel from "./EarthModel";
import "../styles/Hero.css";

const Hero = () => {
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;

    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      cursorTrail.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
    };

    const addHoverEffect = () => {
      cursor.style.transform = "scale(1.5)";
      cursor.style.backgroundColor = "#CFC4A2";
    };

    const removeHoverEffect = () => {
      cursor.style.transform = "scale(1)";
      cursor.style.backgroundColor = "transparent";
    };

    document.addEventListener("mousemove", moveCursor);

    const buttons = document.querySelectorAll("button, .stat-card, .hero-badge");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", addHoverEffect);
      button.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", addHoverEffect);
        button.removeEventListener("mouseleave", removeHoverEffect);
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

      <div className="hero-container">
        <AnimatedSection direction="left" delay={0.2}>
          <div className="hero-content">
            <motion.div className="hero-badge" whileHover={{ scale: 1.1 }}>
              <FaShieldAlt className="badge-icon" />
              <span>Leading Environmental Solutions</span>
            </motion.div>
            <h1 className="hero-title">
              Engineering <span className="gradient-text">a</span> Greener Tomorrow
            </h1>
            <h2 className="hero-title">
              Comprehensive Environmental Solutions{" "}
              <span className="gradient-text">for</span> a Sustainable Future
            </h2>
            <p className="hero-description">
              Welcome to Guardian Enviro Private Limited, a trusted leader in
              environmental engineering. We provide innovative solutions to
              address environmental challenges, focusing on sustainable
              development, resource optimization, and compliance with
              environmental regulations.
            </p>
            <div className="hero-cta">
              <motion.button
                className="primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/services")}
              >
                Explore Our Services
                <FaArrowRight className="button-icon" />
              </motion.button>

              <motion.button
                className="secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about")}
              >
                Learn More About Us
                <FaLeaf className="button-icon" />
              </motion.button>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
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
          </div>
        </AnimatedSection>
        <AnimatedSection direction="right" delay={0.4}>
          <motion.div className="hero-visual" whileHover={{ scale: 1.02 }}>
            <EarthModel />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
