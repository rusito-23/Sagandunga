import React, {Component} from 'react';
import './Profile.scss';
import {CONSUMER_TYPE} from '../../constants/generalConstants';
import ConsumerProfile from './ConsumerProfile/ConsumerProfile';
import ProviderProfile from './ProviderProfile/ProviderProfile';
import {getUserLS} from '../../utils/userStorageUtil';
import {Animated} from 'react-animated-css';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getUserLS(),
        }
    }

    child = () => {
        if (this.state.user.kind === CONSUMER_TYPE) {
            return <ConsumerProfile user={this.state.user}/>;
        } else {
            return <ProviderProfile user={this.state.user}/>;
        }
    };

    render() {
        return (
            <div className={'Profile'}>
                <Animated animationIn={'bounceIn'} animationOut={'slideOutRight'}>
                    <h2>Welcome, {this.state.user.username}!</h2>
                    <h3>Your profile</h3>
                    {this.child()}
                </Animated>
            </div>
        );
    }
}
