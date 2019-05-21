import React, { Component } from 'react';
import './Login.sass';

class Login extends Component {
  render() {
    return (
      <div className="Login-form">
        <p> Login </p>
        <input type="text" placeholder="Username" name="username" required />
        <input type="password" placeholder="Password" name="password" required />
        <button type="submit">Send</button>
      </div>
    );
  }
}

export default Login;
