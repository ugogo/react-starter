import React from 'react';
import NavLink from './NavLink.js';
import './Nav.css';

const Nav = () =>
  <ul className="App-nav">
    <li className="App-navItem">
      <NavLink to='/'>Home</NavLink>
    </li>
    <li className="App-navItem">
      <NavLink to='/foo'>Foo</NavLink>
    </li>
  </ul>
;

export default Nav;
