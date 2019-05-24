import React, {Component} from 'react';
import '../Form.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import
{
    faUser,
    faEnvelope,
    faStore,
    faMap,
    faKey,
} from "@fortawesome/fontawesome-free-solid";

export default class RegisterProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mail: '',
            storeName: '',
            maxDeliveryDistance: 0,
            password: ''
        };
        this.handleUsernameChange.bind(this);
        this.handleMailChange.bind(this);
        this.handleStoreNameChange.bind(this);
        this.handleMaxDeliveryChange.bind(this);
        this.handlePassChange.bind(this);
        this.handleSubmit.bind(this);
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value})
    };

    handleMailChange = (event) => {
        this.setState({mail: event.target.value})
    };

    handlePassChange = (event) => {
        this.setState({password: event.target.value})
    };

    handleStoreNameChange = (event) => {
        this.setState({storeName: event.target.value})
    };

    handleMaxDeliveryChange = (event) => {
        this.setState({maxDeliveryDistance: event.target.value})
    };

    handleSubmit = (event) => {
        // TODO: axios!!
        console.log(`
            Handling login with:
                username: ${this.state.username}
                storeName: ${this.state.storeName}
                password: ${this.state.password}
        `);
        event.preventDefault()
    };

    render() {
        return (
            <div className={'Form Form-register'}>
                <div className={'Form-input-container'}>
                    <form id={'provider'} onSubmit={this.handleSubmit}>

                        <FontAwesomeIcon icon={faUser} className={'Form-input-icon'}/>
                        <input type='text' placeholder='Username'
                               name='username' required
                               onChange={this.handleUsernameChange}
                        />

                        <FontAwesomeIcon icon={faEnvelope} className={'Form-input-icon'}/>
                        <input type='mail' placeholder='Mail'
                               name='mail' required
                               onChange={this.handleMailChange}
                        />

                        <FontAwesomeIcon icon={faStore} className={'Form-input-icon'}/>
                        <input type='text' placeholder='Storename'
                               name='storeName' required
                               onChange={this.handleStoreNameChange}
                        />

                        <FontAwesomeIcon icon={faMap} className={'Form-input-icon'}/>
                        <input type='number' placeholder='Max delivery distance'
                               name='maxDeliveryDistance' required
                               onChange={this.handleMaxDeliveryChange}
                        />

                        <FontAwesomeIcon icon={faKey} className={'Form-input-icon Form-input-icon-two-rows'}/>
                        <input type='password' placeholder='Password'
                               name='password' required
                               onChange={this.handlePassChange}
                        />
                        <input type='password' placeholder='Repeat Password'
                               name='password_repeat' required/>
                    </form>
                </div>
            </div>
        );
    }
}