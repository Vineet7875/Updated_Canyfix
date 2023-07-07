import React from 'react';
import "../Home/Section4.css"
import data from '../../JSONDATA/data.json'

const Section4 = () => {
  const { why_people_trust_us } = data;

  return (
    <div className="section4">
      <div className="section4-content">
        <div className="trust-info">
          <div className="trust-header">Why People Trust Us</div>
          <div className="trust-details">
            {why_people_trust_us.map((trustItem, index) => (
              <div className="trust-item" key={index}>
                <img src="blue_star.jpg" alt="blue_star" />
                <div className="head-para">
                  <h3 className="trust-subheader">{trustItem.content}</h3>
                  <p className="trust-description">{trustItem.subcontent}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img className="trust-image" src="leftimg1.png" alt="Trust" />
      </div>
    </div>
  );
};

export default Section4;
