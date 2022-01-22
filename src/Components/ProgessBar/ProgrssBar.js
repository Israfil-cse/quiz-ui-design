import '../../sass/ProgessBar.scss';

const ProgrssBar = ({numberOfQuestions, activeQuestion}) => {
    const avgPro = ((activeQuestion)  * (100) /  (numberOfQuestions ) )
    // console.log(activeQuestion, avgPro);

    const myprogressBar = {
        width: `${avgPro}%`,
        height: `8px`,
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
                <small>Question {activeQuestion } out of {numberOfQuestions}</small>
            </div>
        </div>
    );
};
export default ProgrssBar;