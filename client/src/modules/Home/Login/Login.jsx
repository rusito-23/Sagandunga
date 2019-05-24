import React, {Component} from 'react';
import '../Form.scss';
import {Animated} from 'react-animated-css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faKey} from "@fortawesome/fontawesome-free-solid";

export default class Login extends Component {
    render() {
        return (
            <Animated animationIn={'slideInRight'} animationOut={'slideOutRight'}>
                <div className={'Form-container'}>
                    <h2> Login </h2>
                    <div className='Form Form-login'>
                        <div className={'Form-input-container'}>

                            <FontAwesomeIcon icon={faUser} className={'Form-input-icon'} />
                            <input type='text' placeholder='Username' name='username' required/>

                            <FontAwesomeIcon icon={faKey} className={'Form-input-icon'} />
                            <input type='password' placeholder='Password' name='password' required/>

                        </div>
                    </div>
                </div>
            </Animated>
        );
    }
}
