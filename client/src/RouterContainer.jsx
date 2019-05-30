import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {Redirect, Route, Switch} from 'react-router';
import {LocalizeProvider} from 'react-localize-redux';
import AppContainer from './AppContainer';
import Home from './components/Home';
import Profile from './components/Profile';
import Users from './components/Users';
import ProvidersList from './components/Consumers/ProvidersList';
import {NotFound} from './templates/Messages/ErrorMessages';
import {
    HOME, USERS, PROFILE, PROVIDERS
} from './constants/appRoutes';
import Navbar from './templates/Nav';
import {getUserLS} from './utils/userStorageUtil';


function PrivateRoute({component: Component, ...rest}) {
    const next = (props) => (
        getUserLS()
            ? <Component {...props} />
            : <Redirect to={USERS}/> );

    return (
        <div>
            <Navbar />
            <Route {...rest} render={next}/>
            {/*// TODO: footer*/}
        </div>
    )
}

function PublicRoute({component: Component, ...rest}) {
    const next = (props) => (
        !getUserLS()
            ? <Component {...props} />
            : <Redirect to={HOME}/> );

    return (<Route {...rest} render={next}/>)
}

export default function RouterContainer({history}) {
    return (
        <ConnectedRouter history={history}>
            <LocalizeProvider>
                <AppContainer>
                    <Switch>
                        <PublicRoute exact path={USERS} component={Users}/>
                        <PrivateRoute exact path={PROFILE} component={Profile}/>
                        <PrivateRoute exact path={HOME} component={Home}/>
                        <PrivateRoute exact path={PROVIDERS} component={ProvidersList}/>
                        <Route component={NotFound}/>
                    </Switch>
                </AppContainer>
            </LocalizeProvider>
        </ConnectedRouter>
    );
}