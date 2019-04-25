import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';
import '../assets/style/App.css';

class HomeRegister extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
              Welcome to Locos por el asado!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default HomeRegister;
