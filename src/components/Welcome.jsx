// src/components/Welcome.jsx

import React, { memo } from 'react';
import { FaLaptopCode } from 'react-icons/fa';

function Welcome() {
  return (
    <section id="welcome" className="section welcome-section">
      <div className="container">
        {/* ... existing content ... */}
        <FaLaptopCode size={80} className="welcome-icon" />
        
        <h1 className="welcome-heading">
          Welcome to the Future of Code.
        </h1>
        
        <p className="welcome-text">
          I craft fast, modern, and intelligent web applications using React, MediaPipe, and OpenCV.
          Explore my world where **Innovation meets Impact**.
        </p>
        
        {/* CTA updated to guide user to the next section: Hero */}
        <a href="#hero" className="btn btn-primary welcome-cta">
          Get Started ↓ {/* Renamed for better flow */}
        </a>
      </div>
    </section>
  );
}

export default memo(Welcome);