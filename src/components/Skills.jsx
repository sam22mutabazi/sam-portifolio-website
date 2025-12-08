// src/components/Skills.jsx

import React, { useState } from 'react';

const skillData = [
  // ... (skillData array remains the same) ...
  {
    id: 1, 
    category: "Front-end & Full-stack Development",
    skills: ["React", "JavaScript (ES6+)", "Node.js", "Express.js", "HTML5", "CSS3 / Tailwind CSS", "RESTful APIs"]
  },
  {
    id: 2,
    category: "AI, Data Science & Machine Learning",
    skills: ["Python", "Data Analysis", "Data Visualization", "Dashboard Design", "TensorFlow", "PyTorch", "MediaPipe", "OpenCV", "Scikit-learn", "Computer Vision"]
  },
  {
    id: 3,
    category: "Cybersecurity & Tools",
    skills: ["VAPT (Vulnerability Assessment)", "Penetration Testing", "Burp Suite", "SQL Injection", "Git/GitHub", "Linux/Bash"]
  },
  {
    id: 4,
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Firebase"]
  }
];

function Skills() {
  // State 1: Controls the visibility of the entire skill category list (the master toggle)
  const [isListOpen, setIsListOpen] = useState(false); 
  
  // State 2: Controls the visibility of the individual skill category content (the sub-toggle)
  const [openCategoryId, setOpenCategoryId] = useState(null);

  // Function for the Main Title click
  const toggleSkillList = () => {
    setIsListOpen(!isListOpen);
    // Optionally, close all individual categories when the main list closes
    if (isListOpen) {
      setOpenCategoryId(null);
    }
  };

  // Function for the Sub Title click (inside the list)
  const toggleCategory = (id) => {
    setOpenCategoryId(currentId => (currentId === id ? null : id));
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        
        {/* 1. THE MAIN CLICKABLE HEADER */}
        <div 
          className="skills-main-header" 
          onClick={toggleSkillList}
          role="button"
          aria-expanded={isListOpen}
        >
          {/* Use the new styling class for the desired appearance */}
          <h2 className="heading skills-main-title">Technical Skills</h2> 
          <span className="toggle-icon-main">{isListOpen ? '▲' : '▼'}</span>
        </div>
        
        {/* 2. THE TOGGLED CONTENT: The Entire Accordion List */}
        {isListOpen && (
          <div className="skills-list-wrapper">
            
            <div className="skills-accordion">
              {skillData.map((item) => {
                const isOpen = item.id === openCategoryId;
                
                return (
                  <div key={item.id} className="skill-toggle-card">
                    
                    {/* Sub Title Clickable Header (Category Name) */}
                    <div 
                      className="skill-toggle-header" 
                      onClick={() => toggleCategory(item.id)}
                      role="button"
                      aria-expanded={isOpen}
                    >
                      <h3 className="category-title">{item.category}</h3>
                      <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
                    </div>

                    {/* Sub Title Toggled Content (Skill Pills) */}
                    {isOpen && (
                      <div className="skill-toggle-content">
                        <div className="tags-container">
                          {item.skills.map((skill, index) => (
                            <span key={index} className="skill-pill">{skill}</span>
                          ))}
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

export default Skills;