import {PROVIDERS_SUCCESS, PROVIDERS_ERROR, ITEMS_SUCCESS, ITEMS_ERROR} from '../constants/actionTypes';
import {ITEMS, PROVIDERS} from '../constants/apiRoutes';
import {PROVIDERS as PROV_PATH} from '../constants/appRoutes' ;
import {axiosAuth} from '../utils/axiosUtils';
import {GET} from '../constants/generalConstants';

export const getProviders = (history) => {
    return dispatch => {
        return axiosAuth(GET, PROVIDERS, {})
            .then((res) => {
                dispatch({
                    type: PROVIDERS_SUCCESS,
                    payload: res.data
                });
                history.push(PROV_PATH);
            }).catch(() => {
                return dispatch({
                    type: PROVIDERS_ERROR,
                })
            })
    }
};

export const getItemsForProvider = (history, provider) => {
    return dispatch => {
        return axiosAuth(GET, ITEMS, {
            providerUsername: provider.username
        }).then((res) => {
            return dispatch({
                type: ITEMS_SUCCESS,
                payload: res.data
            })
        }).catch(() => {
            return dispatch({
                type: ITEMS_ERROR,
            })
        })
    }
};