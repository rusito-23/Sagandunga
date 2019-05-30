import axios from 'axios/index';
import {LOCATIONS} from '../constants/apiRoutes';
import {LOC, LOC_ERROR} from '../constants/actionTypes';

export const getLocations = () => {
    return dispatch => {
        return axios.get(LOCATIONS)
            .then((res) => {
                // check if not empty
                if(res.data.length === 0) {
                    return dispatch({
                        type: LOC_ERROR
                    })
                } else {
                    return dispatch({
                        type: LOC,
                        payload: res.data.map((item, index) => {
                            return {
                                key: index,
                                value: item.name,
                                label: item.name
                            }
                        })
                    })
                }
            }).catch(() => {
                dispatch({
                    type: LOC_ERROR,
                })
            })
    }
};