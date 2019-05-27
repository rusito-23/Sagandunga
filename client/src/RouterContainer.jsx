import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import {Route, Switch} from 'react-router';
import { LocalizeProvider } from 'react-localize-redux';

// App Components
import AppContainer from './AppContainer';
import Home from './components/Home';
import Profile from './components/Profile';
import { NotFound } from './templates/ErrorMessages/ErrorMessages';

// App Constants
import {
    HOME, PROFILE
} from './constants/appRoutes';

export default function RouterContainer({ history }) {
    return (
        <ConnectedRouter history={history}>
            <LocalizeProvider>
                <AppContainer>
                    <Switch>
                        <Route exact path={HOME} component={Home} />
                        <Route exact path={PROFILE} component={Profile} />
                        <Route component={NotFound} />
                    </Switch>
                </AppContainer>
            </LocalizeProvider>
        </ConnectedRouter>
    );
}