import { combineReducers } from "redux";
import UserReducer from "./userReducer/UserReducer"

const RootReducers = combineReducers({
  UserReducer,
});

export default RootReducers;