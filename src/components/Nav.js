import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 111.21 165.27">
        <defs>
          <style>{`.cls-1{font-size:106.37px;font-family:Comfortaa-Medium, Comfortaa;font-weight:500;}`}</style>
        </defs>
        <g id="Text">
          <text className="cls-1" transform="translate(0 94.73)">L</text>
          <text className="cls-1" transform="translate(36.32 134.53)">B</text>
        </g>
      </svg>
      <ul className="nav-list">
        <div id="nav-line"></div>
        <li><a href="./#CurrentWorks"><h3>Works</h3></a></li>
        <li><a href=""><h3>Resume</h3></a></li>
        <li><a href="mailto:loganbondoc@gmail.com"><h3>Contact</h3></a></li>
      </ul>
    </nav>
  );
}

export default Nav;
