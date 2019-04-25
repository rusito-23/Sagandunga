import React, { Component } from 'react';
import './Home.sass';
import Login from './Login/Login.jsx'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <Login />
        </header>
      </div>
    );
  }
}

export default Home;
