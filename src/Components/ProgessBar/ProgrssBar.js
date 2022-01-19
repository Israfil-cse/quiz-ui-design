import React from 'react';
import '../../sass/ProgessBar.scss';

const ProgrssBar = () => {
    return (
        <div className="Progress_container">
            <div className="Progress_Status">
                <div className="myprogressBar"></div>
            </div>
            
            <div className="title">
                <small>Quiz No 1</small>
                <small>Question out of 9</small>
            </div>
        </div>
    );
};

export default ProgrssBar;