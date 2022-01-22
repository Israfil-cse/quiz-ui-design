import { useEffect, useState } from 'react';
import '../../sass/Home.scss';
import ProgrssBar from '../ProgessBar/ProgrssBar';
import QuizPage from '../QuizPage/QuizPage';
import quizData from '../../fakeData/fakeData.json';
import Result from '../Result/Result';




const Home = () => {

    const [QuizData, setQuizData] = useState([]);
    // console.log(QuizData);


    const [activeQuestion, setActiveQuestion] = useState(0)
    const [answers, setAnswers] = useState([]);
    const [step, setStep] = useState(2);

    const token = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIl9pZCI6IjYxZWMwMWQxNDc4OGEwMDRlZTNjN2Y0ZiIsInN0YXR1cyI6ImluX3Byb2dyZXNzIiwic3ViIjoiNjFlYzAxZDE0Nzg4YTAwNGVlM2M3ZjRmIiwiaWF0IjoxNjQyODU3MTE5LjQ5Nn0.JV9bx8OCMyOU0r-vMzZfdYULoHeUMrN_UC5-3zWvZMLSp6n8R8vwITp2vTtF8gRRv7H4VE2eA-iljYmWUjKsByXGW9YKoJaZe-lJcYfrTs13QgKnBa05G57KAiEjMLWVQqKS7b5JF_8esoM1i0-wVwzm0yvYe-4HZIUiDHElQ5fiV8-xoPslUCyOdUDZLyu1JRuWB5jRolLILAsAwV9CdIWuHegY_mdrgBbk7hlPaB5g4nLEpfwiMT14LetJATuTXWM3xxDpexrGVaC8bojbfPWoDgw7qtOshG2_u4Yut7HCQJNa3vQTFDbZPFww07hx6-akIV7y6trxamAWviJpmVCIBSefVnyLroz648bUlex-foUNIP--2zVjaXJelP0Fmnt3M8V5lV0kL-o1GHhWLJkkyVTUIrIe1cxX7p93CzQBvWWmjJhlk4Vkfg64-vKWc6x2QCc-3pv6h51wp3p-HOwTuSyW7C_rxhbHSgjlF8GKKuMERk5sScpXogE9c5RV3jfeswTRhmZ5UeQMtUNMEq63qhh04yXN-AuWfxUYadJh9NseKStYyF-Q0CgiKhanX-2M53YqXEVsF684_3G4hxOfCpLgn2wMmQZuVOHZ8gX7okHtjB-qgFJTmKeczC1vUkxTV90ECeqaWlwzUn7DsCMGg8C2mJF437bwVg_rgiw"

    // const api = "https://jsdude.com/api/unit/get-unit-content/quiz-task-quiz-israfil-?filterType=slug"

    const api2 = "https://jsdude.com/api/unit/get-unit-content/quiz-task-basic-quiz-1?filterType=slug"


    useEffect(() => {
        fetch(api2, {
            headers:
            {
                'Authorization': token
            }

        })
            .then(response => response.json())
            .then(result => {
                setQuizData(result);
                // console.log(result?.data[0]?.quizQuestionIdArray[check]);

            });
    }, [])



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
                    numberOfQuestions={QuizData?.data?.[0]?.quizQuestionIdArray?.length}
                    activeQuestion={activeQuestion}
                />

                {step === 2 &&
                    <QuizPage
                        data={QuizData?.data?.[0]?.quizQuestionIdArray[activeQuestion]}
                        numberOfQuestions={QuizData?.data?.[0]?.quizQuestionIdArray?.length}
                        activeQuestion={activeQuestion}
                        onAnswerUpdate={setAnswers}
                        results={answers}
                        onSetActiveQuestion={setActiveQuestion}
                        onSetStep={setStep}


                    />
                }

                {step === 3 && <Result

                    results={answers}
                    data={QuizData?.data?.[0]?.quizQuestionIdArray}
                    onCheck={CheckResultHandler}

                />}

            </div>
        </div>



    );
};

export default Home;