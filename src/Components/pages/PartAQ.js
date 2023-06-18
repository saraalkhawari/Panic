import React from 'react';
import '../../App.css'
import Quiz from '../TestQuiz';
import background from '../Images/BGUpS.png'


function PartAQ() {
    return (
        <>
        <div  >
                <img src={background} alt="background" className="background" />
             <Quiz/>
            </div>
          
        </>
    );
}

export default PartAQ; 