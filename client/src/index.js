import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './assets/style/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
