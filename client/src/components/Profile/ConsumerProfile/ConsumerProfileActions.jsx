import React, {Component} from 'react';
import '../Profile.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Animated} from 'react-animated-css';
import {
    faPhone, faDollarSign, faTrash
} from '@fortawesome/fontawesome-free-solid';

export default class ConsumerProfileActions extends Component {

    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <Animated animationIn={'fadeInDown'} animationOut={'slideOutRight'}>
                <div className={'Profile-actions-container'}>
                    <div className={'Profile-item'}>
                        <button className={'Profile-button'}>
                            <FontAwesomeIcon icon={faDollarSign}
                                             className={'Profile-item-left-icon'} />
                            DEPOSIT
                        </button>
                    </div>

                    <div className={'Profile-item'}>
                        <button className={'Profile-button'}>
                            <FontAwesomeIcon icon={faPhone}
                                             className={'Profile-item-left-icon'} />
                            CONTACT
                        </button>
                    </div>

                    <div className={'Profile-item'}>
                        <button className={'Profile-button Profile-button-delete'}>
                            <FontAwesomeIcon icon={faTrash}
                                             className={'Profile-item-left-icon'} />
                            DELETE MY ACCOUNT
                        </button>
                    </div>
                </div>
            </Animated>
        );
    }
}

