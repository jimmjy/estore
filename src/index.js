import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import storeObj from "./redux/store";

import App from "./AppTwo";

ReactDOM.render(
  <Provider store={storeObj.store}>
    <Router>
      <PersistGate persistor={storeObj.persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
