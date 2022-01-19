import React, { useContext, useState } from 'react';
import { progressContext } from '../../App';
import '../../sass/ProgessBar.scss';

const ProgrssBar = ({ bgcolor, progress, height }) => {
    // const Parentdiv = {
    //     height: height,
    //     width: '90%',
    //     backgroundColor: 'whitesmoke',
    //     borderRadius: 40,
    //     margin: 50
    // }

    // const Childdiv = {
    //     height: '100%',
    //     width: `${progress}%`,
    //     backgroundColor: bgcolor,
    //     borderRadius: 40,
    //     textAlign: 'right'
    // }

    // const progresstext = {
    //     padding: 10,
    //     color: 'black',
    //     fontWeight: 900
    // }

    const [activeQuestion, setActiveQuestion] = useContext(progressContext);
// const [update , setUpdate ] = useState(50);


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
                <div style = {myprogressBar}></div>
            </div>

            <div className="title">
                <small>Quiz No 1</small>
                <small>Question out of 9</small>
            </div>
        </div>

        // <div style={Parentdiv}>
        //     <div style={Childdiv}>
        //         <span style={progresstext}>{`${progress}%`}</span>
        //     </div>
        // </div>
    );
};

export default ProgrssBar;