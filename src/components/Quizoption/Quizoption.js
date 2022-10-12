import React from 'react';

const Quizoption = ({quiz}) => {
    console.log(quiz);
    const {data,question,id,correctAnswer,options }=quiz
    // console.log(options);
    const corectAnswer = (Answer)=>{
        if(Answer === correctAnswer){
            console.log('ssss')
        }
        else{
            console.log('rrr')

        }
        // console.log(Answer)
    }
    
    console.log(id , correctAnswer, question ,)
    return (
        <div>
            <h1>{question}</h1>
            {
                options.map(option1 =>    <div>

        <input onClick={ () => corectAnswer (option1)} type="radio" value={option1} name="gender" />{option1}
        
      </div>            
                
                  )
            }
            
            
            
        </div>
    );
};

export default Quizoption;