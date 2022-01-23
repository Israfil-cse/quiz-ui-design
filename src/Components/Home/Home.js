import { useEffect, useState } from 'react';
import '../../sass/Home.scss';
import ProgrssBar from '../ProgessBar/ProgrssBar';
import QuizPage from '../QuizPage/QuizPage';
// import quizData from '../../fakeData/fakeData.json';
import Result from '../Result/Result';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";


const Home = () => {

    const [QuizData, setQuizData] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [answers, setAnswers] = useState([]);
    const [historyData, setHistoyData] = useState([]);
    const uId = QuizData?.data?.[0]?.unitId;
    const [progessber , setProgessber] = useState(0);
    const [historyQuz , setHistoryQuz] = useState(0);



    const token = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIl9pZCI6IjYxZWMwMWQxNDc4OGEwMDRlZTNjN2Y0ZiIsInN0YXR1cyI6ImluX3Byb2dyZXNzIiwic3ViIjoiNjFlYzAxZDE0Nzg4YTAwNGVlM2M3ZjRmIiwiaWF0IjoxNjQyODU3MTE5LjQ5Nn0.JV9bx8OCMyOU0r-vMzZfdYULoHeUMrN_UC5-3zWvZMLSp6n8R8vwITp2vTtF8gRRv7H4VE2eA-iljYmWUjKsByXGW9YKoJaZe-lJcYfrTs13QgKnBa05G57KAiEjMLWVQqKS7b5JF_8esoM1i0-wVwzm0yvYe-4HZIUiDHElQ5fiV8-xoPslUCyOdUDZLyu1JRuWB5jRolLILAsAwV9CdIWuHegY_mdrgBbk7hlPaB5g4nLEpfwiMT14LetJATuTXWM3xxDpexrGVaC8bojbfPWoDgw7qtOshG2_u4Yut7HCQJNa3vQTFDbZPFww07hx6-akIV7y6trxamAWviJpmVCIBSefVnyLroz648bUlex-foUNIP--2zVjaXJelP0Fmnt3M8V5lV0kL-o1GHhWLJkkyVTUIrIe1cxX7p93CzQBvWWmjJhlk4Vkfg64-vKWc6x2QCc-3pv6h51wp3p-HOwTuSyW7C_rxhbHSgjlF8GKKuMERk5sScpXogE9c5RV3jfeswTRhmZ5UeQMtUNMEq63qhh04yXN-AuWfxUYadJh9NseKStYyF-Q0CgiKhanX-2M53YqXEVsF684_3G4hxOfCpLgn2wMmQZuVOHZ8gX7okHtjB-qgFJTmKeczC1vUkxTV90ECeqaWlwzUn7DsCMGg8C2mJF437bwVg_rgiw"

    const api = "https://jsdude.com/api/unit/get-unit-content/quiz-task-basic-quiz-1?filterType=slug"


    useEffect(() => {
        fetch(api, {
            headers:
            {
                'Authorization': token
            }

        })
            .then(response => response.json())
            .then(result => {
                setQuizData(result);
            });
    }, [])


    
    
    useEffect(() => {
        if (uId) {
            fetch(`https://jsdude.com/api/quiz/quiz-history/${uId}`, {
                headers: {
                    Authorization: token
                }
            })
                .then(res => res.json())
                .then(result => setHistoyData(result))
        }


        // eslint-disable-next-line
    }, [uId]);









    return (

        <div className="home_container">
            <div className="content_aria">
                <BrowserRouter>

                    <Switch>

                        <Route exact path='/'>
                        
                            {historyData?.data === null ?
                                <QuizPage
                                    QzData={QuizData?.data?.[0]?.quizQuestionIdArray[activeQuestion]}
                                    numberOfQuestions={QuizData?.data?.[0]?.quizQuestionIdArray?.length}
                                    activeQuestion={activeQuestion}
                                    onSetActiveQuestion={setActiveQuestion}
                                    onAnswerUpdate={setAnswers}
                                    results={answers}
                                    token={token}
                                    onSetProgress={setProgessber}
                                    progess={progessber}

                                />
                                :

                                <Result
                                    results={answers}
                                    data={QuizData?.data?.[0]?.quizQuestionIdArray}
                                    historyData={historyData}
                                />
                            }
                        </Route>

                        <Route path="/checkOut">
                            <QuizPage
                                QzData={QuizData?.data?.[0]?.quizQuestionIdArray[activeQuestion]}
                                numberOfQuestions={QuizData?.data?.[0]?.quizQuestionIdArray?.length}
                                activeQuestion={activeQuestion}
                                onSetActiveQuestion={setActiveQuestion}
                                onAnswerUpdate={setAnswers}
                                results={answers}
                                token={token}
                                onSetProgress={setProgessber}
                                progess={progessber}
                                historyData={historyData?.data?.quizList[historyQuz]}
                                onsetHistoryQuz = {setHistoryQuz}
                                historyQuz={historyQuz}

                            />
                        </Route>
                    </Switch>
                </BrowserRouter>





            </div>
        </div>
    );
};

export default Home;