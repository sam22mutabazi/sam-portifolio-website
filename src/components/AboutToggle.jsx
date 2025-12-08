// src/components/AboutToggle.jsx

import React, { useState } from 'react';

function AboutToggle() {
  // State to track whether the content is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about-toggle-container">
      
      {/* The Clickable Header */}
      <div 
        className="about-toggle-header" 
        onClick={toggleContent}
        role="button"
        aria-expanded={isOpen}
      >
        <h2 className="heading-toggle">About Me</h2>
        {/* Simple visual indicator: chevron down or up */}
        <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* The Content Area: Conditional rendering */}
      {isOpen && (
        <div className="about-toggle-content">
          {/* Enhanced Content Accuracy and Professionalism */}
          
          <p>
            I'm **Mutabazi Samuel**, a dynamic Software Engineer and Machine Learning enthusiast based in **Kigali, Rwanda**. My expertise is focused on the convergence of robust web development and practical AI/ML applications, particularly within the domains of computer vision and cybersecurity.
          </p>

          <p>
            I specialize in developing and deploying impactful solutions—from **real-time computer vision systems (MediaPipe, OpenCV)** and **Python-based data analytics dashboards** to conducting **Vulnerability Assessment and Penetration Testing (VAPT)** on modern web applications.
          </p>
          
          <p>
            My goal is to translate complex technical challenges into secure, scalable, and user-centric software products, utilizing the **MERN stack, Python, and modern DevOps practices**.
          </p>
          
          {/* Key Experience Stats */}
          <div className="about-stats-toggle">
            <h3>Key Expertise & Achievements</h3>
            <ul>
                <li>3+ Years focused on Python, ML/AI, and Data Analytics.</li>
                <li>Proven capability in full-stack development using the React/Node.js ecosystem.</li>
                <li>Direct experience in cybersecurity (VAPT) and securing web platforms.</li>
                <li>Successfully engineered and deployed two major computer vision projects.</li>
            </ul>
          </div>
          
        </div>
      )}
      
    </div>
  );
}

export default AboutToggle;