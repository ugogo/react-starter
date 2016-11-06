import React from 'react';
import Header from '../Header/Header.js';
import './Wrapper.css';

const Wrapper = ({ children }) =>
  <div className="App">
    <Header />
    {children}
  </div>
;

export default Wrapper;
