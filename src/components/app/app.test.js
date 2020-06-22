import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {questions} from "../../mocks-test/questions";

it(`Should render App`, () => {
  const tree = renderer.create(<App questions={questions} errorsCount={3}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
