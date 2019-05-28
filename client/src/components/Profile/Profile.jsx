import React, {Component} from 'react';

export default class Profile extends Component {

    // TODO: look for the user information
    // and write both profiles for consumer and provider

    onClickLogout = () => {
        this.props.userLogout(this.props.history);
    };

    render() {
        return (
            <div className={'Profile'} align={'center'}>
                <h2>Profile</h2>
                <button onClick={this.onClickLogout}>Logout</button>
            </div>
        );
    }
}
