import { ProfileMethods } from "./ProfileMethods";

const initialState = {
    user: {},
    isAuthenticated: false
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProfileMethods.GET_LOGIN_DETAILS:
            return state
        default:
            return state
    }
}