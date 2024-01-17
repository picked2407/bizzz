import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Global talent at your doorstep.</h1>
      <p>Make your next big thing come to life by leveraging the global talent that we provide. We make it easy for you to choose from a wide variety of talent that suit your needs best, at the price-point that you are comfortable with, within the time constraints that you desire.</p>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>60+ people joined us in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
