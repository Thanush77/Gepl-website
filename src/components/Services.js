import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFileAlt, FaWater, FaIndustry, FaHospital, FaTrash, 
  FaBolt, FaSkull, FaCog, FaFlask, FaTools, FaLeaf, FaTint 
} from 'react-icons/fa';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      category: "Consulting & Project Services",
      items: [
        {
          icon: <FaFileAlt />,
          title: "Detailed Project Reports",
          description: "Comprehensive analysis and feasibility studies for environmental projects"
        },
        {
          icon: <FaWater />,
          title: "Sewage Treatment Plants",
          description: "Design and implementation of modern STP solutions"
        },
        {
          icon: <FaIndustry />,
          title: "Effluent Treatment Plants",
          description: "Custom ETP solutions for industrial waste management"
        },
        // {
        //   icon: <FaHospital />,
        //   title: "Bio Medical Waste Management",
        //   description: "Specialized handling of healthcare facility waste"
        // },
        {
          icon: <FaTrash />,
          title: "Municipal Solid Waste Management",
          description: "Urban waste management solutions"
        },
        {
          icon: <FaBolt />,
          title: "Waste to Energy Plants",
          description: "Converting waste into sustainable energy"
        },
        {
          icon: <FaSkull />,
          title: "Hazardous Waste Management",
          description: "Safe disposal of dangerous materials"
        }
      ]
    },
    {
      category: "Engineering & Technical Services",
      items: [
        {
          icon: <FaCog />,
          title: "Engineering Services",
          description: "Expert technical consulting and implementation"
        },
        // {
        //   icon: <FaFlask />,
        //   title: "Laboratory Services",
        //   description: "Advanced testing and analysis facilities"
        // },
        {
          icon: <FaTools />,
          title: "STP Installation & Operation",
          description: "End-to-end sewage treatment solutions"
        },
        {
          icon: <FaCog />,
          title: "ETP Installation & Operation",
          description: "Industrial effluent treatment systems"
        },
        // {
        //   icon: <FaLeaf />,
        //   title: "Bio Gas Plant Installation",
        //   description: "Renewable energy from organic waste"
        // },
        {
          icon: <FaTint />,
          title: "Rain Water Harvesting",
          description: "Sustainable water conservation systems"
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="services">
      <motion.div 
        className="services-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Services</h1>
        <div className="hero-line"></div>
        <p>Comprehensive Environmental Solutions for a Sustainable Future</p>
      </motion.div>

      {services.map((serviceCategory, idx) => (
        <motion.section 
          key={idx}
          className="services-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="category-title"
            variants={itemVariants}
          >
            {serviceCategory.category}
          </motion.h2>

          <motion.div 
            className="services-grid"
            variants={containerVariants}
          >
            {serviceCategory.items.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 20px 30px rgba(0,0,0,0.2)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <div className="card-content">
                  <motion.div 
                    className="service-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <motion.button
                    className="learn-more"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
                <div className="card-overlay"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      ))}

      <motion.div 
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Transform Your Environmental Impact?</h2>
        <p>Contact us today to discuss your specific requirements</p>
        <motion.button
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Services;
