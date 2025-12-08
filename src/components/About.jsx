// src/components/About.jsx

import AboutToggle from './AboutToggle'; // Import the new component

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Render the new toggle component */}
        <AboutToggle /> 
      </div>
    </section>
  );
}

export default About;