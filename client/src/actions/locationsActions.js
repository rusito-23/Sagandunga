import axios from 'axios/index';
import {LOCATIONS} from '../constants/apiRoutes';
import {LOC, LOC_ERROR} from '../constants/actionTypes';

export const getLocations = () => {
    return dispatch => {
        return axios.get(LOCATIONS)
            .then((res) => {
                dispatch({
                    type: LOC,
                    payload: res.data
                })
            }).catch(() => {
                dispatch({
                    type: LOC_ERROR,
                })
            })
    }
};