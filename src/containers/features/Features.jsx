import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: ' Video Editing',
    text: 'Join our server, showcase your video editing skills, get selected, and start collaborating on exciting projects with our talented team!',
  },
  {
    title: 'Web development',
    text: 'Explore limitless possibilities in web design! Present your stellar portfolio in our server, get selected, and dive into collaborative projects with our skilled web design team. Your next creative journey begins here!    ',
  },
  {
    title: 'Content/Copywriting',
    text: 'Join, showcase, create! Elevate your copy/content writing with us and collaborate on impactful projects.',
  },
  {
    title: 'Bot and System Development',
    text: 'Join for bot/system development! Showcase your work, collaborate on cutting-edge projects. Your coding journey starts here!',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding text-center" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Our Services</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
