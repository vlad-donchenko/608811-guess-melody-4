import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {errorsCountTypes, questionsType} from "../../types";

const handleWelcomeScreen = () => {};

const App = (props) => {
  const {errorsCount, questions} = props;

  return <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={handleWelcomeScreen} />;
};

App.propTypes = {
  errorsCount: errorsCountTypes,
  questions: questionsType
};

export default App;
