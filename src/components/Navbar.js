import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaTools, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo_new.png";
import "../styles/Navbar.css";

// Animation variants
const navbarVariants = {
  hidden: { y: -100 },
  visible: { y: 0, transition: { duration: 0.5 } }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

// Navigation items configuration
const NAV_ITEMS = [
  { path: "/", label: "Home", icon: <FaHome /> },
  { path: "/about", label: "About", icon: <FaInfoCircle /> },
  { path: "/services", label: "Services", icon: <FaTools /> },
  { path: "/contact", label: "Contact", icon: <FaPhone /> },
  { path: "/careers", label: "Careers", icon: <FaPhone /> }
];

// Memoized Logo component
const LogoSection = memo(() => (
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
));

// Memoized NavLink component
const NavLink = memo(({ item, isActive }) => (
  <motion.div
    className="nav-link-wrapper"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link to={item.path} className={`nav-link ${isActive ? "active" : ""}`}>
      <span className="nav-icon">{item.icon}</span>
      <span className="nav-label">{item.label}</span>
      {isActive && (
        <motion.div className="active-indicator" layoutId="activeIndicator" />
      )}
    </Link>
  </motion.div>
));

// Memoized MobileMenuItem component
const MobileMenuItem = memo(({ item, isActive, onClick }) => (
  <motion.div whileHover={{ x: 10 }} className="mobile-nav-item">
    <Link
      to={item.path}
      className={isActive ? "active" : ""}
      onClick={onClick}
    >
      <span className="nav-icon">{item.icon}</span>
      <span className="nav-label">{item.label}</span>
    </Link>
  </motion.div>
));

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  // Scroll effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Route change effect
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Memoized mobile menu toggle handler
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
      >
        <div className="navbar-container">
          <LogoSection />

          <div className="nav-links-desktop">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.path}
                item={item}
                isActive={location.pathname === item.path}
              />
            ))}
          </div>

          <motion.button
            className="contact-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          <motion.div
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {NAV_ITEMS.map(item => (
              <MobileMenuItem
                key={item.path}
                item={item}
                isActive={location.pathname === item.path}
                onClick={toggleMobileMenu}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Navbar);