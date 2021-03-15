// React imports
import React from "react";
import ReactDOM from "react-dom";
// Styles imports
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import App from './components/App';

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <App />,
  container
);
