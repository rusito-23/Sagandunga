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
    render() {
        return (
            <div className={'Form Form-register'}>
                <div className={'Form-input-container'}>

                    <FontAwesomeIcon icon={faUser} className={'Form-input-icon'} />
                    <input type='text' placeholder='Username'   name='username' required/>

                    <FontAwesomeIcon icon={faEnvelope} className={'Form-input-icon'} />
                    <input type='mail' placeholder='Mail'       name='mail'     required/>

                    <FontAwesomeIcon icon={faStore} className={'Form-input-icon'} />
                    <input type='text' placeholder='Storename'  name='storeName' required/>

                    <FontAwesomeIcon icon={faMap} className={'Form-input-icon'} />
                    <input type='number' placeholder='Max delivery distance'
                           name='maxDeliveryDistance' required/>

                    <FontAwesomeIcon icon={faKey} className={'Form-input-icon Form-input-icon-two-rows'} />
                    <input type='password' placeholder='Password'
                           name='password' required/>
                    <input type='password' placeholder='Repeat Password'
                           name='password_repeat' required/>
                </div>
            </div>
        );
    }
}