import React from 'react';
import {Provider} from 'react-redux';

export default function ReduxContainer({store, children}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
