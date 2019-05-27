import {combineReducers} from 'redux';
import userAuthReducer from './userAuthReducer';
import {connectRouter} from 'connected-react-router';
import history from '../history';

export default combineReducers({
    router: connectRouter(history),
    userAuthReducer
});