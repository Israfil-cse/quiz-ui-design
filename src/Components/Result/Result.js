import React, { useEffect, useState } from 'react';
import '../../sass/End.scss';
import '../../sass/QuizDisplay.scss';


const Result = ({ data, onCheck }) => {
  const uId = data?.[0]?.unitId


  const [correctAnswers, setCorrectAnswers] = useState(0);
  console.log(correctAnswers?.data?.quizList?.length);



  const token = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIl9pZCI6IjYxZWMwMWQxNDc4OGEwMDRlZTNjN2Y0ZiIsInN0YXR1cyI6ImluX3Byb2dyZXNzIiwic3ViIjoiNjFlYzAxZDE0Nzg4YTAwNGVlM2M3ZjRmIiwiaWF0IjoxNjQyODU3MTE5LjQ5Nn0.JV9bx8OCMyOU0r-vMzZfdYULoHeUMrN_UC5-3zWvZMLSp6n8R8vwITp2vTtF8gRRv7H4VE2eA-iljYmWUjKsByXGW9YKoJaZe-lJcYfrTs13QgKnBa05G57KAiEjMLWVQqKS7b5JF_8esoM1i0-wVwzm0yvYe-4HZIUiDHElQ5fiV8-xoPslUCyOdUDZLyu1JRuWB5jRolLILAsAwV9CdIWuHegY_mdrgBbk7hlPaB5g4nLEpfwiMT14LetJATuTXWM3xxDpexrGVaC8bojbfPWoDgw7qtOshG2_u4Yut7HCQJNa3vQTFDbZPFww07hx6-akIV7y6trxamAWviJpmVCIBSefVnyLroz648bUlex-foUNIP--2zVjaXJelP0Fmnt3M8V5lV0kL-o1GHhWLJkkyVTUIrIe1cxX7p93CzQBvWWmjJhlk4Vkfg64-vKWc6x2QCc-3pv6h51wp3p-HOwTuSyW7C_rxhbHSgjlF8GKKuMERk5sScpXogE9c5RV3jfeswTRhmZ5UeQMtUNMEq63qhh04yXN-AuWfxUYadJh9NseKStYyF-Q0CgiKhanX-2M53YqXEVsF684_3G4hxOfCpLgn2wMmQZuVOHZ8gX7okHtjB-qgFJTmKeczC1vUkxTV90ECeqaWlwzUn7DsCMGg8C2mJF437bwVg_rgiw"


  useEffect(() => {
    fetch(`https://jsdude.com/api/quiz/quiz-history/${uId}`, {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(result => setCorrectAnswers(result))

    // eslint-disable-next-line
  }, []);

  return (
    <div className="card-container">
      <div className="content">

        <div className="text-content">
          <h3>Your results</h3>
          <div className="total">
            <h2>{correctAnswers?.data?.mark} of {correctAnswers?.data?.quizList?.length}</h2>
          </div>
        </div>

        <div className="quiz-btn">
          <button className="ans_btn" onClick={onCheck}>Check your answers</button>
        </div>

      </div>
    </div>
  );
}

export default Result;