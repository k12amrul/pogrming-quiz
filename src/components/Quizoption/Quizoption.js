import React from 'react';
import { toast } from 'react-toastify';

const Quizoption = ({quiz}) => {
    console.log(quiz);
    const {data,question,id,correctAnswer,options }=quiz
    // console.log(options);
    const corectAnswer = (Answer)=>{
        if(Answer === correctAnswer){
            toast.success(`ss`)
            console.log('ssss')
            alert('s')
        }
        else{
            alert('22')
            toast('11')
            toast.success(`rr`)
            console.log('rrr')

        }
        // console.log(Answer)
    }
    
    console.log(id , correctAnswer, question ,)
    return (
        <div className=''>
            <h1> {question}</h1>
            {
                options.map(option1 =>    <div className=''>

        <input onClick={ () => corectAnswer (option1)} type="radio" value={option1} name="gender" />{option1}
        
      </div>            
                
                  )
            }
            
            
            
        </div>
    );
};

export default Quizoption;