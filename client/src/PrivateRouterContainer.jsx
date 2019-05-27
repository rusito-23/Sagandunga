import React from 'react';
import {Redirect, Route} from 'react-router';
import {HOME, PROFILE} from './constants/appRoutes';
import {USER_AUTH} from './constants/actionTypes';


export function PrivateRoute ({ component: Component, ...rest }) {
    return (
    <Route {...rest} render={(props) => (
        localStorage.getItem(USER_AUTH)
            ? <Component {...props} />
            : <Redirect to={HOME} />
    )} />
)}

export function PublicRoute({ component: Component, ...rest }) {
    return (
    <Route {...rest} render={(props) => (
        !localStorage.getItem(USER_AUTH)
            ? <Component {...props} />
            : <Redirect to={PROFILE} />
    )} />
)}
