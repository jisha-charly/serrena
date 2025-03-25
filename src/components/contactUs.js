import React, { useState } from 'react';
import './ContactUs.css'; // Ensure the CSS is updated
import Footer from './Footer';
import NavBar1 from './NavBar1';
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [openFaq, setOpenFaq] = useState(null);  // Tracks which FAQ is open

  const faqData = [
    {
      question: "How often do you introduce new collections?",
      answer: "We regularly refresh our collections to keep up with the latest trends and deliver a diverse range of styles."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping with reliable courier services."
    },
    {
      question: "Are gift cards available?",
      answer: "Yes, we offer digital and physical gift cards for your convenience."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);  // Toggle the open state
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <NavBar1 />
      <div className="contact-container">
        <div className="contact-header">
          <h1>CONTACT US</h1>
          <p>
            <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>{' > '} 
            <span>Contact Us</span>
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Need any help? <br /> We're here for you.</h2>
            <div className="info-section">
              <h3>CALL US</h3>
              <p>+96746737637</p>
              <p>+96746737637</p>
            </div>
            <div className="info-section">
              <h3>MAIL</h3>
              <p>hello@serrena.com</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-header" onClick={() => toggleFaq(index)}>
                <div className="faq-question">{item.question}</div>
                <button className="faq-toggle-btn">
                  {openFaq === index ? '-' : '+'}
                </button>
              </div>
              {openFaq === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
