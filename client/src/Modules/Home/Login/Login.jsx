import React, {Component} from 'react';
import './Login.sass';

export default class Login extends Component {
    render() {
        return (
            <div className="Login-form">
                <h2> Login </h2>
                <input type="text" placeholder="Username" name="username" required/>
                <input type="password" placeholder="Password" name="password" required/>
            </div>
        );
    }
}
