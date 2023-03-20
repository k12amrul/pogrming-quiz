import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizoption from '../Quizoption/Quizoption';

const Siglequize = () => {
    const quiz =useLoaderData()
    // const {data.questions,questions}=quiz
    // console.log(questions)
    const quizes=quiz.data.questions
    console.log(quiz);
    return (
        <div>
            <h1>{quiz.name}</h1>
            {
                quizes.map(quiz => <Quizoption 
                 name={quiz.name}
                quiz={quiz}
                // options={options}
                >

                </Quizoption>
                
                )
            }
            
        </div>
    );
};

export default Siglequize;