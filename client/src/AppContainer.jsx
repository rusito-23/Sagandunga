import React from 'react';

export default function AppContainer(props) {
    return (
        <div className='AppContainer'>
            {props.children}
        </div>
    )
}