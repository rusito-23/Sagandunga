import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.sass';
import Home from './Modules/Home/Home.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home/>, document.getElementById('root'));

serviceWorker.unregister();
