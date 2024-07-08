import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><a href="#Work">Work</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Client">Client</a></li>
          <li><a href="#Blog">Blog</a></li>
        </ul>
      </nav>
      <div className="div">
        <button id="button">GET IN TOUCH</button>
      </div>
      
    </header>
  );
}

export default Header;
