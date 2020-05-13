const userObj = {
    user: null,
    isLogged: false

}

export const loggedUser = (state = userObj, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {...userObj, user: action.payload, isLogged: true}
        case "SIGN_OUT":

            return {...userObj, user: null, isLogged: false};
        default:
            return state;
    }
}
