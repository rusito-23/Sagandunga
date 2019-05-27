import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './modules/Home/Home';
import Profile from './modules/Profile/Profile';
import { NotFound } from './templates/ErrorMessages/ErrorMessages';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='*' component={NotFound} />
        </Switch>
    </main>
);

export default Main;