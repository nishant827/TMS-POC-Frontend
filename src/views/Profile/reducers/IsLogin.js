const userObj = {
  user: null,
  isLogged: false,
};

export const loggedUser = (state = userObj, action) => {
  switch (action.type) {
    case "SIGN_IN": {
      console.log(state, "check state ::::00", action.payload);
      return { ...state, user: action.payload, isLogged: true };
    }
    case "SIGN_OUT":
      return { ...state, user: null, isLogged: false };
    case "PROFILE_DATA":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
        isLogged: true,
      };
    default:
      return state;
  }
};
