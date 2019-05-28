import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Redirect, Route, Switch} from 'react-router';
import {LocalizeProvider} from 'react-localize-redux';
import AppContainer from './AppContainer';
import Home from './components/Home';
import Profile from './components/Profile';
import {NotFound} from './templates/Messages/ErrorMessages';
import {USER_AUTH} from './constants/actionTypes';
import {
    HOME, PROFILE
} from './constants/appRoutes';


function PrivateRoute({component: Component, ...rest}) {
    const next = (props) => (
        localStorage.getItem(USER_AUTH)
            ? <Component {...props} />
            : <Redirect to={HOME}/> );

    return (<Route {...rest} render={next}/>)
}

function PublicRoute({component: Component, ...rest}) {
    const next = (props) => (
        !localStorage.getItem(USER_AUTH)
            ? <Component {...props} />
            : <Redirect to={PROFILE}/> );

    return (<Route {...rest} render={next}/>)
}

export default function RouterContainer({history}) {
    return (
        <ConnectedRouter history={history}>
            <LocalizeProvider>
                <AppContainer>
                    <Switch>
                        <PublicRoute exact path={HOME} component={Home}/>
                        <PrivateRoute exact path={PROFILE} component={Profile}/>
                        <Route component={NotFound}/>
                    </Switch>
                </AppContainer>
            </LocalizeProvider>
        </ConnectedRouter>
    );
}