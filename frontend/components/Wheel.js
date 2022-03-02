import React from "react";
import { connect } from "react-redux";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";

export function Wheel(props) {
  const wheelPosition = props.wheel;
  const { dispatch } = props;

  console.log("logging props here in Wheel: ", props.wheel);
  return (
    <div id="wrapper">
      <div id="wheel">
        <div
          className={`cog${wheelPosition === 0 ? " active" : ""}`}
          style={{ "--i": 0 }}
        >
          {wheelPosition === 0 ? "B" : ""}
        </div>
        <div
          className={`cog${wheelPosition === 1 ? " active" : ""}`}
          style={{ "--i": 1 }}
        >
          {wheelPosition === 1 ? "B" : ""}
        </div>
        <div
          className={`cog${wheelPosition === 2 ? " active" : ""}`}
          style={{ "--i": 2 }}
        >
          {wheelPosition === 2 ? "B" : ""}
        </div>
        <div
          className={`cog${wheelPosition === 3 ? " active" : ""}`}
          style={{ "--i": 3 }}
        >
          {wheelPosition === 3 ? "B" : ""}
        </div>
        <div
          className={`cog${wheelPosition === 4 ? " active" : ""}`}
          style={{ "--i": 4 }}
        >
          {wheelPosition === 4 ? "B" : ""}
        </div>
        <div
          className={`cog${wheelPosition === 5 ? " active" : ""}`}
          style={{ "--i": 5 }}
        >
          {wheelPosition === 5 ? "B" : ""}
        </div>
      </div>
      <div id="keypad">
        <button
          id="counterClockwiseBtn"
          onClick={() => dispatch(moveCounterClockwise())}
        >
          Counter clockwise
        </button>
        <button id="clockwiseBtn" onClick={() => dispatch(moveClockwise())}>
          Clockwise
        </button>
      </div>
    </div>
  );
}

export default connect((state) => state)(Wheel);

{
  /* --i is a custom CSS property, no need to touch that nor the style object */
}
