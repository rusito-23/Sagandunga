import React, {Component} from 'react';
import './Profile.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Animated} from 'react-animated-css';
import {getProfileActions} from '../../services/userProfileServices';
import {faTrash} from '@fortawesome/fontawesome-free-solid';

export default class ProfileActions extends Component {

    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <Animated animationIn={'fadeInDown'} animationOut={'slideOutRight'}>
                <div className={'Profile-actions-container'}>

                    {getProfileActions(this.props.user).map((action) => {
                        return (
                            <div className={'Profile-item'}>
                                <button className={'Profile-button'}>
                                    <FontAwesomeIcon icon={action.faIcon}
                                                     className={'Profile-item-left-icon'} />
                                    {action.label}
                                </button>
                            </div>
                        )
                    })}

                    <div className={'Profile-item'}>
                        <button className={'Profile-button Profile-button-delete'}>
                            <FontAwesomeIcon icon={ faTrash }
                                             className={'Profile-item-left-icon'} />
                            DELETE MY ACCOUNT
                        </button>
                    </div>

                </div>
            </Animated>
        );
    }
}

