import React, { useEffect, useRef, useState } from 'react';
import '../../sass/QuizDisplay.scss';
import QuizData from '../../fakeData/fakeData.json';

const QuizDisplay = ({ data, numberOfQuestions, activeQuestion, onSetActiveQuestion, onAnswerUpdate, results, onSetStep, }) => {

    const [selected, setSelected] = useState([]);
    const [error, setError] = useState('');
    const checkboxref = useRef(null);
    const token = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIl9pZCI6IjYxZTdhNWUzZWFjOTU2MGYwMDlkM2VmYiIsInN0YXR1cyI6ImluX3Byb2dyZXNzIiwic3ViIjoiNjFlN2E1ZTNlYWM5NTYwZjAwOWQzZWZiIiwiaWF0IjoxNjQyNTcyMDgzLjAwOH0.KlwsNNEkSYwVizlQV7LcXQv0qDJwjhC_uF5wKcYpWr4ppRc1qGVdPD6IIAFab3ryvYw1XZfF7itVbRob_ZuuI8KqlSafhkr4WnvHI1_B_1dSLmIqHIv0WgyVENzEzBQ1gea_3jopnjOP7ZHp-Wepy9KZcpnaFJP6_YubJ96MNOhYMGApMUDbQWfpkg_qAg_9GLCmNxBy3FZZJYBWCqn9ZsBaplrhqDNNWRnryxj2rw_oTQcEu36FSaJZAQDSGPsfZ2IyhH7C6XqmL5Wz5ZkwoPtZY711WDVvM91RMDveN9BuUqrkCljr4DqRjlECENVK6882Ezf4syxwQm08SGhSjbY0ncQ3t1K-dfrIQumFphgFHkm7Rj5dd8vpdhZAakZGpDgou0wX5WPe3_9xIXnNdN6V3m_LHEKkdV_dX6N_GOO7sxeU-nXVrvBg70E9CfFse4AlyM6oYAB7vl1q9ufcYuG-y8z1VKBSGtOzR2xbsOPo_uOVm_DhOhtmcjhwbcGIIaQugo9t5vCJPaA_rRYn7ho5irWsb9LzcefbFwtRIbu-kVqHfNrkaO0z34GO0TPFnM6BJnc7PP6Z_S5M1YF7M5yMwK5GClcEyCuu_VEdhtH-M5ylqaEWuwZKnVL5pUQoVHaNG_chHO6SrR31eSKYlZT7YQ384ixOsgUiMCBkrps"

    const postResult = {

        "unitId": data?.unitId,
        "quizList": selected,
        "courseId": data?.courseId

    }



    useEffect(() => {
        const findCheckedInput = checkboxref.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);


    const changeHandler = (e) => {

        // const isGiven = selected.find(answer => answer.questionId === data?._id);
        // if (isGiven) {
        //     const removedPreviousAnswer = selected.filter(answer => answer.questionId !== data?._id);
        //     const newSelectedAnswer = [...removedPreviousAnswer, currentAnswer];
        //     setSelectedAnswer(newSelectedAnswer)
        // } else {
        //     setSelected(preValue => [...preValue, currentAnswer])
        // }


        const id = data?._id;
        const indexNum = e;

        const newAns = { "questionId": id, "answer": indexNum }
        const newData = [...selected, newAns]
        setSelected(newData);

        if (error) {
            setError('');
        }
    }



    const nextClickHandler = () => {

        if (selected === '') {
            return setError('Please select one option!');

        }

        if (activeQuestion < numberOfQuestions) {
            setSelected('')
            onSetActiveQuestion(activeQuestion + 1);
        }

        onAnswerUpdate(prevState => [...prevState, { qus: data.question, ans: selected }]);


        if (activeQuestion === numberOfQuestions - 1) {
            fetch("https://jsdude.com/api/quiz/quiz-history", {
                method: "POST",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(postResult)
            })
                .then(res => res.json())
                .then(result => {
                    alert("data submitted successfully")
                })
            onSetStep(3)
        }

    }


    const PrevClickHadler = (e) => {
        if (activeQuestion < numberOfQuestions) {
            onSetActiveQuestion(activeQuestion - 1);
        }
    }


    return (

        <div>
            <div>
                <div className="title">
                    <p dangerouslySetInnerHTML={{ __html: data?.question }} />
                </div>

                <div ref={checkboxref}>

                    {
                        data?.options.map((choice, i) => (

                            <div className=" quiz_container" key={i}>

                                <label className="quiz_iteam" >
                                    <input type="radio" name="answer" value={choice} onChange={() => changeHandler(i)} />
                                    <span >{choice}</span>
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
                        <button className="next_btn" onClick={nextClickHandler}>Submit</button>
                        :
                        <button className="next_btn" onClick={nextClickHandler}>Next</button>

                }



            </div>

        </div>
    );
};

export default QuizDisplay;