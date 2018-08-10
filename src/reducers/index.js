import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import usersReducer from "./users";
import carsReducers from "./cars";
import commentsReducer from "./comments";

export default combineReducers({
  users: usersReducer,
  cars: carsReducers,
  comments: commentsReducer,
  form: formReducer
});
