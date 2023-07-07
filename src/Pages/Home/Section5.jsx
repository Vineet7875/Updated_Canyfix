import React from 'react';
import "../Home/Section5.css"
import { PlayCircleFilled, Apple, YouTube, Facebook, Instagram, Twitter, LinkedIn } from '@material-ui/icons';
import data from '../../JSONDATA/data.json'

const Section5 = () => {
  const { services, moreInfo, company, appIcons, helpDesk, socialMedia } = data;
  return (
    <div className="section5-container">
      <div className="column">
        <div>
          <div className="header">Services</div>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="header">More Info</div>
          <ul>
            {moreInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="column">
        <div>
          <div className="header">Company</div>
          <ul>
            {company.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="header">Download Our App</div>
          <div className="app-icons">
            {appIcons.map((icon, index) => (
              <div className="app_circle" key={index}>
                {icon === 'play' && <PlayCircleFilled className="app_icon" style={{ color: 'black' }} />}
                {icon === 'apple' && <Apple className="app_icon" style={{ color: 'black' }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="column">
        <div>
          <div className="header">Help Desk</div>
          <ul>
            {helpDesk.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="header">Follow Us</div>
          <div className="social-media-icons">
            {socialMedia.map((icon, index) => (
              <div className="social_circle" style={{ backgroundColor: 'var(--main-color)' }} key={index}>
                {icon === 'youtube' && <YouTube className="icon" style={{ color: 'white' }} />}
                {icon === 'facebook' && <Facebook className="icon" style={{ color: 'white' }} />}
                {icon === 'instagram' && <Instagram className="icon" style={{ color: 'white' }} />}
                {icon === 'twitter' && <Twitter className="icon" style={{ color: 'white' }} />}
                {icon === 'linkedin' && <LinkedIn className="icon" style={{ color: 'white' }} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;

