import React, {Component} from 'react';
import './RegisterTabs.scss';
import '../Form.scss'
import RegisterProvider from './Provider'
import RegisterConsumer from './Consumer'
import {Animated} from 'react-animated-css';

const states = {
    CONSUMER: (<RegisterConsumer/>),
    PROVIDER: (<RegisterProvider/>),
};

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            child: states.CONSUMER,
            hover: false,
        };
        this.showConsumerRegister.bind(this);
        this.showRegisterProvider.bind(this);
        this.isRegisterConsumerActive.bind(this);
        this.isRegisterProviderActive.bind(this);
        this.onHover.bind(this);
        this.noHover.bind(this);
    }

    // State handling

    showConsumerRegister = () => {
        this.setState({child: states.CONSUMER})
    };

    showRegisterProvider = () => {
        this.setState({child: states.PROVIDER})
    };

    // Class change depending on state

    isRegisterConsumerActive = () => {
        if (this.state.child === states.CONSUMER && !this.state.hover) {
            return 'active'
        }
    };

    isRegisterProviderActive = () => {
        if (this.state.child === states.PROVIDER && !this.state.hover) {
            return 'active'
        }
    };

    onHover = (sender) => {
        if (sender.className !== 'active') {
            this.setState({
                hover: true
            })
        }
    };

    noHover = () => {
        this.setState({
            hover: false
        })
    };

    render() {
        return (
            <Animated animationIn={'slideInRight'} animationOut={'slideOutRight'}>
                <div className={'Form-container'}>
                    <h2> Register </h2>
                    <div className={'Tabs-container'}>
                        <button
                            onMouseEnter={this.onHover}
                            onMouseLeave={this.noHover}
                            onClick={this.showConsumerRegister}
                            className={this.isRegisterConsumerActive()}>
                            Consumer
                        </button>

                        <button
                            onMouseEnter={this.onHover}
                            onMouseLeave={this.noHover}
                            onClick={this.showRegisterProvider}
                            className={this.isRegisterProviderActive()}>
                            Provider
                        </button>
                    </div>
                    <div className={'Tabs-content'}>
                        {this.state.child}
                    </div>
                </div>
            </Animated>
        );
    }
}
