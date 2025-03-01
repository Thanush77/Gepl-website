import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, DollarSign, Clock, Briefcase, ChevronRight } from 'lucide-react';

const JobModal = ({ job, departments, onClose }) => {
  if (!job) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="job-modal"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ 
          duration: 0.3,
          type: "spring",
          damping: 25,
          stiffness: 300
        }}
      >
        <motion.div 
          className="modal-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>{job.title}</h2>
          <button className="close-modal" onClick={onClose}>
            <X size={24} />
          </button>
        </motion.div>

        <motion.div 
          className="modal-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="modal-section job-overview">
            <div className="overview-grid">
              <motion.div 
                className="overview-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <MapPin size={20} />
                <div>
                  <h4>Location</h4>
                  <p>{job.location}</p>
                </div>
              </motion.div>
              <motion.div 
                className="overview-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <DollarSign size={20} />
                <div>
                  <h4>Salary Range</h4>
                  <p>{job.salary}</p>
                </div>
              </motion.div>
              <motion.div 
                className="overview-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Clock size={20} />
                <div>
                  <h4>Experience</h4>
                  <p>{job.experience}</p>
                </div>
              </motion.div>
              <motion.div 
                className="overview-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <Briefcase size={20} />
                <div>
                  <h4>Department</h4>
                  <p>{departments.find(d => d.id === job.department)?.name}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3>About the Role</h3>
            <p>{job.description}</p>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3>Required Skills</h3>
            <div className="skills-grid">
              {job.skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <span className="skill-dot" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3>Key Responsibilities</h3>
            <ul className="responsibilities-list">
              {job.responsibilities.map((resp, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {resp}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h3>About the Department</h3>
            <p>{departments.find(d => d.id === job.department)?.summary}</p>
          </motion.div>

          <motion.div 
            className="modal-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button 
              className="apply-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply for this Position
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobModal; 