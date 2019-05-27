import React, {Component} from 'react';
import '../Form.scss';
import { Animated } from 'react-animated-css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faKey} from "@fortawesome/fontawesome-free-solid";
import axios from 'axios';
import { ErrorMessage } from '../../../templates/ErrorMessages/ErrorMessages'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginError: false
        };
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };

    handleSubmit = (event) => {
        axios.post('/users/login', {
            user: {
                auth: this.state.username,
                password: this.state.password
            }
        }).then(res => {
            console.log(res);
            this.setState({
                loginError: false
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                loginError: true
            })
        });
        event.preventDefault()
    };

    render() {
        return (
            <Animated animationIn={'slideInRight'} animationOut={'slideOutRight'}>
                <div className={'Form-container'}>
                    <h2> Login </h2>
                    <div className='Form Form-login'>
                        <div className={'Form-input-container'}>
                            <form onSubmit={this.handleSubmit} id={'login'}>
                                <FontAwesomeIcon icon={faUser} className={'Form-input-icon'}/>
                                <input type='text' placeholder='Username'
                                       name='username' required
                                       onChange={this.handleUsernameChange}
                                />

                                <FontAwesomeIcon icon={faKey} className={'Form-input-icon'}/>
                                <input type='password' placeholder='Password'
                                       name='password' required
                                       onChange={this.handlePasswordChange}
                                />

                                <ErrorMessage
                                    visible={this.state.loginError}
                                    message={'Incorrect username or password'}/>
                            </form>
                        </div>
                    </div>
                </div>
            </Animated>
        );
    }
}
