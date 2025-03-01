import React, { Suspense, lazy, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useForm } from '@formspree/react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaBuilding
} from 'react-icons/fa';
import '../styles/Contact.css';
import LoadingSpinner from './contact/LoadingSpinner';

// Lazy load components
const ContactHero = lazy(() => import('./contact/ContactHero'));
const InfoCards = lazy(() => import('./contact/InfoCards'));
const ContactForm = lazy(() => import('./contact/ContactForm'));
const MapSection = lazy(() => import('./contact/MapSection'));
const SocialSection = lazy(() => import('./contact/SocialSection'));

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 15 };
  const yRange = useSpring(scrollYProgress, springConfig);
  const heroOpacity = useTransform(yRange, [0, 0.2], [1, 0]);
  const heroScale = useTransform(yRange, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const infoCards = [
    { 
      icon: FaPhone, 
      title: "Phone", 
      content: "+91 9845669840",
      delay: 0.2
    },
    { 
      icon: FaEnvelope, 
      title: "Email", 
      content: "thanushdinesh07@gmail.com",
      delay: 0.3
    },
    { 
      icon: FaMapMarkerAlt, 
      title: "Factory Location", 
      content: "Sy #13, Challaghatta Village near BMTC Bus Depot kumbalagodu Bangalore Karnataka India 560074",
      delay: 0.4
    },
    { 
      icon: FaBuilding, 
      title: "Corporate Office", 
      content: "No 13, Icon group Third floor Near Brathi Nagar Police Station St Johns Church road Bangalore Karnataka India 560005",
      delay: 0.5
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "#", delay: 0.2 },
    { icon: FaTwitter, url: "#", delay: 0.3 },
    { icon: FaFacebook, url: "#", delay: 0.4 },
    { icon: FaInstagram, url: "#", delay: 0.5 }
  ];

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <ContactHero heroOpacity={heroOpacity} heroScale={heroScale} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <InfoCards cards={infoCards} />
      </Suspense>

      <div className="contact-main">
        <Suspense fallback={<LoadingSpinner />}>
          <ContactForm />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <MapSection />
        </Suspense>
      </div>

      <Suspense fallback={<LoadingSpinner />}>
        <SocialSection links={socialLinks} />
      </Suspense>
    </motion.div>
  );
};

export default Contact;