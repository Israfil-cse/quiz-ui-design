import React, { useContext, useEffect, useState } from 'react';
import { progressContext } from '../../App';
import '../../sass/ProgessBar.scss';

const ProgrssBar = () => {

    const [activeQuestion, setActiveQuestion] = useContext(progressContext);
    // const [updateProgress, setUpdateProgress] = useState(0)

    // useEffect(() => {
    //     const total = 100;
    //     let newProgress = Math.ceil(activeQuestion / total);
    //     setUpdateProgress(newProgress);
    //     console.log(newProgress);
    // }, [activeQuestion])



    const myprogressBar = {
        width: `${activeQuestion}%`,
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
                <small>Quiz No 1</small>
                <small>Question out of 9</small>
            </div>
        </div>
    );
};

export default ProgrssBar;