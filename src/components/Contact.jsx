import React, { useState, memo } from 'react';
import emailjs from '@emailjs/browser'; 
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

// Your Unique EmailJS IDs
const SERVICE_ID = "service_pwthix8"; 
const TEMPLATE_ID = "template_mpdt3aw"; 

function Contact() {
    const [isOpen, setIsOpen] = useState(true);
    
    // Form States - Initialize with EmailJS variable names
    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const toggleContent = () => setIsOpen(!isOpen);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear error immediately on change
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.user_name?.trim()) formErrors.user_name = 'Name is required.';
        if (!formData.user_email) {
            formErrors.user_email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            formErrors.user_email = 'Email address is invalid.';
        }
        if (!formData.message?.trim()) formErrors.message = 'Message is required.';
        return formErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            setIsSubmitted(false); 

            try {
                // Public Key should be in main.jsx via emailjs.init("YOUR_PUBLIC_KEY")
                const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);

                if (response.status === 200) {
                    setIsSubmitted(true);
                    setFormData({ user_name: '', user_email: '', message: '' }); 
                } else {
                    alert("Message failed to send. Please check your EmailJS configuration.");
                }
            } catch (error) {
                console.error("EmailJS Error:", error);
                alert("Error: " + (error?.text || "A network error occurred. Check the console."));
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-toggle-container">
                    
                    <div 
                        className="contact-toggle-header" 
                        onClick={toggleContent}
                        role="button"
                        aria-expanded={isOpen}
                    >
                        <h2 className="heading-toggle contact-heading">Contact Me</h2>
                        <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
                    </div>

                    {isOpen && (
                        <div className="contact-toggle-content">
                            
                            {isSubmitted ? (
                                <div className="success-block">
                                    <p className="success-message">
                                        ✅ Thank you for your message! I will get back to you soon.
                                    </p>
                                    <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary">Send another message</button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <p>Want to work together or ask about a project? Send me a message — I usually reply within a day.</p>
                                    
                                    <div className={`form-group ${errors.user_name ? 'has-error' : ''}`}>
                                        <input
                                            type="text" name="user_name" placeholder="Your Name"
                                            value={formData.user_name} onChange={handleChange}
                                            className="form-control" required
                                        />
                                        {errors.user_name && <p className="error-message">{errors.user_name}</p>}
                                    </div>

                                    <div className={`form-group ${errors.user_email ? 'has-error' : ''}`}>
                                        <input
                                            type="email" name="user_email" placeholder="Your Email"
                                            value={formData.user_email} onChange={handleChange}
                                            className="form-control" required
                                        />
                                        {errors.user_email && <p className="error-message">{errors.user_email}</p>}
                                    </div>

                                    <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                                        <textarea
                                            name="message" placeholder="Your Message" rows="5"
                                            value={formData.message} onChange={handleChange}
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

                            <div className="contact-details-group">
                                <p className="contact-info">
                                    <FaEnvelope style={{ marginRight: '10px' }} /> **Email:** samumutabazi@gmail.com
                                    <br /><br />
                                    <span style={{ marginLeft: '24px' }}>**Location:** Kigali, Rwanda</span>
                                </p>

                                <div className="social-links contact-socials">
                                    <a href="https://github.com/sam22mutabazi" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/mutabazi-samuel-a1358429a/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn size={24} />
                                    </a>
                                    <a href="https://wa.me/250780601860" target="_blank" rel="noopener noreferrer">
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