import React from "react";
import "./LogoDisplay.css";
import logo1 from "./images/logo1.svg";
import logo2 from "./images/logo2.svg";
import logo3 from "./images/logo3.svg";
import logo4 from "./images/logo4.svg";
import logo5 from "./images/logo5.svg";
import logo6 from "./images/logo6.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const LogoDisplay = () => {
  return (
    <div className="logo-container">
      {logos.map((logo, index) => (
        <img 
          key={index} 
          src={logo} 
          alt={`Logo ${index + 1}`} 
          className="logo-image" 
        />
      ))}
    </div>
  );
};

export default LogoDisplay;
