import React, { useState, memo } from 'react';

const skillData = [
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
  // Master toggle for the entire section
  const [isListOpen, setIsListOpen] = useState(true); 
  
  // Controls which specific category is expanded
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const toggleSkillList = () => {
    setIsListOpen(!isListOpen);
    if (isListOpen) setOpenCategoryId(null);
  };

  const toggleCategory = (id) => {
    setOpenCategoryId(currentId => (currentId === id ? null : id));
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        {/* 1. MASTER HEADER */}
        <div 
          className="skills-main-header" 
          onClick={toggleSkillList}
          role="button"
          aria-expanded={isListOpen}
        >
          <h2 className="heading skills-main-title">Technical Skills</h2> 
          <span className="toggle-icon-main">{isListOpen ? '▲' : '▼'}</span>
        </div>
        
        {/* 2. ACCORDION LIST */}
        {isListOpen && (
          <div className="skills-list-wrapper">
            <div className="skills-accordion">
              {skillData.map((item) => {
                const isOpen = item.id === openCategoryId;
                
                return (
                  <div key={item.id} className="skill-toggle-card">
                    
                    {/* Category Title Header */}
                    <div 
                      className="skill-toggle-header" 
                      onClick={() => toggleCategory(item.id)}
                      role="button"
                      aria-expanded={isOpen}
                    >
                      <h3 className="category-title">{item.category}</h3>
                      <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
                    </div>

                    {/* Skill Pills Content */}
                    {isOpen && (
                      <div className="skill-toggle-content">
                        <div className="tags-container">
                          {item.skills.map((skill, index) => (
                            <span key={index} className="skill-pill">
                              {skill}
                            </span>
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

export default memo(Skills);