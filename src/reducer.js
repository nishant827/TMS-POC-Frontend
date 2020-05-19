import { combineReducers } from "redux";
import { ProfileReducer } from "./Profile/ProfileReducer";
import { loggedUser } from "./Profile/reducers/IsLogin";

export const rootReducer = combineReducers({
  ProfileReducer,
  loggedUser,
});
