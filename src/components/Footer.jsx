// src/components/Footer.jsx

import React from 'react';
// Assuming you import icons here, e.g., import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Footer(){
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content-wrapper">
        
        {/* Social Links (Replaced by icons in a real app) */}
        <div className="footer-social-links">
            <a href="https://github.com/sam22mutabazi" target="_blank" rel="noopener noreferrer">
              {/* <FaGithub size={20} /> */} GitHub
            </a>
            <a href="https://www.linkedin.com/in/mutabazi-samuel-a1358429a/" target="_blank" rel="noopener noreferrer">
              {/* <FaLinkedinIn size={20} /> */} LinkedIn
            </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          © {year} — Mutabazi Samuel. All rights reserved.
        </div>
        
        {/* Built With Info - Styling moved to CSS */}
        <div className="footer-info">
          Built with ❤️ • React • MediaPipe • OpenCV
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;