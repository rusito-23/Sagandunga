import React, {Component} from 'react';
import '../Profile.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ConsumerProfileActions from './ConsumerProfileActions';
import {
    faUser, faEnvelope, faDollarSign, faArrowDown, faArrowUp
} from '@fortawesome/fontawesome-free-solid';

export default class ConsumerProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showActions: false
        }
    }

    showUnshowActions = () => {
        this.setState({
            showActions: !this.state.showActions
        })
    };

    arrow = () => {
        return this.state.showActions ? faArrowUp : faArrowDown;
    };

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
                        <FontAwesomeIcon icon={faEnvelope} className={'Profile-item-left-icon'}/>
                        Email
                    </div>
                    <div className={'Profile-item-right'}>{this.props.user.email}</div>
                </div>

                <div className={'Profile-item'}>
                    <div className={'Profile-item-left'}>
                        <FontAwesomeIcon icon={faDollarSign} className={'Profile-item-left-icon'}/>
                        Balance
                    </div>
                    <div className={'Profile-item-right'}>{this.props.user.balance} $</div>
                </div>

                <ConsumerProfileActions show={this.state.showActions} user={this.props.user} />

                <div onClick={this.showUnshowActions}>
                    <FontAwesomeIcon icon={this.arrow()} className={'Profile-button-down'} />
                </div>
            </div>
        );
    }
}
