import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Join us to start your journey today</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Get started</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>BizHub</p>
      </div>
      <div className="gpt3__footer-links_div">
        <p><a href="https://docs.google.com/document/d/1kRbODawwBtwyVrR_gn2B49J0sRji7al7XW2kOc1AGs4/edit">Terms of Service</a></p>
        <p><a href="https://docs.google.com/document/d/1tsVfBbB5tfQFtsUCgC4cm-r2YzlOMqY0qhoJ4rWt4DY/edit">Discord Freelancer Manual</a></p>
        <p><a href="https://docs.google.com/document/d/1Y4zrLmmczuJ2egBqIKD--kRuUAWGaGPuKiImIjs23is/edit">Freelancer Agreement </a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <p>bizhubgeneral@gmail.com</p>
      </div>
    </div>
  </div>
);

export default Footer;
