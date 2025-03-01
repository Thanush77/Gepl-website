import { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import { Briefcase, Leaf, Globe, Users, ChevronRight, Search, Heart, Code, BookOpen, Building, X, MapPin, DollarSign, Clock, Filter } from 'lucide-react';
import '../styles/CareersPage.css';
import { motion, AnimatePresence } from 'framer-motion';

// Lazy load the modal component
const JobModal = lazy(() => import('./JobModal'));

const LoadingModal = () => (
  <div className="modal-loading-overlay">
    <div className="modal-loading">
      <div className="loading-spinner" />
      <span className="loading-text">Loading job details...</span>
    </div>
  </div>
);

const CareersPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Memoize static data
  const departments = useMemo(() => [
    { id: 'projects', name: 'Projects', icon: Leaf, summary: 'Lead innovative environmental projects and sustainable solutions.' },
    { id: 'consultancy', name: 'Consultancy', icon: Briefcase, summary: 'Provide expert environmental consulting services to clients worldwide.' },
    { id: 'business-development', name: 'Business Development', icon: Globe, summary: 'Drive growth and expand our environmental impact globally.' },
    { id: 'human-resource', name: 'Human Resource', icon: Users, summary: 'Build and nurture our talented team of environmental professionals.' },
    { id: 'accountancy', name: 'Accountancy', icon: Heart, summary: 'Manage financial aspects of environmental projects and operations.' },
    { id: 'technology', name: 'Technology', icon: Code, summary: 'Develop innovative tech solutions for environmental challenges.' },
  ], []);

  const jobs = useMemo(() => [
    {
      id: 1,
      title: 'Senior Environmental Engineer',
      department: 'consultancy',
      location: 'Bengaluru, India',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹15-25 LPA',
      skills: ['Environmental Impact Assessment', 'Waste Management', 'ISO 14001', 'Project Management'],
      description: 'Join our team in developing sustainable solutions for tomorrow. Lead environmental impact assessments and sustainability projects for major clients.',
      responsibilities: [
        'Lead environmental impact assessments for major projects',
        'Develop and implement sustainable solutions',
        'Manage client relationships and project deliverables',
        'Mentor junior engineers and team members'
      ]
    },
    {
      id: 2,
      title: 'Design Engineer',
      department: 'projects',
      location: 'Bengaluru, India',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-15 LPA',
      skills: ['AutoCAD', '3D Modeling', 'Environmental Systems', 'Green Building Design'],
      description: 'Design innovative environmental systems and sustainable infrastructure solutions.',
      responsibilities: [
        'Create detailed technical drawings and specifications',
        'Design environmental systems and sustainable infrastructure',
        'Collaborate with cross-functional teams',
        'Ensure compliance with environmental regulations'
      ]
    },
    {
      id: 3,
      title: 'Human Resource Generalist',
      department: 'human-resource',
      location: 'Bengaluru, India',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-10 LPA',
      skills: ['Recruitment', 'Employee Relations', 'HR Policies', 'Training & Development'],
      description: 'Drive HR initiatives and build a strong environmental talent pipeline.',
      responsibilities: [
        'Manage full-cycle recruitment process',
        'Develop and implement HR policies',
        'Handle employee relations and engagement',
        'Coordinate training and development programs'
      ]
    },
    {
      id: 4,
      title: 'Business Development Manager',
      department: 'business-development',
      location: 'Bengaluru, India',
      type: 'Full-time',
      experience: '5-8 years',
      salary: '₹12-20 LPA',
      skills: ['Sales', 'Client Relations', 'Market Analysis', 'Environmental Services'],
      description: 'Drive business growth and expand our environmental services portfolio.',
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Develop and maintain client relationships',
        'Create compelling proposals and presentations',
        'Achieve revenue targets and business goals'
      ]
    },
    {
      id: 5,
      title: 'Environmental Technology Specialist',
      department: 'technology',
      location: 'Bengaluru, India',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹10-18 LPA',
      skills: ['Environmental Monitoring', 'Data Analytics', 'IoT', 'Programming'],
      description: 'Develop and implement technology solutions for environmental monitoring and management.',
      responsibilities: [
        'Design and develop environmental monitoring systems',
        'Implement IoT solutions for data collection',
        'Analyze environmental data and create reports',
        'Maintain and upgrade technical infrastructure'
      ]
    }
  ], []);

  // Memoize filtered jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
      return matchesSearch && matchesDepartment;
    });
  }, [jobs, searchTerm, selectedDepartment]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    setTimeout(() => setIsLoading(false), 1000);

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Simplified animation variants
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <motion.div 
          className="hero-content"
          {...fadeIn}
          transition={{ duration: 0.4 }}
        >
          <h1>Shape the Future of Environmental Engineering</h1>
          <p>Join our mission to create sustainable solutions for tomorrow</p>
          
          <div className="hero-stats">
            {[
              { number: "5+", label: "Years of Excellence" },
              { number: "50+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Department Overview */}
      <section className="departments-overview">
        <div className="section-header">
          <h2>Our Departments</h2>
          <p>Explore opportunities across our specialized teams</p>
        </div>

        <div className="departments-grid">
          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              className={`department-card ${selectedDepartment === dept.id ? 'active' : ''}`}
              {...fadeIn}
              onClick={() => setSelectedDepartment(dept.id)}
            >
              <div className="dept-icon">
                <dept.icon size={24} />
              </div>
              <h3>{dept.name}</h3>
              <p>{dept.summary}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Search and Jobs Section */}
      <section className="jobs-section">
        <div className="jobs-header">
          <h2>Open Positions</h2>
          <p>Join our team and make a difference</p>
          
          <div className="search-filters">
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search by job title, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="filter-options">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="department-select"
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="jobs-container">
          {filteredJobs.length === 0 ? (
            <div className="no-results">
              <h3>No matching jobs found</h3>
              <p>Try adjusting your search criteria or browse all departments</p>
              <button 
                className="reset-search"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                }}
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="jobs-list">
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className="job-card"
                  {...fadeIn}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="job-card-content">
                    <div className="job-card-main">
                      <div className="job-title-section">
                        <h3>{job.title}</h3>
                        <span className="job-type">{job.type}</span>
                      </div>
                      <div className="job-meta">
                        <div className="info-item">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="info-item">
                          <DollarSign size={16} />
                          <span>{job.salary}</span>
                        </div>
                        <div className="info-item">
                          <Clock size={16} />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <div className="job-skills">
                        {job.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 3 && (
                          <span className="skill-tag more">
                            +{job.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="job-card-action">
                      <button className="view-details">
                        View Role
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Job Details Modal */}
      <Suspense fallback={<LoadingModal />}>
        {selectedJob && (
          <JobModal
            job={selectedJob}
            departments={departments}
            onClose={() => setSelectedJob(null)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default CareersPage;