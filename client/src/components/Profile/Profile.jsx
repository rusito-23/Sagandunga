import React, {Component} from 'react';

export default class Profile extends Component {

    // TODO: look for the user information
    // and write both profiles for consumer and provider

    onClickLogout = () => {
        this.props.userLogout(this.props.history);
    };

    render() {
        console.log('rendering Profile');
        return (
            <div className={'Home'}>
                <h1>Profile</h1>
                <button onClick={this.onClickLogout}>Logout</button>
            </div>
        );
    }
}
