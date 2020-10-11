import React from "react";
import ReactDOM from "react-dom";
import "./App/style/App.css";
import App from "./App";
import Store from "./App/Store/Store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  //! uncomment later
  // <React.StrictMode>
  <Store>
    <App />
  </Store>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
