import React from 'react';
import {render} from 'react-dom';
import './assets/style/index.scss';
import * as serviceWorker from './serviceWorker';
import RootContainer from './RootContainer';

render(
    <RootContainer />,
    document.getElementById('root')
);

serviceWorker.unregister();
