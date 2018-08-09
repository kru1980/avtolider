import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStote from "./store/configureStore";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStote();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
