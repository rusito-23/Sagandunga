import React, {Component} from 'react';
import '../Form.scss';

export default class Login extends Component {
    render() {
        return (
            <div className='Form'>
                <h2> Login </h2>
                <input type='text' placeholder='Username' name='username' required/>
                <input type='password' placeholder='Password' name='password' required/>
            </div>
        );
    }
}
