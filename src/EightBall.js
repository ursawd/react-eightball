import "./EightBall.css";
import React, { useState } from "react";
//------------------------------------------------------------
function EightBall(props) {
  //-------------------------
  //----
  function giveAnswer() {
    const rand = Math.floor(Math.random() * 20);
    setAnswerMsg(answers[rand].msg);
    setAnswerColor(answers[rand].color);
  }
  //----
  const { answers } = props;
  const [answerMsg, setAnswerMsg] = useState("Think of a question...");
  const [answerColor, setAnswerColor] = useState("black");

  return (
    <div className="container">
      <h1>Magic Eightball</h1>
      <div
        id="eightball"
        style={{ backgroundColor: answerColor }}
        onClick={() => giveAnswer()}
      >
        <h3 id="question-answer">{answerMsg}</h3>
      </div>
    </div>
  );
}
//------------------------------------------------------------

export default EightBall;
