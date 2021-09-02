import { combineReducers } from "redux";
import boxesReducer from "./boxes";
import userReducer from "./user";

export default combineReducers({
  boxes: boxesReducer,
  user: userReducer,
});
