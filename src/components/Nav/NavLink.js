import React from 'react';
import { Link } from 'react-router';
import './NavLink.css';

const NavLink = (props) =>
  <Link className="Nav-link" activeClassName="is-active" onlyActiveOnIndex={true} {...props}>
    {props.children}
  </Link>
;

export default NavLink;