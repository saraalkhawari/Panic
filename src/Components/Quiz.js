import { useState } from "react";
import { quiz } from "./data/questions";
import "./Quiz.css";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0); //keep track of current question
  const [selectedAnswer, setSelectedAnswer] = useState(""); //which answer user has selected
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    answers: [],
  }); //to calculate total scores, correctAnswers, wrongAnswers.

  const [selectedMultiAnswer, setSelectedMultiAnswer] = useState([]);

  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion]; //starts with the first question

  const onClickNext = () => {
    if (choices.length == 2) {
      setSelectedAnswerIndex(null);
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
              answers: [...prev.answers, { question, answer: selectedAnswer }],
            }
          : {
              ...prev,
              wrongAnswers: prev.wrongAnswers + 1,
              answers: [...prev.answers, { question, answer: selectedAnswer }],
            }
      );
    } else {
      if (choices.length > 2) {
        setSelectedMultiAnswer([]);
        setResult((prev) => ({
          ...prev,
          answers: [...prev.answers, { question, answer: selectedMultiAnswer.map((i) => choices[i]).join(", ") }],
        }));
      }
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
      submitResult();
    }
  }; // upon clicking next

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const onMultiAnswerSelected = (answer, index) => {
    setSelectedMultiAnswer((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const submitResult = () => {
    console.log(result);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(questions.length)}</span>
          </div>
          <h2>{question}</h2>
          {choices.length == 2 ? (
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedAnswerIndex === index ? "selected-answer" : null}
                >
                  {answer}
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onMultiAnswerSelected(answer, index)}
                  key={answer}
                  className={selectedMultiAnswer.includes(index) ? "selected-answer" : null}
                >
                  {answer}
                </li>
              ))}
            </ul>
          )}
          <div className="flex-right" style={{ paddingBottom: 200 }}>
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null && selectedMultiAnswer.length === 0}>
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
