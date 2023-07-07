import React from 'react';
import TagIcon from '@material-ui/icons/LocalOffer';
import ShippingTruckIcon from '@material-ui/icons/LocalShipping';
import BuildInHandIcon from '@material-ui/icons/Build';
import data from '../../JSONDATA/data.json'
import "../Home/Section2.css"

const Section2 = () => {
  const { repair_gadget_in3steps } = data;
  const getIconComponent = (iconName) => {
    const iconComponents = {
      TagIcon,
      ShippingTruckIcon,
      BuildInHandIcon,
    };
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent style={{ color: 'var(--main-color)', fontSize: '4rem' }} /> : null;
  };

  return (
    <div className="section2">
      <h2>Repair Your Gadget in 3 Steps</h2>
      <p>Book a free pickup from your home or work at a time slot as per your convenience.</p>
      <div className="circle-container">
        {repair_gadget_in3steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="circle">
              {getIconComponent(step.icon)}
            </div>
            {index < repair_gadget_in3steps.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
      <div className="header1-container">
        {repair_gadget_in3steps.map((step, index) => (
          <div className="header1" key={index}>
            <h3>{step.content}</h3>
            <p>{step.subcontent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;


