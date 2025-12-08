// src/components/Hero.jsx

import React, { memo, useState } from 'react'; // 👈 Import useState

// Icons
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Hero() {
    // 1. Define state to track if the photo is enlarged
    const [isEnlarged, setIsEnlarged] = useState(false);

    // 2. Define the click handler function
    const handlePhotoClick = () => {
        // Toggle the state (true -> false, false -> true)
        setIsEnlarged(!isEnlarged);
    };

    return (
        <section className="section hero-section" id="hero">
            <div className="hero-content-wrapper container">
                
                {/* 3. Photo container now uses a button/div for click handling 
                     and dynamically applies the 'enlarged' class based on state.
                */}
                <div 
                    className={`hero-photo-container ${isEnlarged ? 'enlarged' : ''}`}
                    onClick={handlePhotoClick} // 👈 Attach click handler
                    aria-label="Click to enlarge profile photo"
                    role="button"
                >
                    <img
                        src="/profile.jpeg"
                        alt="Mutabazi Samuel Professional Photo"
                        className="profile-photo"
                        loading="lazy"
                    />
                </div>
                
                {/* Text content container (rest of the component remains the same) */}
                <div className="hero-text-content">
                    {/* ... (rest of your text content) ... */}
                    <h1>
                        Hi — I’m <span style={{
                            background: "linear-gradient(90deg,#0ea5e9,#7c3aed)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            fontWeight: 900
                        }}>Samuel</span> 👋
                    </h1>
                    
                    <p>
                        **Software Developer** • **AI & Machine Learning Engineer** • **Cybersecurity Enthusiast**.
                        I build practical ML and CV systems and modern web apps.
                    </p>

                    {/* Dual CTAs (Call to Actions) */}
                    <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
                        <a className="btn btn-primary" href="#projects">
                            View My Work
                        </a>
                        <a className="btn btn-secondary" href="/Samuel_CV.pdf" download>
                            Download CV
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="socials" aria-hidden>
                        <a href="https://github.com/sam22mutabazi" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/mutabazi-samuel-a1358429a/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://wa.me/250780601860" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default memo(Hero);