import React from "react";
import "./HeroSection.css";
import videoBg from "./images/ved.mp4"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="title">Serrena Exclusive Deal</h1>
        <p className="description">
          Discover the epitome of style with Serrena Exclusives. Elevate your wardrobe with premium brands, 
          where luxury meets fashion. Immerse yourself in a world of unparalleled elegance. Explore now!
        </p>
        <a href="#" className="shop-link">Visit Shop </a>
      </div>
    </div>
  );
};

export default HeroSection;
