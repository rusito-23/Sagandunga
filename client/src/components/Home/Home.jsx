import React, {Component} from 'react';
import './Home.scss';
import Login from './Login'
import Register from './Register'
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
            state: states.LOGIN,
            register_form: 'consumer',
        };

        this.renderSwitch.bind(this);
        this.switchState.bind(this);
        this.activeForm.bind(this);
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
                    child: (<Register changeRegisterForm={this.changeRegisterForm}/>),
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

    activeForm = () => {
        switch (this.state.state) {
            case states.LOGIN:
                return 'login';
            case states.REGISTER:
                return this.state.register_form;
            default: break;
        }
    };

    changeRegisterForm = (form) => {
        this.setState({
            register_form: form
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

                    <button className={'Home-send-button'}
                            type={'submit'}
                            form={this.activeForm()}>Send</button>
                    <p className={'Home-switch-message'} onClick={this.switchState}>{message}</p>
                </div>
            </div>
        );
    }
}
