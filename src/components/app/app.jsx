import React, {PureComponent} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import {errorsCountTypes, questionsType} from "../../types";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {errorsCount} = this.props;

    return (
      <WelcomeScreen errorsCount={errorsCount} onWelcomeButtonClick={() => {}}/>
    );
  }
}

App.propTypes = {
  errorsCount: errorsCountTypes,
  questions: questionsType
};

export default App;
