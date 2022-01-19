import React from 'react';
import '../../sass/QuizPage.scss';

import fakeData from '../../fakeData/fakeData.json'
import QuizDisplay from './QuizDisplay';

const data = [
    {
        answer: 'mark zokerbag'
    },
    {
        answer: 'dark zokerbag'
    },
    {
        answer: 'pak zokerbag'
    },
    {
        answer: 'lack zokerbag'
    }
]

const QuizPage = () => {
    return (
        <>
            <div className='quiz_container'>
                <h2>Which is a synonym of bellicose ? </h2>
            </div>

            <div>
                {
                    data.map((item) => <QuizDisplay iteam={item} key={item.answer}></QuizDisplay>)
                }
            </div>

            <div className="quiz-btn ">
                <button >Previous</button>
                <button className ="next_btn">Next</button>
            </div>

        </>

    );
};

export default QuizPage;