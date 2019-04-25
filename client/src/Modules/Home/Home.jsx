import React, { Component } from 'react';
import './Home.sass';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <p>
              Welcome to Locos por el asado!
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Hello world!
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
