import React, { useState, memo } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  // --- COMPLETED PROJECTS ---
  {
    id: 1,
    title: "Rwanda Insight Dashboard",
    desc: "A comprehensive data analytics platform providing visual insights into Rwanda's key sectors. Features interactive charts and data mapping.",
    tags: ["Data Viz", "React", "Python", "Analytics"],
    repoLink: "https://github.com/sam22mutabazi/Rwanda_insight_dashboard",
    liveLink: "https://rwandainsightdashboard-bakqlcmcnrxdkaqfwjryeq.streamlit.app/",
    status: "completed"
  },
  {
    id: 2,
    title: "Simple E-commerce",
    desc: "(MERN)A fully functional front-end e-commerce store with product filtering, shopping cart functionality, and responsive design.",
    tags: ["React", "Vite", "E-commerce", "Tailwind"],
    repoLink: "https://github.com/sam22mutabazi/simple-e-commerce",
    liveLink: "https://simple-e-commerce-muta.vercel.app/",
    status: "completed"
  },
  {
    id: 3,
    title: "Community Digital Literacy Training Dashboard",
    desc: "Engineered a data analytics dashboard using Python to track and visualize digital literacy progress across Rwandan communities.",
    tags: ["Python", "Data Visualization", "Analytics"],
    repoLink: "https://github.com/sam22mutabazi/Remera_dashboard-",
    liveLink: "https://muawzzpaxzhhm6rna8qkyw.streamlit.app/",
    status: "completed"
  },
  // --- ONGOING PROJECTS ---
  {
    id: 4,
    title: "Hand Gesture & Voice Recognition Control",
    desc: "Advanced system combining hand gesture tracking and voice command recognition for seamless touchless computer interaction.",
    tags: ["Python", "MediaPipe", "Computer Vision", "Voice AI"],
    repoLink: "https://github.com/sam22mutabazi/Hand-Gesture-Voice-Control",
    liveLink: null,
    status: "ongoing"
  },
  {
    id: 5,
    title: "MERN Stack Portfolio Development",
    desc: "Ongoing development of this portfolio and exploration of scalable RESTful APIs using Node.js and MongoDB.",
    tags: ["React", "Node.js", "Full Stack", "MERN"],
    repoLink: "https://github.com/sam22mutabazi/sam-portifolio-website",
    liveLink: "https://sam-portifolio-website-yt48.vercel.app/",
    status: "ongoing"
  }
];

function Projects() {
  const [isListOpen, setIsListOpen] = useState(true);
  const [openProjectId, setOpenProjectId] = useState(null);

  const toggleProjectList = () => setIsListOpen(!isListOpen);
  const toggleProjectDetails = (id) => setOpenProjectId(openProjectId === id ? null : id);

  // Filter projects by status
  const completedProjects = projects.filter(p => p.status === "completed");
  const ongoingProjects = projects.filter(p => p.status === "ongoing");

  const renderProjectCard = (project) => {
    const isProjectOpen = project.id === openProjectId;
    return (
      <div key={project.id} className="project-toggle-card">
        <div 
          className="project-toggle-header" 
          onClick={() => toggleProjectDetails(project.id)}
          role="button"
        >
          <h3 className="project-title">
            {project.title}
            <span className={`status-badge status-${project.status}`}>
              {project.status === 'completed' ? 'Done' : 'In Progress'}
            </span>
          </h3>
          <span className="toggle-icon">{isProjectOpen ? '▲' : '▼'}</span>
        </div>

        {isProjectOpen && (
          <div className="project-toggle-content">
            <p>{project.desc}</p>
            <div className="tags-container">
              {project.tags.map((tag, index) => (
                <span key={index} className="skill-pill">{tag}</span>
              ))}
            </div>
            <div className="project-actions" style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 15px' }}>
                <FaGithub style={{ marginRight: '8px' }} /> View Code
              </a>
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '8px 15px' }}>
                  <FaExternalLinkAlt style={{ marginRight: '8px' }} /> Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-main-header" onClick={toggleProjectList} role="button">
          <h2 className="heading projects-main-title">Projects Showcase</h2>
          <span className="toggle-icon-main">{isListOpen ? '▲' : '▼'}</span>
        </div>
        
        {isListOpen && (
          <div className="projects-list-wrapper">
            {/* Completed Sector */}
            <h3 className="project-category-title">✅ Completed Projects</h3>
            <div className="projects-accordion">
              {completedProjects.map(renderProjectCard)}
            </div>

            {/* Ongoing Sector */}
            <h3 className="project-category-title" style={{ marginTop: '40px' }}>🚀 Ongoing Projects</h3>
            <div className="projects-accordion">
              {ongoingProjects.map(renderProjectCard)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(Projects);