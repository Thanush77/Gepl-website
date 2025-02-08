import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaTools, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo_new.png"; 
import "../styles/Navbar.css";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaInfoCircle /> },
    { path: "/services", label: "Services", icon: <FaTools /> },
    { path: "/contact", label: "Contact", icon: <FaPhone /> },
    { path: "/careers", label: "Careers", icon: <FaPhone /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  return (
    
    <>
    {/* <TopBar /> */}
      <motion.nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navbar-container">
          {/* Logo Section */}
          <motion.div
            className="logo-section"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="logo-link">
              <img src={Logo} alt="Guardian Enviro" className="logo" />
              <span className="logo-text">Guardian Enviro Private Limited</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="nav-links-desktop">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                className="nav-link-wrapper"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Button */}
          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.div
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ x: 10 }}
                className="mobile-nav-item"
              >
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
