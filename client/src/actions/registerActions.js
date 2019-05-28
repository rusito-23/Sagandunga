import axios from 'axios';
import {REGISTER_CONSUMER, REGISTER_PROVIDER} from '../constants/apiRoutes';
import {REGISTRATION_ERROR, REGISTRATION_SUCCESS} from '../constants/actionTypes';

const register = (path, entity) => {
    return dispatch => {
        return axios.post(path, entity)
            .then(() => {
                window.location.reload();
                return dispatch({
                    type: REGISTRATION_SUCCESS
                })
            }).catch(err => {
                console.error(err);
                const message = err.response ?
                    err.response.data : 'An error ocurred, we are sorry';
                return dispatch({
                    type: REGISTRATION_ERROR,
                    payload: message
                })
            })
    }
};

export const consumerRegister = (consumer, history) => {
    return register(REGISTER_CONSUMER, consumer, history)
};

export const providerRegister = (provider, history) => {
    return register(REGISTER_PROVIDER, provider, history)
};

