import React from 'react';

// App Components
import RouterContainer from './RouterContainer';
import ReduxContainer from './ReduxContainer';

// Store and History
import store from './Store';
import history from './utils/historyUtils';

/**
 * Base container for the entire app.
 */
export default function RootContainer() {
    return (
        <ReduxContainer store={store}>
            <RouterContainer history={history} />
        </ReduxContainer>
    );
}