import { combineReducers } from "redux";

import usersReducer from "./users";
import carsReducers from "./cars";
import commentsReducer from "./comments";

export default combineReducers({
  users: usersReducer,
  cars: carsReducers,
  comments: commentsReducer
});
