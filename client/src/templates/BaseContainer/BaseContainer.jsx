import React from 'react';
import {Animated} from 'react-animated-css';
import './BaseContainer.scss';

export const BaseContainer = ({title, subtitle, children}) => {
    return (
        <div className={'BaseContainer'}>
            <Animated animationIn={'bounceIn'} animationOut={'slideOutRight'}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <div className={'BaseContainer-primary'}>
                    {children}
                </div>
            </Animated>
        </div>
    )
};
