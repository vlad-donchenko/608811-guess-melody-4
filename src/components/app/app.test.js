import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`Should render App`, () => {
  const tree = renderer.create(<App errorsCount={3}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
