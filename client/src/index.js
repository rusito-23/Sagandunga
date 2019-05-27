import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './assets/style/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store';

render((
    <Provider store={configureStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));

serviceWorker.unregister();
