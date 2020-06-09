import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const ERROR_COUNT = 3;

const init = () => {
  ReactDOM.render(<App errorsCount={ERROR_COUNT}/>, document.querySelector(`#root`));
};

init();
