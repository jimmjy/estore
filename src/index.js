import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate} from 'redux-persist/integration/react';

import storeObj from "./redux/store";

import App from "./App";

ReactDOM.render(
  <Provider store={storeObj.store}>
    <PersistGate persistor={storeObj.persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
