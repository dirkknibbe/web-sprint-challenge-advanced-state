import * as types from "../state/action-types";

import axios from "axios";

// ❗ You don't need to add extra action creators to achieve MVP
export const moveClockwise = (wheel) => {
  console.log("here is moveClockwise: ", wheel);
  return { type: types.MOVE_CLOCKWISE, payload: wheel };
};
export function moveCounterClockwise() {}

export function selectAnswer(id) {
  return { type: types.SET_SELECTED_ANSWER, payload: id };
}

export function setMessage(message) {
  return { type: types.SET_INFO_MESSAGE, payload: message };
}

export function setQuiz(quiz) {
  return { type: types.SET_QUIZ_INTO_STATE, payload: quiz };
}

export function inputChange() {}

export function resetForm() {
  return { type: types.RESET_FORM };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    dispatch(resetForm());
    axios
      .get(`http://localhost:9000/api/quiz/next`)
      .then((res) => {
        dispatch(setQuiz(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
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
export function postQuiz(answer) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios
      .post(`http://localhost:9000/api/quiz/answer`, answer)
      .then((res) => {
        dispatch(setMessage(res.data.message));
        // set message and then fetch new quiz
        dispatch(fetchQuiz());
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
