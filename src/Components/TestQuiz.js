import React, { useState } from 'react';
import q from './data/partAquestions'
import { Link } from 'react-router-dom';
import Options from './Options';



function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');

    const [result, setResult] = useState('');
    const [qualified, setQualified] = useState('');

    const handleAnswer1 = (userAnswer) => {
        setAnswer1(userAnswer);
        setCurrentQuestion(2);
    };
    const handleAnswer2 = (userAnswer) => {
        setAnswer2(userAnswer);
        setCurrentQuestion(3);
    };
    const handleAnswer3 = (userAnswer) => {
        setAnswer3(userAnswer);
        setCurrentQuestion(4);
    };
    
      const handleAnswer4 = (userAnswer) => {
        setAnswer4(userAnswer);
        setCurrentQuestion(5);
      };
    
      const calculateResult = () => {
        if (answer2 === 'yes' && answer4 === 'yes') {
            setResult('Not Quilified')&&setQualified('No');
        } else {
            setQualified('Yes')&&setResult('you are in');
        }
      };

    
    return (
        <div>
          {currentQuestion === 1 && (
            <div>
              <h2>Question 1</h2>
              <button onClick={() => handleAnswer1('yes')}>Yes</button>
              <button onClick={() => handleAnswer1('no')}>No</button>
            </div>
          )}
          {currentQuestion === 2 && (
            <div>
              <h2>Question 2</h2>
              <button onClick={() => handleAnswer2('yes')}>Yes</button>
              <button onClick={() => handleAnswer2('no')}>No</button>
            </div>
            )}
            {currentQuestion === 3 && (
            <div>
              <h2>Question 3</h2>
              <button onClick={() => handleAnswer3('yes')}>Yes</button>
              <button onClick={() => handleAnswer3('no')}>No</button>
            </div>
            )}
            {currentQuestion === 4 && (
            <div>
              <h2>Question 4</h2>
              <button onClick={() => handleAnswer4('yes')}>Yes</button>
              <button onClick={() => handleAnswer4('no')}>No</button>
            </div>
            )}
            {qualified == 'No' && (
                <div>
                    <h2>Not In , Return home? </h2>
                    <Link to='/'>Home</Link>
                </div>

            )}
          {result && <div>Your result: {result}</div>}
        </div>
      );
}

export default Quiz;


