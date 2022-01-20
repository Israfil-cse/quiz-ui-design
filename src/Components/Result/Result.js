import React, { useEffect, useState } from 'react';
import '../../sass/End.scss';
import '../../sass/QuizDisplay.scss';


const Result = ({ results, data, onAnswersCheck,onCheck }) => {

  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card-container">
      <div className="content">

        <div className = "text-content">
          <h3>Your results</h3>
          <div className="total">
            <h2>{correctAnswers} of {data.length}</h2>
          </div>
        </div>

        <div className="quiz-btn">
          <button className="ans_btn" onClick={onCheck}>Check your answers</button>
        </div>

      </div>
    </div>


  );
}

export default Result;