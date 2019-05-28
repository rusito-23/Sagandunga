import React from 'react';
import './Loading.scss';

export default () => {
    return (
        <div className="Spinner">
            <div className="Spinner-double-bounce-first"/>
            <div className="Spinner-double-bounce-second"/>
        </div>
    )
}
