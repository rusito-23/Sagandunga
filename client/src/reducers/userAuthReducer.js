export default (state = {}, action) => {
    if (action.type === 'LOGIN_ERROR') {
        return {
            ...state,
            loginError: true
        };
    }
    return state
}