import { combineReducers } from "redux";
import { ProfileReducer } from "./views/Profile/ProfileReducer";
import { loggedUser } from "./views/Profile/reducers/IsLogin";

export const rootReducer = combineReducers({
  ProfileReducer,
  loggedUser,
});
