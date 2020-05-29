export const signIn = (userData) => {
  return {
    type: "SIGN_IN",
    payload: userData
  };
};
export const signOut = () => {
  console.log("calling signout function");
  return {
    type: "SIGN_OUT",
  };
};

export const profileData = (userData) => {
  return {
    type: "PROFILE_DATA",
    payload: userData
  };
};
