import React, {Component} from 'react';
import './Profile.scss';
import {getUserLS} from '../../utils/userStorageUtil';
import {BaseContainer} from '../../templates/BaseContainer/BaseContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/fontawesome-free-solid';
import ProfileActions from './ProfileActions';
import {getProfileItems} from '../../services/userProfileServices';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getUserLS(),
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
            <BaseContainer
                title={'Profile'}
                subtitle={null}>

                <div className={'Profile-container'}>

                    {getProfileItems(this.state.user).map((item) => {
                        return (
                            <div className={'Profile-item'}>
                                <div className={'Profile-item-left'}>
                                    <FontAwesomeIcon icon={item.faIcon} className={'Profile-item-left-icon'}/>
                                    {item.label}
                                </div>
                                <div className={'Profile-item-right'}>
                                    {this.state.user[item.attr]} {item.extra}
                                </div>
                            </div>)
                    })}

                    <ProfileActions show={this.state.showActions} user={this.state.user}/>

                    <div onClick={this.showUnshowActions}>
                        <FontAwesomeIcon icon={this.arrow()} className={'Profile-button-down'}/>
                    </div>
                </div>

            </BaseContainer>
        );
    }
}
