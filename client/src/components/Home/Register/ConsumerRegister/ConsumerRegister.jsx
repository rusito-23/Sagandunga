import React, {Component} from 'react';
import '../../Form.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import
{
    faUser,
    faEnvelope,
    faKey,
} from "@fortawesome/fontawesome-free-solid";

export default class RegisterConsumer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mail: '',
            password: ''
        };
        this.handleChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        // TODO: axios!!
        console.log(`
            Handling consumer register with:
                username: ${this.state.username}
                password: ${this.state.password}
        `);
        event.preventDefault()
    };

    render() {
        return (
            <div className={'Form Form-register'}>
                <div className={'Form-input-container'}>
                    <form id={'consumer'} onSubmit={this.handleSubmit}>
                        <FontAwesomeIcon icon={faUser} className={'Form-input-icon'}/>
                        <input type='text' placeholder='Username'
                               name='username' required
                               onChange={this.handleChange}
                        />

                        <FontAwesomeIcon icon={faEnvelope} className={'Form-input-icon'}/>
                        <input type='mail' placeholder='Mail'
                               name='mail' required
                               onChange={this.handleChange}
                        />

                        <FontAwesomeIcon icon={faKey} className={'Form-input-icon Form-input-icon-two-rows'}/>
                        <input type='password' placeholder='Password'
                               name='password' required
                               onChange={this.handleChange}
                        />
                        <input type='password' placeholder='Repeat Password'
                               name='password_repeat' required/>
                    </form>
                </div>
            </div>
        );
        // TODO: location dropdown
    }
}
