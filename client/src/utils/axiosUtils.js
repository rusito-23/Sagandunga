import {getUserLS} from './userStorageUtil';
import axios from 'axios';


export const axiosAuth = (method, path, data) => {
    return axios({
        method: method,
        url: path,
        headers: {
            authorization: getUserLS().token
        },
        data: data,
    })
};