import { combineReducers } from "redux";
import { userListReducer } from "./users-list.reducer";

const rootReducer = combineReducers({
  userListReducer
});

export default rootReducer;
