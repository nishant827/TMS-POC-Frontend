import { combineReducers } from "redux";
import { ProfileReducer } from "./views/Profile/ProfileReducer";
import { loggedUser } from "./views/Profile/reducers/IsLogin";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["loggedUser"]
}

const rootReducer = combineReducers({
  ProfileReducer,
  loggedUser,
});

export default persistReducer(persistConfig, rootReducer);