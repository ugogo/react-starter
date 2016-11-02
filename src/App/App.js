import React from 'react';
import Header from './Header/Header.js';
import './App.css';

const App = ({ children }) =>
  <div className="App">
    <Header />
    {children}
  </div>
;

export default App;
