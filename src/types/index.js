import PropTypes from "prop-types";
import GameType from "../const";

const errorsCountTypes = PropTypes.number.isRequired;
const onWelcomeButtonClickType = PropTypes.func.isRequired;

const questionsType = PropTypes.array.isRequired;

const onAnswerType = PropTypes.func.isRequired;

const questionType = PropTypes.shape({
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
  genre: PropTypes.string.isRequired,
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
}).isRequired;

export {errorsCountTypes, onWelcomeButtonClickType, questionsType, questionType, onAnswerType};

