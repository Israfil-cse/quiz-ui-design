import React, { useContext, useState } from 'react';
import '../../sass/QuizPage.scss';

import quizData from '../../fakeData/fakeData.json'
import QuizDisplay from './QuizDisplay';
import { progressContext } from '../../App';



const QuizPage = () => {
    const [activeQuestion, setActiveQuestion] = useContext(progressContext);
    const [answers, setAnswers] = useState([]);

    return (
        <>
            <div className='quiz_container'>
                <QuizDisplay
                    data={quizData.data[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestions={quizData.data.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                />
            </div>

        </>

    );
};

export default QuizPage;