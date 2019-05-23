import React, {Component} from 'react';
import '../Form.scss';
import {Animated} from 'react-animated-css';

export default class Login extends Component {
    render() {
        return (
            <Animated animationIn={'slideInRight'} animationOut={'slideOutRight'}>
                <div className={'Form-container'}>
                    <h2> Login </h2>
                    <div className='Form Form-login'>
                        <div className={'Form-input-container'}>

                            <input type='text' placeholder='Username' name='username' required/>

                            <input type='password' placeholder='Password' name='password' required/>

                        </div>
                    </div>
                </div>
            </Animated>
        );
    }
}
