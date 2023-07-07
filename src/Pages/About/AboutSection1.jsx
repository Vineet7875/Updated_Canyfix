import React from 'react';
import './AboutSection1.css';

const AboutSection1 = () => {
  return (
    <div className="about-section-1">
      <h1>We're changing the whole game.</h1>
      <div className="button-container">
        <button className="black-button">Get Started</button>
        <button className="white-button">View Pricing</button>
      </div>
      <img src="carry1.jpeg" alt="Carry Image" className="left-img" />
    </div>
  );
};

export default AboutSection1;
