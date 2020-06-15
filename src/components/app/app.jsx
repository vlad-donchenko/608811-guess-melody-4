import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {errorsCountTypes} from "../../types";

const App = (props) => {
  const {errorsCount} = props;

  return <WelcomeScreen errorsCount={errorsCount} />;
};

App.propTypes = {
  errorsCount: errorsCountTypes
};

export default App;
