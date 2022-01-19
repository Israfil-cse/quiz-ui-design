import React, { useEffect, useRef, useState } from 'react';
import '../../sass/QuizDisplay.scss';

const QuizDisplay = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();
    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if (error) {
            setError('');
        }
    }

    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }


    return (

        <div className="">
            <div>
                <h2 className="mb-5">{data.question}</h2>
            </div>

            <div className="" ref={radiosWrapper}>

                {data.choices.map((choice, i) => (
                    <div className="quiz_container">
                        <label className="quiz_iteam" key={i}>
                            <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                            <span>{choice}</span>
                        </label>
                    </div>

                ))}

            </div>

            {error && <div className="has-text-danger">{error}</div>}

            <div className="quiz-btn ">
                <button >Previous</button>
                <button className="next_btn" onClick={nextClickHandler}>Next</button>
            </div>


        </div>
    );
};

export default QuizDisplay;