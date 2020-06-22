import React from "react";
import renderer from "react-test-renderer";
import ArtistQuestionScreen from "./artist-question-screen.jsx";
import {questionArtistType} from "../../types";

it(`Should render ArtistQuestionScreen`, () => {
  const tree = renderer.create(<ArtistQuestionScreen question={questionArtistType} onAnswer={() => {
  }}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
