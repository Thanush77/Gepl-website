import { useState, useEffect } from 'react';
import { Briefcase, Leaf, Globe, Users, ChevronRight, Search, Heart, Code, BookOpen, Building } from 'lucide-react';
import '../styles/CareersPage.css';

const CareersPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const departments = [
    { id: 'Projects', name: 'Projects', icon: Leaf },
    { id: 'Consultancy', name: 'Consultancy', icon: Briefcase },
    { id: 'Bunisess Development', name: 'Business Development', icon: Globe },
    { id: 'Human Resource', name: 'Human Resource', icon: Users },
    { id: 'Accountacy', name: 'Accountancy', icon: Heart },
    { id: 'technology', name: 'Technology', icon: Code },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Environmental Engineer',
      department: 'Consultancy',
      location: 'Bengaluru, India',
      type: 'Full-time',
      description: 'Join our team in developing sustainable solutions for tomorrow.',
    },
    {
      id: 2,
      title: 'Design Engineer',
      department: 'Projects',
      location: 'Bengaluru,India',
      type: 'Full-time',
      description: 'Help organizations implement eco-friendly practices.',
      
    },
    {
      id: 3,
      title: 'Human Resource Generalist',
      department: 'Human Resource',
      location: 'Bengaluru,India',
      type: 'Full-time',
      description: 'Analyze climate data to drive environmental decisions.',
      
    },
    {
      id: 4,
      title: 'Business Development Manager',
      department: 'Business Development',
      location: 'Bengaluru,India',
      type: 'Full-time',
      description: 'Oversee sustainable operations and facility management.',
      
    },
    {
      id: 5,
      title: 'Healthcare Sustainability Specialist',
      department: 'healthcare',
      location: 'Bengaluru,India',
      type: 'Full-time',
      description: 'Implement sustainable practices in healthcare facilities.',
      
    },
    {
      id: 6,
      title: 'Green Technology Developer',
      department: 'technology',
      location: 'Bengaluru,India',
      type: 'Full-time',
      description: 'Develop innovative green technology solutions.',
      
    },
    {
      id: 7,
      title: 'Environmental Education Coordinator',
      department: 'Consultancy',
      location: 'PBengaluru,India',
      type: 'Full-time',
      description: 'Create and implement environmental education programs.',
      
    },
    {
      id: 8,
      title: 'Project Manager',
      department: 'Consultancy',
      location: 'Bengaluru,India',
      type: 'Full-time',
      description: 'Manage and optimize sustainable building operations.',
      
    }
  ];

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

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-container">
          <h1 className="hero-title fade-in">
            Join Our Mission for a Sustainable Future
          </h1>
          <p className="hero-description slide-up">
            Be part of a team dedicated to creating innovative environmental solutions
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section glass-effect">
  <div className="search-container">
    <div className="search-filter-wrapper">
      <div className="search-input-group">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search positions..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search job positions"
        />
        {searchTerm && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={() => setSearchTerm('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      <div className="department-select-wrapper">
        <select
          className="department-select"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          aria-label="Filter by department"
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
</section>

      {/* Departments Section */}
      <section id="departments" className="departments-section">
  <div className="departments-container">
    <h2 className="text-gradient departments-title">Our Departments</h2>
    <p className="departments-description">
      Explore opportunities in our various departments and find the perfect role for you.
    </p>
    <div className="departments-grid">
      {departments.map((dept) => (
        <div key={dept.id} className="department-card">
          <div className="icon-wrapper">
            <dept.icon className="department-icon" />
          </div>
          <h3 className="department-name">{dept.name}</h3>
          <p className="department-summary">
            {dept.summary || "Learn more about our amazing team and what they do."}
          </p>
          <button
            onClick={() => setSelectedDepartment(dept.id)}
            className="view-openings-btn"
          >
            View Openings
            <ChevronRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


     {/* Job Listings Section */}
<section id="openings" className="openings-section">
  <div className="openings-container">
    <h2 className="text-gradient openings-title">Current Openings</h2>
    <p className="openings-description">
      Explore our latest job openings and take the next step in your career.
    </p>
    <div className="openings-grid">
      {isLoading ? (
        Array(6)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="skeleton h-40 rounded-xl" />
          ))
      ) : (
        filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-card-content">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-info">
                <span className="job-location">{job.location}</span>
                <span className="job-type">{job.type}</span>
              </div>
              <p className="job-description">
                {job.description.length > 100
                  ? `${job.description.slice(0, 100)}...`
                  : job.description}
              </p>
              <p className="job-salary">{job.salary}</p>
              <button className="apply-button">
                Apply Now
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
</section>


      {/* Values Section */}
{/* <section id="values" className="values-section">
  <div className="values-container">
    <h2 className="text-gradient values-title">Our Values</h2>
    <p className="values-description">
      Guided by our principles, we aim to inspire positive change and create a sustainable future.
    </p>
    <div className="values-grid">
      {[
        {
          icon: Leaf,
          title: "Sustainability",
          description: "Creating a sustainable future for generations to come.",
        },
        {
          icon: Users,
          title: "Collaboration",
          description: "Working together to solve environmental challenges.",
        },
        {
          icon: Globe,
          title: "Global Impact",
          description: "Making a difference on a global scale through local action.",
        },
      ].map((value, index) => (
        <div key={index} className="value-card">
          <div className="icon-wrapper">
            <value.icon className="value-icon" />
          </div>
          <h3 className="value-title">{value.title}</h3>
          <p className="value-description">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
</section> */}

    </div>
  );
};

export default CareersPage;