// src/components/Projects.jsx

import React, { useState, memo } from 'react'; // 👈 IMPORT memo
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // 👈 IMPORT ICONS

// Reusing the project data structure from the previous step
const projects = [
  {
    id: 1, 
    title: "Hand Gesture Recognition for Volume Control",
    desc: "Developed a real-time system for desktop volume control using computer vision. Leverages the MediaPipe framework and Dynamic Time Warping (DTW) algorithms for accurate hand gesture detection and seamless integration with the operating system.",
    tags: ["Python", "MediaPipe", "Computer Vision", "ML", "DTW"],
    repoLink: "https://github.com/sam22mutabazi/VolumeControl-Mediapipe", // 👈 MUST BE REAL LINK
    liveLink: null // No live demo for desktop app
  },
  {
    id: 2,
    title: "Community Digital Literacy Training Dashboard",
    desc: "Engineered a data analytics dashboard using Python to track, visualize, and report on digital literacy training progress across various Rwandan communities, enabling data-driven insights for program improvement.",
    tags: ["Python", "Data Visualization", "Analytics", "Dashboards"],
    repoLink: "https://github.com/sam22mutabazi/DigitalLiteracyDashboard",
    liveLink: null
  },
  {
    id: 3,
    title: "VAPT Scanner for Rukovoditel Platform",
    desc: "Conducted Vulnerability Assessment and Penetration Testing (VAPT) across multiple Rukovoditel releases, identifying critical security flaws, misconfigurations, and developing proof-of-concept exploits for remediation.",
    tags: ["Cybersecurity", "VAPT", "Penetration Testing", "Security"],
    repoLink: "https://github.com/sam22mutabazi/Rukovoditel-VAPT", 
    liveLink: null
  },
  {
    id: 4,
    title: "Various Front-End Web Applications",
    desc: "A collection of diverse smaller projects focusing on modern and responsive user interfaces, demonstrating proficiency in core web technologies and front-end design principles.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    repoLink: "https://github.com/sam22mutabazi/Web-Applications",
    liveLink: "https://samuel.dev/web-apps-demo" // Example live demo
  },
  {
    id: 5,
    title: "React & Node.js Development Practice (Portfolio)",
    desc: "Ongoing development and exploration of full-stack principles using the MERN stack (MongoDB, Express, React, Node.js), focusing on building scalable RESTful APIs and modern single-page applications (including this portfolio).",
    tags: ["React", "Node.js", "Full Stack", "MERN"],
    repoLink: "https://github.com/sam22mutabazi/My-Portfolio",
    liveLink: null // Portfolio is the site itself!
  }
];

function Projects() {
  const [isListOpen, setIsListOpen] = useState(true); // 👈 Set to true for better UX initially
  const [openProjectId, setOpenProjectId] = useState(null);

  const toggleProjectList = () => {
    setIsListOpen(current => !current);
    if (isListOpen) {
      setOpenProjectId(null); // Close all sub-projects when the main list is hidden
    }
  };

  const toggleProjectDetails = (id) => {
    setOpenProjectId(currentId => (currentId === id ? null : id));
  };

  return (
    // 🔑 Use the generic 'section' class + a specific one
    <section id="projects" className="section projects-section">
      <div className="container">
        
        {/* 1. THE MAIN CLICKABLE HEADER */}
        <div 
          className="projects-main-header" 
          onClick={toggleProjectList}
          role="button"
          aria-expanded={isListOpen}
        >
          <h2 className="heading projects-main-title">Projects Showcase</h2>
          <span className="toggle-icon-main">{isListOpen ? '▲' : '▼'}</span>
        </div>
        
        {/* 2. THE TOGGLED CONTENT: The Entire Accordion List */}
        {isListOpen && (
          <div className="projects-list-wrapper">
            
            <div className="projects-accordion">
              {projects.map((project) => {
                const isProjectOpen = project.id === openProjectId;
                const { title, desc, tags, repoLink, liveLink } = project; // 👈 Destructuring
                
                return (
                  <div key={project.id} className="project-toggle-card">
                    
                    {/* Sub Title Clickable Header */}
                    <div 
                      className="project-toggle-header" 
                      onClick={() => toggleProjectDetails(project.id)}
                      role="button"
                      aria-expanded={isProjectOpen}
                    >
                      <h3 className="project-title">{title}</h3>
                      <span className="toggle-icon">{isProjectOpen ? '▲' : '▼'}</span>
                    </div>

                    {/* Sub Title Toggled Content */}
                    {isProjectOpen && (
                      <div className="project-toggle-content">
                        <p>{desc}</p>
                        
                        {/* 🔑 ADDED: Technology Tags */}
                        <div className="tags-container">
                          {tags.map((tag, index) => (
                            <span key={index} className="skill-pill">{tag}</span>
                          ))}
                        </div>
                        
                        {/* 🔑 ADDED: Links/CTAs */}
                        <div className="project-actions" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
                          {repoLink && (
                            <a 
                              href={repoLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn btn-primary"
                              style={{ padding: '8px 15px' }}
                            >
                              <FaGithub style={{ marginRight: '8px' }} /> View Code
                            </a>
                          )}
                          {liveLink && (
                            <a 
                              href={liveLink} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="btn btn-secondary"
                              style={{ padding: '8px 15px' }}
                            >
                              <FaExternalLinkAlt style={{ marginRight: '8px' }} /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(Projects); // 👈 EXPORT with memo