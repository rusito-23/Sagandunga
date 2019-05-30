import React, {Component} from 'react';
import './Home.scss';
import {getUserLS} from '../../utils/userStorageUtil';
import {BaseContainer} from '../../templates/BaseContainer/BaseContainer';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getUserLS(),
        }
    }

    render() {
        return (
            <BaseContainer
                title={'Home'}
                subtitle={`Welcome ${this.state.user.username}!`}>
                HOMEMEME
            </BaseContainer>
        );
    }

}