import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram 
} from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({
    infoCards: false,
    contactForm: false,
    mapSection: false,
    socialSection: false
  });

  const [state, handleSubmit] = useForm("xovvbdyl"); // Replace with your form ID

  const { scrollY } = useScroll();
  const springConfig = { stiffness: 100, damping: 15 };
  const yRange = useSpring(scrollY, springConfig);
  const heroOpacity = useTransform(yRange, [0, 200], [1, 0]);
  const heroScale = useTransform(yRange, [0, 200], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsVisible({
        infoCards: scrollPosition > windowHeight * 0.1,
        contactForm: scrollPosition > windowHeight * 0.3,
        mapSection: scrollPosition > windowHeight * 0.4,
        socialSection: scrollPosition > windowHeight * 0.6
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="contact-page">
      <motion.div 
        className="contact-hero"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Get in touch with us for any inquiries
        </motion.p>
      </motion.div>

      <div className="contact-content">
        <motion.div 
          className="info-cards"
          initial="hidden"
          animate={isVisible.infoCards ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {[
            { icon: FaPhone, title: "Phone", content: "+91 9980993104" },
            { icon: FaEnvelope, title: "Email", content: "thanushdinesh07@gmail.com" },
            { icon: FaMapMarkerAlt, title: "Location", content: "Sy #13, Challaghatta Vill, Bangalore" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="info-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <item.icon className="info-icon" />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="main-contact-section">
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible.contactForm ? 
              { opacity: 1, x: 0 } : 
              { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Send us a message</h2>
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="success-message"
              >
                <p>Thank you for your message! We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { name: "name", type: "text", label: "Name" },
                  { name: "email", type: "email", label: "Email" }
                ].map((field, index) => (
                  <motion.div 
                    key={field.name}
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      required
                    />
                    <ValidationError 
                      prefix={field.label} 
                      field={field.name}
                      errors={state.errors}
                    />
                  </motion.div>
                ))}
                <motion.div 
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </motion.div>
                <motion.button 
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div 
            className="map-section"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible.mapSection ? 
              { opacity: 1, scale: 1 } : 
              { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.006855277207!2d77.60814227479547!3d12.972366914894386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16795dec40e1%3A0xec34b67f74850e8f!2sNo%2013%2C%20St%20Johns%20Church%20Rd%2C%20Cleveland%20Town%2C%20Pulikeshi%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560005!5e0!3m2!1sen!2sin!4v1704035099614!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="office-location"
            />
          </motion.div>
        </div>

        <motion.div 
          className="social-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible.socialSection ? 
            { opacity: 1, y: 0 } : 
            { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
        >
          <h3>Follow Us</h3>
          <div className="social-icons">
            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
              <motion.a 
                key={index}
                href="#"
                whileHover={{ 
                  y: -5,
                  scale: 1.2,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;