import React, { useEffect, useRef, useState } from 'react';
import '../../sass/QuizDisplay.scss';


const QuizDisplay = ({ choice, OnChangeHandler, QzIndex, ref, numberOfQuestions, activeQuestion, onSetActiveQuestion, onAnswerUpdate, results, onSetStep, historyData }) => {
    const isCorrect = historyData?.correctIndex === QzIndex;
    const isWrong = historyData?.wrongIndex === QzIndex;

    return (

        <div>
            <div className='quiz_container'>

                <label className={`quiz_iteam ${isCorrect && "sucess" || isWrong && "hidden"}`} style={{pointerEvents: historyData && "none"}}>
                    <div>
                        <input type="radio" name="answer" value={choice} onChange={() => OnChangeHandler(QzIndex)} />
                    </div>
                    <div className='content'>
                        <p>{choice}</p>
                    </div>
                </label>

            </div>
        </div>

    );
};

export default QuizDisplay;