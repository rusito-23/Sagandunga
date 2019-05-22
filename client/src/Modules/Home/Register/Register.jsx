import React, {Component} from 'react';
import '../Login/Login.sass';
import RegisterProvider from './Provider'
import RegisterConsumer from './Consumer'

const states = {
    CONSUMER: (<RegisterConsumer/>),
    PROVIDER: (<RegisterProvider/>),
};

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            child: states.CONSUMER,
        };
        this.registerConsumer.bind(this);
        this.registerProvider.bind(this);
    }

    registerConsumer = () => {
        this.setState({child: states.CONSUMER})
    };

    registerProvider = () => {
        this.setState({child: states.PROVIDER})
    };

    render() {
        return (
            <div className="Login-form">
                <h2> Register </h2>
                <div className={"Login-form-tabs"}>
                    <button onClick={this.registerConsumer}>Consumer</button>
                    <button onClick={this.registerProvider}>Provider</button>
                </div>
                <div className={"Login-form-child"}>
                    {this.state.child}
                </div>
            </div>
        );
    }
}
