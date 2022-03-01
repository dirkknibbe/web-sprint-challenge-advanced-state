import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Wheel(props, dispatch) {
  // const handleMoveClockwise = (wheel) => {
  //   console.log("logging wheel inside handleMoveClockwise: ", wheel);
  //   if (props.wheel < 5) {
  //     wheel++;
  //   } else {
  //     wheel = 0;
  //   }
  //   return props.wheel;
  // };

  const { moveClockwise } = props;

  console.log("logging props here in Wheel: ", props);
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>
          B
        </div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn">Counter clockwise</button>
        <button onClick={() => dispatch(moveClockwise())} id="clockwiseBtn">
          Clockwise
        </button>
      </div>
    </div>
  );
}

export default connect((state) => state, actionCreators)(Wheel);

{
  /* --i is a custom CSS property, no need to touch that nor the style object */
}
