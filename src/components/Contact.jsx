// src/components/Contact.jsx

import React, { useState, memo } from 'react';
import emailjs from '@emailjs/browser'; // 👈 Import the EmailJS library
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

// 🚨 Define your unique EmailJS IDs here
const SERVICE_ID = "service_pwthix8"; 
const TEMPLATE_ID = "template_mpdt3aw"; 
// Note: PUBLIC_KEY is now initialized globally in main.jsx

function Contact() {
    const [isOpen, setIsOpen] = useState(true);
    
    // Form States
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Use the correct placeholder names for EmailJS variables
        const newName = name === 'name' ? 'user_name' : 
                        name === 'email' ? 'user_email' : name;

        setFormData(prev => ({ ...prev, [newName]: value }));
        
        // Clear error immediately on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        let formErrors = {};
        // Use the original input names for validation purposes
        if (!formData.user_name || !formData.user_name.trim()) formErrors.name = 'Name is required.';
        if (!formData.user_email) {
            formErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            formErrors.email = 'Email address is invalid.';
        }
        if (!formData.message || !formData.message.trim()) formErrors.message = 'Message is required.';
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Temporarily adjust form data keys for validation check (using original names)
        const validationFormData = {
            name: formData.user_name,
            email: formData.user_email,
            message: formData.message
        };
        
        // Validate against the original input names
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            setIsSubmitted(false); 

            try {
                // 🔑 Use emailjs.send() with the data object
                // The Public Key is omitted because it's initialized in main.jsx
                const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);

                if (response.status === 200) {
                    setIsSubmitted(true);
                    // Clear form data using the correct keys
                    setFormData({ user_name: '', user_email: '', message: '' }); 
                } else {
                    alert("Message failed to send. Please ensure EmailJS service is authenticated.");
                }
            } catch (error) {
                // Log the network error to the console
                console.error("EmailJS Error:", error);
                alert("A network or configuration error occurred. Please check the console.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                
                <div className="contact-toggle-container">
                    
                    {/* The Clickable Header */}
                    <div 
                        className="contact-toggle-header" 
                        onClick={toggleContent}
                        role="button"
                        aria-expanded={isOpen}
                    >
                        <h2 className="heading-toggle contact-heading">Contact Me</h2>
                        <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
                    </div>

                    {/* The Content Area: Conditional rendering */}
                    {isOpen && (
                        <div className="contact-toggle-content">
                            
                            {/* The success message block */}
                            {isSubmitted ? (
                                <p className="success-message">
                                    ✅ Thank you for your message! I will get back to you soon.
                                </p>
                            ) : (
                                // CRITICAL: The names in the state management must match the template variables
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <p>Want to work together or ask about a project? Send me a message — I usually reply within a day.</p>
                                    
                                    {/* Name Input - Changed name="name" to name="user_name" for EmailJS match */}
                                    <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                                        <input
                                            type="text" name="user_name" placeholder="Your Name"
                                            value={formData.user_name || ''} onChange={handleChange}
                                            className="form-control" required
                                        />
                                        {errors.name && <p className="error-message">{errors.name}</p>}
                                    </div>

                                    {/* Email Input - Changed name="email" to name="user_email" for EmailJS match */}
                                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                                        <input
                                            type="email" name="user_email" placeholder="Your Email"
                                            value={formData.user_email || ''} onChange={handleChange}
                                            className="form-control" required
                                        />
                                        {errors.email && <p className="error-message">{errors.email}</p>}
                                    </div>

                                    {/* Message Textarea */}
                                    <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                                        <textarea
                                            name="message" placeholder="Your Message" rows="5"
                                            value={formData.message || ''} onChange={handleChange}
                                            className="form-control" required
                                        ></textarea>
                                        {errors.message && <p className="error-message">{errors.message}</p>}
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn btn-primary"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}

                            {/* Static Contact Links and Details */}
                            <div className="contact-details-group">
                                <p className="contact-info">
                                    <FaEnvelope style={{ marginRight: '10px' }} /> **Email:** samumutabazi@gmail.com
                                    <br />
                                    <br />
                                    <span style={{ marginLeft: '24px' }}>**Location:** Kigali, Rwanda</span>
                                </p>

                                <div className="social-links contact-socials">
                                    <a href="https://github.com/sam22mutabazi" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mutabazi-samuel-a1358429a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                        <FaLinkedinIn size={24} />
                                    </a>
                                    <a href="https://wa.me/250780601860" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat">
                                        <FaWhatsapp size={24} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default memo(Contact);