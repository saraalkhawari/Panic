import React from "react";
import "../../App.css";
import Quiz from "../Quiz";
import background from "../Images/BGUpS.png";

function Questions() {
  return (
    <>
      <div>
        <img src={background} alt="background" className="background" />
        <Quiz />
      </div>
    </>
  );
}

export default Questions;
