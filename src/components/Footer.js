// Footer.js
import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronUp
} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* Wave SVG */}
      <div className="footer-wave">
        <svg 
          className="wave-svg" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="wave-path"
          />
        </svg>
      </div>

      <div className="footer-container">
        {/* Company Section */}
        <div className="footer-section company-section">
          <h2 className="company-title">Guardian Enviro</h2>
          <p className="company-subtitle">Creating a Sustainable Future</p>
          <div className="company-underline"></div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="section-title">Quick Links</h3>
          <ul className="footer-links">
            {['About Us', 'Services', 'Projects', 'Contact'].map((link) => (
              <li key={link} className="footer-link-item">
                <a href={`/${link.toLowerCase().replace(' ', '-')}`} className="footer-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="section-title">Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>thanushdinesh07@gmail.com</p>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>+91 9845669840</p>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <p>Sy #13, Challaghatta Vill near BMTC Bus Depot kumbalagodu Bangalore Karnataka India 560074</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="section-title">Newsletter</h3>
          <p className="newsletter-text">Stay updated with our latest news and updates.</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-container">
        <div className="social-icons">
          {[
            { icon: <FaFacebookF />, url: 'https://facebook.com' },
            { icon: <FaTwitter />, url: 'https://twitter.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Guardian Enviro Private Limited. All rights reserved.</p>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="scroll-to-top"
        >
          <FaChevronUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
