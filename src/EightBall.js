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
    if (answerColor === "red") setCountRed(countRed + 1);
    if (answerColor === "green") setCountGreen(countGreen + 1);
    if (answerColor === "goldenrod") setCountGoldenrod(countGoldenrod + 1);
  }
  //----
  function reset() {
    setAnswerMsg("Think of a question...");
    setAnswerColor("black");
    setCountGoldenrod(0);
    setCountGreen(0);
    setCountRed(0);
  }
  //----
  const { answers } = props;
  const [answerMsg, setAnswerMsg] = useState("Think of a question...");
  const [answerColor, setAnswerColor] = useState("black");
  const [countRed, setCountRed] = useState(0);
  const [countGreen, setCountGreen] = useState(0);
  const [countGoldenrod, setCountGoldenrod] = useState(0);

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
      <button id="reset-btn" onClick={reset}>
        Reset
      </button>
      <p>Red:{countRed}</p>
      <p>Green:{countGreen}</p>
      <p>Goldenrod:{countGoldenrod}</p>
    </div>
  );
}
//------------------------------------------------------------

export default EightBall;
