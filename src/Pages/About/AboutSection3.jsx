import React from 'react';
import './AboutSection3.css';
import data from '../../JSONDATA/data.json'
const AboutSection3 = () => {
  const { milestone } = data;

  return (
    <div className="about-section-3">
      <div className="left-side">
        <h2>Our Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="milestones">
          {milestone.map((milestone, index) => (
            <div className="milestone" key={index}>
              <p className="percentage">{milestone.content}</p>
              <p className="milestone-label">{milestone.subcontent}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="right-side">
        <div className="box">
          <img src="carry2.jpeg" alt="Carry Image" className="left-img" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
