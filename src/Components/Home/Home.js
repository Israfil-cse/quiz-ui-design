import { useEffect, useState } from 'react';
import '../../sass/Home.scss';
import ProgrssBar from '../ProgessBar/ProgrssBar';
import QuizPage from '../QuizPage/QuizPage';
import quizData from '../../fakeData/fakeData.json';
import Result from '../Result/Result';




const Home = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [answers, setAnswers] = useState([]);
    console.log(answers);
    const [step, setStep] = useState(2);



    // useEffect(() => {
    //     fetch("http://jsdude.com/api/unit/get-unit-content/quiz-task-basic-quiz-1?filterType=slug", {
    //         headers: 
    //             {
    //             'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIl9pZCI6IjYxZTdhNWUzZWFjOTU2MGYwMDlkM2VmYiIsInN0YXR1cyI6ImluX3Byb2dyZXNzIiwic3ViIjoiNjFlN2E1ZTNlYWM5NTYwZjAwOWQzZWZiIiwiaWF0IjoxNjQyNTcyMDgzLjAwOH0.KlwsNNEkSYwVizlQV7LcXQv0qDJwjhC_uF5wKcYpWr4ppRc1qGVdPD6IIAFab3ryvYw1XZfF7itVbRob_ZuuI8KqlSafhkr4WnvHI1_B_1dSLmIqHIv0WgyVENzEzBQ1gea_3jopnjOP7ZHp-Wepy9KZcpnaFJP6_YubJ96MNOhYMGApMUDbQWfpkg_qAg_9GLCmNxBy3FZZJYBWCqn9ZsBaplrhqDNNWRnryxj2rw_oTQcEu36FSaJZAQDSGPsfZ2IyhH7C6XqmL5Wz5ZkwoPtZY711WDVvM91RMDveN9BuUqrkCljr4DqRjlECENVK6882Ezf4syxwQm08SGhSjbY0ncQ3t1K-dfrIQumFphgFHkm7Rj5dd8vpdhZAakZGpDgou0wX5WPe3_9xIXnNdN6V3m_LHEKkdV_dX6N_GOO7sxeU-nXVrvBg70E9CfFse4AlyM6oYAB7vl1q9ufcYuG-y8z1VKBSGtOzR2xbsOPo_uOVm_DhOhtmcjhwbcGIIaQugo9t5vCJPaA_rRYn7ho5irWsb9LzcefbFwtRIbu-kVqHfNrkaO0z34GO0TPFnM6BJnc7PP6Z_S5M1YF7M5yMwK5GClcEyCuu_VEdhtH-M5ylqaEWuwZKnVL5pUQoVHaNG_chHO6SrR31eSKYlZT7YQ384ixOsgUiMCBkrps`
    //          }

    //     })
    //         .then(response => response.json())
    //         .then(result => {
    //             setQuizData(result);

    //         });
    // }, [])

    const [checkAns , setCheckAns] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/listData')
    //     .then(response => response.json())
    //     .then(result => {
    //         setCheckAns(result);
    //     })
    // },[])


    let interval;
    useEffect(() => {
        if (step === 3) {
            clearInterval(interval);
        }
    }, [step]);

    const CheckResultHandler = () => {
        setActiveQuestion(0);
        setAnswers('');
        setStep(2);

        interval = setInterval(() => {

        }, 1000);
    }


    return (

        <div className="home_container">
            <div className="content_aria">
                <ProgrssBar
                    numberOfQuestions={quizData.data.length}
                    activeQuestion={activeQuestion}
                />

                {step === 2 &&
                    <QuizPage
                        data={quizData.data[activeQuestion]}
                        activeQuestion={activeQuestion}
                        onAnswerUpdate={setAnswers}
                        numberOfQuestions={quizData.data.length}
                        onSetActiveQuestion={setActiveQuestion}
                        results={answers}
                        onSetStep={setStep}
                        onCheck ={checkAns}

                    />
                }

                {step === 3 && <Result

                    results={answers}
                    data={quizData.data}
                    onCheck={CheckResultHandler}

                    />}

            </div>
        </div>



    );
};

export default Home;