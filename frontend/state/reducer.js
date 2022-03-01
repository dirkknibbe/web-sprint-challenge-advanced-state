// ❗ You don't need to add extra reducers to achieve MVP
import * as types from "../state/action-types";
import { combineReducers } from "redux";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      if (state.wheel < 5) {
        state.wheel++;
      } else {
        state.wheel = initialWheelState;
      }
      return action.payload;
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.RESET_FORM:
      return initialQuizState;

    case types.SET_QUIZ_INTO_STATE:
      return action.payload;
  }
  return state;
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state;
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  return state;
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  return state;
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
