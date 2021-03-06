import NavLink from "./NavLink.js";
import React from "react";
import "./Nav.css";

const Nav = () =>
  <ul className="Nav">
    <li className="Nav-item">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="Nav-item">
      <NavLink to="/foo">Foo</NavLink>
    </li>
  </ul>
;

export default Nav;
