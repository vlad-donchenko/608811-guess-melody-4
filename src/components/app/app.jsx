import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {errorsCountTypes} from "../../types";

const handleWelcomeScreen = () => {};

const App = (props) => {
  const {errorsCount} = props;

  return <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={handleWelcomeScreen} />;
};

App.propTypes = {
  errorsCount: errorsCountTypes,
};

export default App;
