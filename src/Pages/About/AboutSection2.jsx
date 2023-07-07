import React from 'react';
import './AboutSection2.css';
import data from '../../JSONDATA/data.json'

const AboutSection2 = () => {
    const { our_story } = data;
    
    return (
        <div className="about-section-2">
        <div className="our-story">
          <h1>Our Story</h1>
          <p className="bold-text">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="right-side">
          {our_story.map((item, index) => (
            <div className="item" key={index}>
              <span className="number">{item.number}</span>
              <div className="item-content">
                <h3>{item.content}</h3>
                <p>{item.subcontent}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default AboutSection2;
