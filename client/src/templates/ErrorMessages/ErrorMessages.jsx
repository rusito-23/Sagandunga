import React from 'react';
import './_error_style.scss';
import ColBurger from '../../assets/img/colburger.png';

// Generic Error Message
const ErrorMessage = ({message, visible}) => {
    if (visible) {
        return (
            <div className={'Error-message'}>
                {message}
            </div>
        )
    } else { return null }
};

// 404 - NotFound!
const NotFound = () => (
    <div className={'Error-redirect'}>
        <h1>Oops! Sorry!</h1>
        <h2>The page you are looking for does not exist!</h2>
        <h3>Please stop messing with the paths, dumbass.</h3>
        <img src={ColBurger} alt={'Crying Burger :P'} />
    </div>
);

export {ErrorMessage, NotFound};
