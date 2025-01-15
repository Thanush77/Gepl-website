import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaSeedling, FaUsers, FaAward, FaGlobeAmericas } from 'react-icons/fa';
// Import images
import AkshayImage from '../assets/Akshay.png';
import ShivaRajanImage from '../assets/shivarajan.jpeg';      
import AbeyJosephImage from '../assets/Abey Joseph.jpeg';     
import KirubananthanImage from '../assets/Kirubananthan.jpeg';     
import "../styles/About.css";

function About() {
  const stats = [
    { icon: <FaUsers />, number: "500+", label: "Clients Served" },
    { icon: <FaAward />, number: "150+", label: "Awards Won" },
    { icon: <FaGlobeAmericas />, number: "25+", label: "Countries" },
  ];

  const values = [
    {
      icon: <FaLeaf />,
      title: "Sustainability",
      description: "Committed to environmental preservation",
    },
    {
      icon: <FaRecycle />,
      title: "Innovation",
      description: "Leading edge eco-friendly solutions",
    },
    {
      icon: <FaSeedling />,
      title: "Growth",
      description: "Continuous improvement and development",
    },
  ];

  const teamMembers = [
    { 
      name: "Mr Akshay S", 
      role: "Director", 
      img: AkshayImage 
    },
    { 
      name: "Kirubananthan", 
      role: "Assistant Manager", 
      img: KirubananthanImage 
    },
    { 
      name: "Shiva Rajan", 
      role: "Process Engineer", 
      img: ShivaRajanImage 
    },
    { 
      name: "Abey Joseph ", 
      role: "Project Coordinator", 
      img: AbeyJosephImage  
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.div
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Guardian Enviro Private Limited
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Leading the Way in Environmental Solutions
          </motion.p>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
        Guardian Enviro Private Limited was founded with a vision to revolutionize environmental management. 
        Over the years, we have built a strong reputation for delivering innovative solutions that meet global environmental standards.
        Our journey began with a commitment to environmental sustainability, and today, we are a leading player in the industry.
        Our experienced team of engineers and consultants work collaboratively to design and implement solutions that not only solve environmental issues but also contribute to sustainable development.
        With cutting-edge technologies and a deep understanding of environmental challenges, we ensure a lasting impact in every project we undertake.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <div className="mission">
          <h3>Mission</h3>
          <p>To create a sustainable future by delivering innovative and efficient environmental engineering solutions.</p>
        </div>
        <div className="vision">
          <h3>Vision</h3>
          <p>To be a global leader in environmental sustainability, fostering harmony between development and nature.</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-container">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      


      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <ul>
          <li>Experienced team of environmental engineers and consultants.</li>
          <li>Customized, cost-effective solutions for diverse industries.</li>
          <li>Commitment to innovation and sustainability.</li>
          <li>Proven track record of successful project delivery.</li>
        </ul>
      </section>


      <section className="industries-we-serve">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Industries We Serve
        </motion.h2>
        <ul>
          <li>Manufacturing.</li>
          <li>Construction and Real Estate.</li>
          <li>Food and Beverages.</li>
          <li>Parmaceticals.</li>
          <li>Renewable Energy.</li>
        </ul>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Leadership Team
        </motion.h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="member-image">
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>



      {/* CTA Section */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2>Ready to Make a Difference?</h2>
        <p>Join us in our mission to create a sustainable future</p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us Today
        </motion.button>
      </motion.section>
    </div>
  );
}

export default About;
