import React from 'react';
import './Messages.scss';
import ColBurger from '../../assets/img/colburger.png';
import {BaseContainer} from '../BaseContainer/BaseContainer';

// Generic Error Message
export const ErrorMessage = ({message, visible}) => {
    if (visible) {
        return (
            <div className={'Messages-error'}>
                {message}
            </div>
        )
    } else { return null }
};

// 404 - NotFound!
export const NotFound = () => (
    <div className={'Messages-redirect-error'}>
        <h1>Oops! Sorry!</h1>
        <h2>The page you are looking for does not exist!</h2>
        <h3>Stop messing with the paths, dumbass.</h3>
        <img src={ColBurger} alt={'Crying Burger :P'} />
    </div>
);

export const BaseErrorMessage = ({message, visible}) => {
    if (visible) {
        return (
            <div className={'Messages-redirect-error'}>
                <h1>Oops! Sorry!</h1>
                <h2>{message}</h2>
                <h3>We are very, very, very much sorry for your inconveniences.</h3>
                <img src={ColBurger} alt={'Crying Burger :P'} />
            </div>
        )
    } else { return null }
};
