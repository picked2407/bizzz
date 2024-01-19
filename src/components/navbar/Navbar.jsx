import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <span style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', fontFamily: 'var(--font-family)' }}>Bizhub</span>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatisbizhub'">About</a></p>
          <p><a href="#possibility">How it works</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button"><a href="https://discord.gg/2pWqBuUSeg">Join</a></button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">About</a></p>
            <p><a href="#possibility">How it works</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button"><a href="https://discord.gg/2pWqBuUSeg">Join</a></button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
