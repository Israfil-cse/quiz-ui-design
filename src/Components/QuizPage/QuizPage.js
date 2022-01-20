import React from 'react';
import '../../sass/QuizPage.scss';
import QuizDisplay from './QuizDisplay';


const QuizPage = ({ data, onAnswerUpdate, numberOfQuestions , activeQuestion, onSetActiveQuestion}) => {

    return (
        <>
            <div className='quiz_container'>
                <QuizDisplay
                    data={data}
                    activeQuestion={activeQuestion}
                    onAnswerUpdate={onAnswerUpdate}
                    numberOfQuestions={numberOfQuestions}
                    onSetActiveQuestion={onSetActiveQuestion}
                />
            </div>

        </>

    );
};

export default QuizPage;