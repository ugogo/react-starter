import React from 'react';
import Nav from '../Nav/Nav.js';
import ReactLogo from './React-logo.svg';
import './Header.css'

const Header = () =>
  <div className="Header">
    <img src={ReactLogo} className="Header-logo" alt="logo" />
    <h2>Welcome to React</h2>
    <Nav />
  </div>
;

export default Header;
