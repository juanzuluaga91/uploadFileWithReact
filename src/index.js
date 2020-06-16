import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootswatch/dist/flatly/bootstrap.min.css";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyDzxFbrqh9bRUnPL79gGp78xgnkhdr95-w",
  authDomain: "data-teller-d43a3.firebaseapp.com",
  databaseURL: "https://data-teller-d43a3.firebaseio.com",
  projectId: "data-teller-d43a3",
  storageBucket: "data-teller-d43a3.appspot.com",
  messagingSenderId: "45477434878",
  appId: "1:45477434878:web:2f280287a8cb24df41dcaf",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
