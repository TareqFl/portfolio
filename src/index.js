import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import reducers from "./Reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
