import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Quiz(props) {
  useEffect(() => {
    props.fetchQuiz();
  }, []);

  const handleClick = (id) => {
    props.selectAnswer(id);
  };

  const handleSubmit = () => {
    props.postQuiz({
      quiz_id: props.quiz.quiz_id,
      answer_id: props.selectedAnswer,
    });
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.quiz ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.quiz.answers[0].text}
                <button
                  onClick={() => handleClick(props.quiz.answers[0].answer_id)}
                >
                  {props.quiz.answers[0].answer_id === props.selectedAnswer
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>

              <div className="answer">
                {props.quiz.answers[1].text}
                <button
                  onClick={() => handleClick(props.quiz.answers[1].answer_id)}
                >
                  {props.quiz.answers[1].answer_id === props.selectedAnswer
                    ? "SELECTED"
                    : "Select"}
                </button>
              </div>
            </div>

            <button onClick={() => handleSubmit()} id="submitAnswerBtn">
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}
export default connect((state) => state, actionCreators)(Quiz);
