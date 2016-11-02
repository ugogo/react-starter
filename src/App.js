import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>

          <ul className="App-nav">
            <li className="App-navItem">
              <Link className="App-navLink" activeClassName="is-active" to='/'>Home</Link>
            </li>
            <li className="App-navItem">
              <Link className="App-navLink" activeClassName="is-active" to='/foo'>Foo</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
