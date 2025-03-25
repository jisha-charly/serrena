import React, { useState, useEffect } from "react";
import "./About.css"; 
import { FaInstagram } from "react-icons/fa";
import img from "./images/hero3.jpg"
import { Link } from "react-router-dom";
import NavBar1 from "./NavBar1";
import Footer from "./Footer";
const About = () => {
  const [images, setImages] = useState([]);

  // Fetch images from Unsplash API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=4&query=fashion&client_id=J_c8qIqhpgz15c-MK0nO-RTzw25PNJjnDN_PLrVVlIs`
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
  <NavBar1/>
    <div className="about-us mt-5">
    <h1 className="text-center fw-bold">ABOUT US</h1>
        <nav className="breadcrumb justify-content-center">
          <p><Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>{' > '} <span>About Us</span></p>
        </nav>
      {/* Hero Section */}
      <section className="hero">
        <img  src={img}alt="Hero" />
      </section>

      {/* Features Section */}
      <section className="features">
        {[
          { title: "SHOP ONLINE", desc: "Explore a vast collection of premium clothing from the comfort of your home." },
          { title: "FREE SHIPPING", desc: "Enjoy the convenience of free shipping on all orders, nationwide." },
          { title: "RETURN POLICY", desc: "Return any product you are not satisfied with." },
          { title: "PAYMENT METHODS", desc: "Choose from a variety of secure payment methods." }
        ].map((feature, index) => (
          <div className="feature" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="about text-center">
        <p>
          At the heart of <strong>Serrena</strong> lies a distinctive philosophy that transcends trends and embraces the
          essence of enduring style. Our collections are a harmonious blend of sophistication, versatility, and modernity,
          carefully curated to enhance your personal expression. We believe that fashion should empower, inspire, and reflect the unique narrative of every individual. Serrena is not just about clothing; it's about embracing a lifestyle that embraces the artistry of fashion and the poetry of self-expression.
        </p>
      </section>

      {/* Follow Us Section */}
      <section className="follow-us">
        <h2>FOLLOW @SERRENA</h2>
        <div className="gallery">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div className="image" key={index}>
                <img src={image.urls.regular} alt={image.alt_description} />
                <FaInstagram className="icon" />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
};

export default About;
