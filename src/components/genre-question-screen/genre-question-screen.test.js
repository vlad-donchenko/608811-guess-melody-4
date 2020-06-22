import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";
import {questionGenre} from "../../mocks-test/questions";

it(`Should render GenreQuestionScreen`, () => {
  const tree = renderer.create(<GenreQuestionScreen onAnswer={() => {}} question={questionGenre}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
