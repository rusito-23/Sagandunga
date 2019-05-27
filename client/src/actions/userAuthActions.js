import axios from 'axios/index';
import {LOGIN_ERROR, USER_AUTH} from "../constants/actionTypes";
import {LOGIN} from "../constants/apiRoutes";

export const userLogin = state => {
    return dispatch => {
        return axios.post(LOGIN,
            { user: {
                    auth: state.username,
                    password: state.password
            }
        }).then(res => {
            localStorage.setItem(USER_AUTH, res.data.user.token);
            dispatch({
                type: USER_AUTH,
                payload: res.data.user,
            });
        }).catch(() => {
            dispatch({
                type: LOGIN_ERROR
            });
        });
    }
};