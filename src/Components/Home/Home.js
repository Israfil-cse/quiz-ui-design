import { createContext, useState } from 'react';
import '../../sass/Home.scss';
import ProgrssBar from '../ProgessBar/ProgrssBar';
import QuizPage from '../QuizPage/QuizPage';


const Home = () => {
    
    return (
       
            <div className="home_container">
                <div className="content_aria">
                    <ProgrssBar></ProgrssBar>
                    <QuizPage></QuizPage>
                </div>
            </div>
      
    );
};

export default Home;