import React, {Component} from 'react';
import './RegisterTabs.scss';
import '../Form.scss'
import RegisterProvider from './ProviderRegister'
import RegisterConsumer from './ConsumerRegister'
import {Animated} from 'react-animated-css';
import LoadingSpinner from '../../../templates/Loading/LoadingSpinner';

const states = {
    CONSUMER: (<RegisterConsumer/>),
    PROVIDER: (<RegisterProvider/>),
};

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            child: states.CONSUMER,
            hover: false
        };
    }

    componentDidMount() {
        this.props.getLocations();
    }

    // State handling

    showConsumerRegister = () => {
        this.setState({child: states.CONSUMER});
        this.props.changeRegisterForm('consumer');
    };

    showRegisterProvider = () => {
        this.setState({child: states.PROVIDER});
        this.props.changeRegisterForm('provider');
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
        if (this.props.locationLoading) { return <LoadingSpinner /> }
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
