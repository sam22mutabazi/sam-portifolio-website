// src/App.jsx

import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from "./components/Header";
import Welcome from "./components/Welcome"; // <-- NEW IMPORT
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'; 

// Lazy Load large, non-critical sections:
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app ${theme}`}>
      <Header currentTheme={theme} toggleTheme={toggleTheme} /> 
      
      <main>
        {/* 1. THE NEW WELCOME PAGE (First view) */}
        <Welcome /> 
        
        {/* 2. THE REST OF THE CRITICAL CONTENT */}
        <Hero id="hero" /> {/* Ensure your Hero component has an ID now */}
        <About />
        
        {/* Non-critical content loads only when needed/available */}
        <Suspense fallback={<div style={{textAlign: 'center', padding: '100px'}}>Loading portfolio sections...</div>}>
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}