import * as types from "../state/action-types";

import axios from "axios";

// ❗ You don't need to add extra action creators to achieve MVP
export const moveClockwise = (props) => (dispatch) => {
  if (props.wheel < 5) {
    props.wheel++;
  } else {
    props.wheel = 0;
  }
  dispatch({ type: types.MOVE_CLOCKWISE, payload: props.wheel });
};
export function moveCounterClockwise() {}

export function selectAnswer() {}

export function setMessage() {}

export function setQuiz() {}

export function inputChange() {}

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
