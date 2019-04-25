import React, { Component } from 'react';
import './Login.sass';

class Login extends Component {
  render() {
    return (
      <div className="Login-form">
        <p> Login form! </p>

        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />

        <button type="submit">Login</button>
      </div>
    );
  }
}

export default Login;
