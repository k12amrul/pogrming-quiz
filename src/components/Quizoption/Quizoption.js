import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import { faEye } from '@fortawesome/free-regular-svg-icons';

const Quizoption = ({quiz}) => {
    console.log(quiz);
    const {data,question,id,correctAnswer,options }=quiz
    // console.log(options);
    const corectAnswer = (Answer)=>{
        if(Answer === correctAnswer){
            toast.success('Successfully toasted!')
            alert( correctAnswer)
           
            
            
        }
        else{
           alert("wrong Answer")
            

        }
        // console.log(Answer)
    }
    
    // console.log(id , correctAnswer, question ,)
    return (
        <div className=''>
            <h1> {question}</h1><FontAwesomeIcon icon="fa-solid fa-eye" />
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