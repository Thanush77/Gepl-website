import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaRecycle, FaSeedling, FaUsers, FaAward, FaGlobeAmericas } from 'react-icons/fa';
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
            Transforming Environmental Management
          </motion.p>
        </div>
      </motion.div>

      {/* Our Story Section */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          At Guardian Enviro Private Limited, we are driven by a bold vision: to revolutionize the way environmental challenges are addressed and managed.
           Founded by a consortium of exceptional minds, our mission is to build world-class infrastructure tailored to tackling
          the most pressing environmental problems faced by municipalities, industrial estates, and corporations.
          Our approach goes beyond generic solutions. We specialize in crafting tailor-made strategies designed to meet the unique
          needs of various industries while ensuring full compliance with current environmental legislation. By simplifying complex 
          environmental challenges, we provide actionable and effective solutions that align with global sustainability goals.</p>
        
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
    transition={{ duration: 0.8 }}
  >
    Industries We Serve
  </motion.h2>
  <div className="industries-container">
    {[
      { name: "Manufacturing", imgSrc: "manufacturing.jpg" },
      { name: "Construction and Real Estate", imgSrc: "construction.jpg" },
      { name: "Food and Beverages", imgSrc: "food.jpg" },
      { name: "Pharmaceuticals", imgSrc: "pharmaceuticals.jpg" },
      { name: "Renewable Energy", imgSrc: "renewable.jpg" },
    ].map((industry, index) => (
      <motion.div
        key={index}
        className="industry-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      >
        <img src={industry.imgSrc} alt={industry.name} className="industry-img" />
        <h3>{industry.name}</h3>
      </motion.div>
    ))}
  </div>
</section>
<section className="industries-we-serve">
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    Industries We Serve
  </motion.h2>
  <div className="industries-container">
    {[
      { name: "Manufacturing", imgSrc: "manufacturing.jpg" },
      { name: "Construction and Real Estate", imgSrc: "construction.jpg" },
      { name: "Food and Beverages", imgSrc: "food.jpg" },
      { name: "Pharmaceuticals", imgSrc: "pharmaceuticals.jpg" },
      { name: "Renewable Energy", imgSrc: "renewable.jpg" },
    ].map((industry, index) => (
      <motion.div
        key={index}
        className="industry-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      >
        <img src={industry.imgSrc} alt={industry.name} className="industry-img" />
        <h3>{industry.name}</h3>
      </motion.div>
    ))}
  </div>
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
