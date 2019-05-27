import axios from 'axios/index';

export const userLogin = state => {
    return dispatch => {
        return axios.post('/users/login', {
            user: {
                auth: state.username,
                password: state.password
            }
        }).then(res => {
            localStorage.setItem('token', res['user'].token);
            console.log(res);
        }).catch(err => {
            console.log(err);
            return dispatch({
                type: 'LOGIN_ERROR'
            });
        });
    }
};