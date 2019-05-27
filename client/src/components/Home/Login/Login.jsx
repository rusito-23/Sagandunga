import React, {Component} from 'react';
import '../Form.scss';
import {Animated} from 'react-animated-css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faKey} from "@fortawesome/fontawesome-free-solid";
import {ErrorMessage} from '../../../templates/ErrorMessages/ErrorMessages'
import {PROFILE} from "../../../constants/appRoutes";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginUser(this.state);
    };

    render() {
        if (this.props.user) {
            this.props.history.push(PROFILE);
        }
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
                                       onChange={this.handleChange}
                                />

                                <FontAwesomeIcon icon={faKey} className={'Form-input-icon'}/>
                                <input type='password' placeholder='Password'
                                       name='password' required
                                       onChange={this.handleChange}
                                />

                                <ErrorMessage
                                    visible={this.props.loginError}
                                    message={'Incorrect username or password'}/>
                            </form>
                        </div>
                    </div>
                </div>
            </Animated>
        );
    }
}

