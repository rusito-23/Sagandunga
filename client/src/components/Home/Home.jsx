import React, {Component} from 'react';
import './Home.scss';
import {getUserLS} from '../../utils/userStorageUtil';
import {BaseContainer} from '../../templates/BaseContainer/BaseContainer';
import {getHomeActions} from '../../services/homeServices';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWrench} from '@fortawesome/fontawesome-free-solid';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getUserLS(),
        }
    }

    callAction = (event) => {
        this.props[event.target.id](
            this.props.history,
            this.state.user
        );
    };

    render() {
        return (
            <BaseContainer
                title={'Home'}
                subtitle={null}>

                {getHomeActions(this.state.user).map((action, index) => {
                    return (
                        <div key={index} className={'Home-action'}>
                            <button id={action.action} onClick={this.callAction} >
                                <FontAwesomeIcon icon={action.faIcon} className={'Home-action-icon'}/>
                                {action.label}
                            </button>
                        </div>
                    );
                })}

                <div className={'Home-dashboard'}>
                    <h3 className={'Home-subtitle'}>Dashboard</h3>
                    <h4 className={'Home-subtitle'}>
                        <FontAwesomeIcon icon={faWrench} className={'Home-action-icon'}/>
                        This feature will be available soon enough!
                    </h4>
                </div>

            </BaseContainer>
        );
    }

}