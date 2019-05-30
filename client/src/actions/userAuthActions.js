import axios from 'axios/index';
import {LOGIN_ERROR, USER_AUTH} from '../constants/actionTypes';
import {LOGIN} from '../constants/apiRoutes';
import {USERS, HOME} from '../constants/appRoutes';
import {removeUserLS, setUserLS} from '../utils/userStorageUtil';

export const userLogin = (state, history) => {
    return dispatch => {
        return axios.post(LOGIN,
            {
                user: {
                    auth: state.username,
                    password: state.password
                }
        }).then(res => {
            setUserLS(res.data.user);
            dispatch({
                type: USER_AUTH,
                payload: res.data.user,
            });
            history.push(HOME);
        }).catch(() => {
            dispatch({
                type: LOGIN_ERROR
            });
        });
    }
};

export const userLogout = (hist) => {
    return () => {
        removeUserLS();
        hist.push(USERS);
    }
};