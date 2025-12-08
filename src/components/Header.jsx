// src/components/Header.jsx

import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; 

function Header({ currentTheme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  // 1. 🔑 FIX: Rename 'Hero' to 'Home' and target the correct lowercase ID #hero
  const navLinks = [
    { name: "Home", href: "#hero" }, // 👈 CORRECTED NAME AND TARGET ID
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="main-header">
      {/* 2. 🔑 FIX: Change <a> tag to <span> for non-clickable text */}
      <span className="portfolio-name"> 
        MUTABAZI SAMUEL
      </span>

      {/* Navigation Links */}
      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.name} href={link.href} onClick={handleLinkClick}>
            {link.name}
          </a>
        ))}
        {/* Theme Toggle Button... */}
        <button 
          className="theme-toggle-btn" 
          onClick={() => { toggleTheme(); handleLinkClick(); }}
          aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="menu-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </header>
  );
}

export default Header;