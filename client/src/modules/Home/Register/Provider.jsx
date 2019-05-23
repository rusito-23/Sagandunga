import React, {Component} from 'react';
import '../Form.scss'

export default class RegisterProvider extends Component {
    render() {
        return (
            <div className={'Form Form-register'}>
                <div className={'Form-input-container'}>

                    <input type='text' placeholder='Username'   name='username' required/>
                    <input type='mail' placeholder='Mail'       name='mail'     required/>

                    <input type='text' placeholder='Storename'  name='storeName' required/>
                    <input type='number' placeholder='Max delivery distance'
                           name='maxDeliveryDistance' required/>

                    <input type='password' placeholder='Password'
                           name='password' required/>
                    <input type='password' placeholder='Repeat Password'
                           name='password_repeat' required/>
                </div>
            </div>
        );
    }
}