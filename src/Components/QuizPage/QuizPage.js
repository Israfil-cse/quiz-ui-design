import React from 'react';
import '../../sass/QuizPage.scss';
import QuizDisplay from './QuizDisplay';


const QuizPage = ({ data, onAnswerUpdate, numberOfQuestions , activeQuestion, onSetActiveQuestion,results, onSetStep , onCheck }) => {
    // console.log(data);
    return (
        <>
            <div className='quiz_container'>
                <QuizDisplay
                    data={data}
                    activeQuestion={activeQuestion}
                    onAnswerUpdate={onAnswerUpdate}
                    numberOfQuestions={numberOfQuestions}
                    onSetActiveQuestion={onSetActiveQuestion}
                    results={results}
                    onSetStep={onSetStep}
                    onCheck ={onCheck}
                />
            </div>

        </>

    );
};

export default QuizPage;