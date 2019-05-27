export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                loginError: true
            };
        case 'USER_AUTH':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
}