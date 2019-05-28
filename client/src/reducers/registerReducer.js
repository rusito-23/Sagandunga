import {REGISTRATION_ERROR, REGISTRATION_SUCCESS} from '../constants/actionTypes';

const initialState = {
    registrationSucess: false,
    registrationError: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_ERROR:
            return {
                ...state,
                registrationError: true,
                registrationErrorMessage: action.payload,
                registrationSuccess: false,
            };
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                registrationSuccess: true,
                registrationError: false,
            };
        default:
            return state
    }
}