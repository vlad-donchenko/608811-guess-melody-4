import PropTypes from "prop-types";
import GameType from "../const";

const errorsCountTypes = PropTypes.number.isRequired;
const onWelcomeButtonClickType = PropTypes.func.isRequired;

const questionsType = PropTypes.array.isRequired;

const onAnswerType = PropTypes.func.isRequired;

const questionGenreType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  genre: PropTypes.string.isRequired,
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
}).isRequired;

const questionArtistType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  })).isRequired,
  song: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })
}).isRequired;

export {errorsCountTypes, onWelcomeButtonClickType, questionsType, questionGenreType, questionArtistType, onAnswerType};

