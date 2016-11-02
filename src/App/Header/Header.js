import React from 'react';
import Nav from './Nav/Nav.js';
import ReactLogo from './ReactLogo.svg';
import './Header.css'

const AppHeader = () =>
  <div className="App-header">
    <img src={ReactLogo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
    <Nav />
  </div>
;

export default AppHeader;
