import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="bg-light pt-5 footer-container">
      {/* Responsive Newsletter Section */}
      <div className="newsletter-section">
        <Container>
          <Row className="d-flex align-items-center justify-content-between text-center text-md-start">
            <Col md={8} className="mb-3 mb-md-0">
              <h2 className="newsletter-heading">
                Sign up to our newsletter <br /> & get 20% off
              </h2>
            </Col>
            <Col md={4} className="text-center text-md-end">
              <Button className="newsletter-btn">SIGN UP FOR FREE</Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Content */}
      <Container className="py-5">
        <Row className="text-center text-md-start align-items-start">
          {/* Brand Info */}
          <Col md={4} className="mb-4 footer-brand">
            <h5 className="fw-bold">SERRENA</h5>
            <p>Your trusted <br /> fashion companion</p>
          </Col>

          {/* Navigation */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">NAVIGATION</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="footer-link">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Shop</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">About</a>
              </li>
              <li>
                <a href="#" className="footer-link">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Categories */}
          <Col md={2} className="mb-4">
            <h5 className="fw-bold">CATEGORIES</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="footer-link">Men</a>
              </li>
              <li className="mb-2">
                <a href="#" className="footer-link">Women</a>
              </li>
              <li>
                <a href="#" className="footer-link">Kids</a>
              </li>
            </ul>
          </Col>

          {/* Social Media Icons */}
          <Col md={2} className="d-flex justify-content-center justify-content-md-start align-items-center">
            <div className="d-flex gap-3">
              <a href="#" className="footer-link">
                <FaFacebook size={24} className="social-icon" />
              </a>
              <a href="#" className="footer-link">
                <FaInstagram size={24} className="social-icon" />
              </a>
              <a href="#" className="footer-link">
                <FaTwitter size={24} className="social-icon" />
              </a>
              <a href="#" className="footer-link">
                <FaEnvelope size={24} className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <p className="text-center mt-4 copyright">
          All Rights Reserved By @Cosmic Studio
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
