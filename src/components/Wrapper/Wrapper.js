import Header from "../Header/Header.js";
import React from "react";
import "./Wrapper.css";

const Wrapper = ({ children }) =>
  <div className="App">
    <Header />
    {children}
  </div>
;

export default Wrapper;
