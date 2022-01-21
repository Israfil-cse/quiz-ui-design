import React, { useEffect, useRef, useState } from 'react';
import '../../sass/QuizDisplay.scss';

const QuizDisplay = ({ data, numberOfQuestions, activeQuestion, onSetActiveQuestion, onAnswerUpdate, results, onSetStep, onCheck }) => {

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const checkboxref = useRef(null);

    useEffect(() => {
        const findCheckedInput = checkboxref.current.querySelector('input:checked');
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
        if (activeQuestion < numberOfQuestions) {

            onSetActiveQuestion(activeQuestion + 1);
        }


        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');


    }


    const PrevClickHadler = (e) => {

        if (activeQuestion < numberOfQuestions) {

            onSetActiveQuestion(activeQuestion - 1);
        }


    }

    const handleSubmit = () => {
        onSetStep(3)

    }


    // const {data} = onCheck;
    // const checkRightAns = onCheck[0]?.data;

    return (

        <div>


            <div>
                <div className="title">
                    <h2 className="mb-5">{data?.question}</h2>
                </div>

                <div ref={checkboxref}>

                    {
                        data.choices.map((choice, i) => (
                            <div className=" quiz_container" key={i}>
                                <label className="quiz_iteam" >
                                    <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                                    <span>{choice}</span>
                                </label>
                            </div>
                        ))}
                </div>
            </div>
            {error && <div className="error">{error}</div>}

            <div className="quiz-btn ">
                {activeQuestion !== 0 &&
                    <button onClick={PrevClickHadler} >Previous</button>
                }

                {
                    activeQuestion === numberOfQuestions - 1 ?
                        <button className="next_btn" onClick={handleSubmit}>Submit</button>
                        :
                        <button className="next_btn" onClick={nextClickHandler}>Next</button>

                }

            </div>

        </div>
    );
};

export default QuizDisplay;