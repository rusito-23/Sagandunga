import React, {Component} from 'react';
import '../../Form.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Dropdown from '../../../../templates/Dropdown/Dropdown';
import
{
    faUser,
    faEnvelope,
    faStore,
    faMap,
    faKey, faLocationArrow,
} from '@fortawesome/fontawesome-free-solid';

export default class RegisterProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mail: '',
            storeName: '',
            maxDeliveryDistance: 0,
            password: '',
            location: this.props.locations[0].value
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
        console.log(this.state);
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
                               onChange={this.handleChange}
                        />

                        <FontAwesomeIcon icon={faEnvelope} className={'Form-input-icon'}/>
                        <input type='mail' placeholder='Mail'
                               name='mail' required
                               onChange={this.handleChange}
                        />

                        <FontAwesomeIcon icon={faStore} className={'Form-input-icon'}/>
                        <input type='text' placeholder='Storename'
                               name='storeName' required
                               onChange={this.handleChange}
                        />

                        <FontAwesomeIcon icon={faMap} className={'Form-input-icon'}/>
                        <input type='number' placeholder='Max delivery distance'
                               name='maxDeliveryDistance' required
                               onChange={this.handleChange}
                        />

                        <FontAwesomeIcon icon={faKey} className={'Form-input-icon Form-input-icon-two-rows'}/>
                        <input type='password' placeholder='Password'
                               name='password' required
                               onChange={this.handleChange}
                        />
                        <input type='password' placeholder='Repeat Password'
                               name='password_repeat' required/>

                        <FontAwesomeIcon icon={faLocationArrow} className={'Form-input-icon'}/>
                        <Dropdown
                            onChange={this.handleChange}
                            name={'location'}
                            options={this.props.locations}
                        />
                    </form>
                </div>
            </div>
        );
    }
}