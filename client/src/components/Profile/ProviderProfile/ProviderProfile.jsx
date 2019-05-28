import React, {Component} from 'react';
import '../Profile.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faUser, faStore, faEnvelope
} from '@fortawesome/fontawesome-free-solid';

export default class ProviderProfile extends Component {

    render() {
        return (
            <div className={'Profile-container'}>
                <div className={'Profile-item'}>
                    <div className={'Profile-item-left'}>
                        <FontAwesomeIcon icon={faUser} className={'Profile-item-left-icon'}/>
                        Username
                    </div>
                    <div className={'Profile-item-right'}>{this.props.user.username}</div>
                </div>

                <div className={'Profile-item'}>
                    <div className={'Profile-item-left'}>
                        <FontAwesomeIcon icon={faStore} className={'Profile-item-left-icon'}/>
                        Storename
                    </div>
                    <div className={'Profile-item-right'}>{this.props.user.storename}</div>
                </div>

                <div className={'Profile-item'}>
                    <div className={'Profile-item-left'}>
                        <FontAwesomeIcon icon={faEnvelope} className={'Profile-item-left-icon'}/>
                        Email
                    </div>
                    <div className={'Profile-item-right'}>{this.props.user.email}</div>
                </div>
            </div>
        );
    }
}
