import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/End.scss';
import '../../sass/QuizDisplay.scss';


const Result = ({ data, historyData }) => {

  return (
    <div className="card-container">
      <div className="content">


        <div className="text-content">
          <div>
            <img src={`https://jsdude.com/static/media/winner-trophy.0b6b551f.svg`} width="100px" alt="" />
          </div>
          <h3>Your results</h3>
          <div className="total">
            <h2>{historyData?.data?.obtainMark} / {historyData?.data?.mark}</h2>
          </div>
        </div>




        <div className="quiz-btn">
          <Link to='/checkOut'>
            <button className="ans_btn" >Check your answers</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Result;