import {ITEMS_ERROR, ITEMS_SUCCESS, PROVIDERS_ERROR, PROVIDERS_SUCCESS} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case PROVIDERS_SUCCESS:
            return {
                ...state,
                providersError: false,
                providers: action.payload
            };
        case PROVIDERS_ERROR:
            return {
                ...state,
                providersError: true,
            };
        case ITEMS_SUCCESS:
            return {
                ...state,
                itemsError: false,
                items: action.payload
            };
        case ITEMS_ERROR:
            return {
                ...state,
                itemsError: true,
            };
        default:
            return state
    }
}