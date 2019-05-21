import React, { Component } from 'react';
import './Home.sass';
import Login from './Login/Login.jsx'
import delicious_pizza from '../../assets/img/delicious_pizza.jpg'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-img">
          <img src={delicious_pizza} alt={"Delicious Pizza!"} />
        </div>
        <div className="Home-login-register">
          <Login />
        </div>
      </div>
    );
  }
}

export default Home;
