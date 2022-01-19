import React from 'react';
import '../../sass/QuizPage.scss';

import fakeData from '../../fakeData/fakeData.json'
import QuizDisplay from './QuizDisplay';

const QuizPage = () => {
    return (
        <>
            <div className='quiz_container'>
                <h2>Which is a synonym of bellicose ? </h2>
            </div>

            <div>
                {
                    fakeData.map((item) => <QuizDisplay iteam ={item} key={item.answer}></QuizDisplay>)
                }
            </div>

        </>

    );
};

export default QuizPage;