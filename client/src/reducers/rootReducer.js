import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import history from '../utils/historyUtils';

// reducers import
import userAuthReducer from './userAuthReducer';
import locationsReducer from './locationsReducer';
import registerReducer from './registerReducer';
import homeReducer from './homeReducer';

export default combineReducers({
    router: connectRouter(history),
    userAuthReducer,
    locationsReducer,
    registerReducer,
    homeReducer,
});