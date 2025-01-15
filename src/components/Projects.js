import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Solar Energy Implementation",
      description: "Large scale solar installation project.",
    },
    {
      title: "Waste Management System",
      description: "City-wide recycling program.",
    },
    {
      title: "Green Building Design",
      description: "Sustainable architecture solutions.",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Our Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
