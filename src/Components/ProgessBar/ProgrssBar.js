import { useLocation } from 'react-router-dom';
import '../../sass/ProgessBar.scss';

const ProgrssBar = ({numberOfQuestions, activeQuestion, progess}) => {
    console.log(progess);
    const avgPro = ((progess)  * (100) /  (numberOfQuestions ) )
    const checkOutpathAvgPro = ((progess + 1)  * (100) /  (numberOfQuestions ) )
    const location = useLocation();
    const checkOutpath = location.pathname === ("/checkOut");

   
    const myprogressBar = {
        width: `${checkOutpath? checkOutpathAvgPro : avgPro}%`,
        height: `12px`,
        backgroundColor: `#3AC55A`,
        textAlign: `center`,
        lineHeight: `32px`,
        color: `$blackColor`,
        borderRadius: `10px`,
    }

    return (
        <div className="Progress_container">
            <div className="Progress_Status">
                <div style={myprogressBar}></div>
            </div>

            <div className="title">
                <small>Quiz No {activeQuestion + 1}</small>
                <small>Question {activeQuestion + 1 } out of {numberOfQuestions}</small>
            </div>
        </div>
    );
};
export default ProgrssBar;