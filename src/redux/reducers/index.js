import { combineReducers } from "redux";
import boxesReducer from "./boxes";
import userReducer from "./user";
import giftsReducer from "./gifts";

export default combineReducers({
  boxes: boxesReducer,
  user: userReducer,
  gifts: giftsReducer,
});
