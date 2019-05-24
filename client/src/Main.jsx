import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './modules/Home/Home';
import Profile from './modules/Profile/Profile';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
        </Switch>
    </main>
);

export default Main;