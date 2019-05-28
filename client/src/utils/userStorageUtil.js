import {USER_AUTH} from '../constants/actionTypes';


export const setUserLS = (user) => {
    localStorage.setItem(USER_AUTH, JSON.stringify(user))
};

export const getUserLS = () => {
    return JSON.parse(localStorage.getItem(USER_AUTH))
};

export const removeUserLS = () => {
    localStorage.removeItem(USER_AUTH);
};