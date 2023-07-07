import React from 'react';
import "../Home/Section3.css"
import data from '../../JSONDATA/data.json'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EventIcon from '@material-ui/icons/Event';
import HeadsetIcon from '@material-ui/icons/Headset';
import TagIcon from '@material-ui/icons/LocalOffer';

const Section3 = () => {
  const { why_repairing_company } = data;
  const getIconComponent = (iconName) => {
    const iconComponents = {
      VerifiedUserIcon,
      CheckCircleIcon,
      EventIcon,
      HeadsetIcon,
      TagIcon
    };
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent className="section3-container-icon" style={{ color: 'gray', fontSize: '2rem' }} /> : null;
  };

  return (
    <div className="section3-container">
      <div className="section3-container-header">Why Repairing Company</div>
      <div className="content">
        <div className="section3-container-left">
          <img src="leftimg1.png" alt="Left Image" />
        </div>
        <div className="section3-container-right">
          <div className="info">
            {why_repairing_company.map((item) => (
              <div className="services" key={item.content}>
                <div className="services_circle">
                  {getIconComponent(item.icon)}
                </div>
                <div className='text-more-now'>
                  <div className="text">{item.content}</div>
                  <div className='more-now'>
                    <div className="learn-more">{item.subcontent}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

