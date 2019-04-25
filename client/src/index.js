import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import HomeRegister from './components/HomeRegister';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HomeRegister />, document.getElementById('root'));

serviceWorker.unregister();
