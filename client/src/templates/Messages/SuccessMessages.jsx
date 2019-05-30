import React from 'react';
import './Messages.scss';

// Generic Success Message
const SuccessMessage = ({message, visible}) => {
    if (visible) {
        return (
            <div className={'Messages-success'}>
                {message}
            </div>
        )
    } else { return null }
};

export {SuccessMessage}
