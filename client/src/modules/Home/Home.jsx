import React, {Component} from 'react';
import './Home.scss';
import Login from './Login/Login.jsx'
import Register from './Register/Register.jsx'
import delicious_pizza from '../../assets/img/delicious_pizza.jpg'

const states = {
    LOGIN: 1,
    REGISTER: 2,
    switch: function (old) {
        switch (old) {
            case this.LOGIN:
                return this.REGISTER;
            case this.REGISTER:
                return this.LOGIN;
            default:
                break;
        }
    }
};

// TODO: check if logged in
export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            state: states.LOGIN
        };

        this.renderSwitch.bind(this);
        this.switchState.bind(this);
    }

    renderSwitch = () => {
        switch (this.state.state) {
            case states.LOGIN:
                return {
                    child: (<Login/>),
                    message: 'Create a new account'
                };
            case states.REGISTER:
                return {
                    child: (<Register/>),
                    message: 'I already have an account'
                };
            default:
                break;
        }
    };

    switchState = () => {
        this.setState({
            state: states.switch(this.state.state)
        })
    };

    render() {
        const {child, message} = this.renderSwitch();
        return (
            <div className={'Home'}>
                <div className={'Home-column Home-img-cover'}>
                    <div className={'Home-img'}>
                        <img src={delicious_pizza} alt={'Delicious Pizza!'}/>
                    </div>
                    <h1>Sagandunga!</h1>
                </div>
                <div className={'Home-column Home-login-register'}>
                    {child}
                    <button className={'Home-send-button'}>Send</button>
                    <p className={'Home-switch-message'} onClick={this.switchState}>{message}</p>
                </div>
            </div>
        );
    }
}
