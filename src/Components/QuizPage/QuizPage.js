import React, { useEffect, useRef, useState } from 'react';
import '../../sass/QuizPage.scss';
import QuizDisplay from './QuizDisplay';
import parse from 'html-react-parser';
import ProgrssBar from '../ProgessBar/ProgrssBar';
import { useLocation } from 'react-router-dom';


const QuizPage = ({ QzData, activeQuestion, onSetActiveQuestion, onAnswerUpdate, numberOfQuestions, results, token, onSetProgress, progess, historyData, onsetHistoryQuz, historyQuz, lodding }) => {



    const [selectItem, setSeleteItem] = useState([])
    const checkboxref = useRef(null);
    const location = useLocation();



    useEffect(() => {
        const findCheckedInput = checkboxref.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [QzData]);


    const OnChangeHandler = (e) => {


        const id = QzData?._id;
        const indexNum = e;

        const newAns = { "questionId": id, "answer": indexNum }
        const newData = [newAns]
        setSeleteItem(newData);

        onAnswerUpdate(prevState => [...prevState, { qus: QzData.question, ans: selectItem }]);

    }



    const NextBtnHandler = () => {
        onSetActiveQuestion(activeQuestion + 1);
    }



    const PrevBtnHandler = () => {
        onSetActiveQuestion(activeQuestion - 1);
        onSetProgress(progess - 1)
        onsetHistoryQuz(historyQuz - 1)
    }

    const ProProgressBarHandler = () => {
        onSetProgress(progess + 1)
        onsetHistoryQuz(historyQuz + 1)
    }



    const postResult = {

        "unitId": QzData?.unitId,
        "quizList": results,
        "courseId": QzData?.courseId

    }

    const HandleSubmit = () => {

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
                if (result?.data) {
                    alert("data submitted successfully")
                } else {
                    alert('sorry!! data already submitted')
                }

            })
    }



    return (
        <div className="quiz-page-container">

            <ProgrssBar
                numberOfQuestions={numberOfQuestions}
                activeQuestion={activeQuestion}
                progess={progess}
            />
            {lodding ?
                <p className ='loading_text' >loding......</p>
                :
                <p className="title">
                    {parse(`${QzData?.question}`)}
                </p>
            }



            <div ref={checkboxref} className='quiz_content'>
                {
                    QzData?.options?.map((choice, i) => (
                        <div key={i} >

                            <QuizDisplay
                                choice={choice}
                                QzIndex={i}
                                activeQuestion={activeQuestion}
                                onSetActiveQuestion={onSetActiveQuestion}
                                OnChangeHandler={OnChangeHandler}
                                historyData={historyData}

                            />

                        </div>
                    ))
                }
            </div>


            <div className="btn-section">
                <div className="quiz-btn ">
                    {activeQuestion !== 0 &&
                        <button onClick={PrevBtnHandler} >Previous</button>
                    }

                    {
                        activeQuestion === numberOfQuestions - 1 ?

                            <div>
                                {location.pathname === ("/checkOut") ? <span></span>

                                    :
                                    <button className="next_btn" onClick={() => { HandleSubmit(); ProProgressBarHandler() }} >Submit</button>
                                }
                            </div>
                            :

                            <button className="next_btn" onClick={() => { NextBtnHandler(); ProProgressBarHandler() }} >Next</button>


                    }
                </div>


            </div>


        </div>

    );
};

export default QuizPage;