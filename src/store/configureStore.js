import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "../reducers";

const configureStore = preloadedState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware())
  );
  return store;
};

export default configureStore;
