import {LOC, LOC_ERROR} from '../constants/actionTypes';

const initialState = {
    locationLoading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOC_ERROR:
            return {
                ...state,
                locationsError: true,
                locationLoading: false
            };
        case LOC:
            return {
                ...state,
                locations: action.payload,
                locationLoading: false
            };
        default:
            return state
    }
}