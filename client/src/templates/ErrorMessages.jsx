import React from 'react';

const ErrorMessage = ({message, visible}) => {
    if (visible) {
        return (
            <div className={'error-message'}>
                {message}
            </div>
        )
    } else { return null }
};
export default ErrorMessage;
