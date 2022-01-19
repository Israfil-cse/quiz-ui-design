import React from 'react';
import '../../sass/QuizDisplay.scss';

const QuizDisplay = (props) => {
    console.log(props.iteam);

    return (
        <div className='quiz_container'>
            <button className="quiz_iteam">
                <div className="iteam">
                    <input className="iteam" type="checkbox" name="answer" />
                </div>
                <div>
                    <span>Choice text here</span>
                </div>
            </button>
        
        </div>
    );
};

export default QuizDisplay;