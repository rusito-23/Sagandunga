import React, {Component} from 'react';
import './NavBar.scss';
import Pizza from '../../assets/img/pizza.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUser, faHome, faUnlink
} from '@fortawesome/fontawesome-free-solid';

export default class Navbar extends Component {

    userLogout = () => {
        this.props.userLogout(this.props.history)
    };

    render() {
        return (
            <div className={'Nav-bar'}>

                <div className={'Nav-bar-header'}>
                    <img src={Pizza} alt={'Little pizza for you'} />
                    <div className={'Nav-bar-header-title'}>Sagandunga</div>
                </div>

                <div className="Nav-bar-btn" >
                    <label htmlFor="Nav-bar-check">
                        <span/>
                        <span/>
                        <span/>
                    </label>
                </div>

                <div className={'Nav-bar-links'}>
                    <div className={'Nav-bar-links-item'}>
                        <a href={'/home'}>
                            <FontAwesomeIcon icon={faHome} className={'Nav-bar-links-item-icon'} />
                            Home
                        </a>
                    </div>
                    <div className={'Nav-bar-links-item'}>
                        <a href={'/profile'}>
                            <FontAwesomeIcon icon={faUser} className={'Nav-bar-links-item-icon'} />
                            Profile
                        </a>
                    </div>
                    <div className={'Nav-bar-links-item'}>
                        <a href={'/'} onClick={this.userLogout}>
                            <FontAwesomeIcon icon={faUnlink} className={'Nav-bar-links-item-icon'} />
                            Logout
                        </a>
                    </div>
                </div>

            </div>
        )
    }

}