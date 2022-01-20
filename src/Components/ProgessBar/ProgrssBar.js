import '../../sass/ProgessBar.scss';

const ProgrssBar = ({numberOfQuestions, activeQuestion}) => {
    const myprogressBar = {
        width: `${((activeQuestion  * 100) /  9)}%`,
        height: `8px`,
        backgroundColor: `blue`,
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
                <small>Question out of {numberOfQuestions}</small>
            </div>
        </div>
    );
};
export default ProgrssBar;