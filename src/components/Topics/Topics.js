import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Siglequize from '../Siglequize/Siglequize';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData()
    // console.log(topics.data.length)
   // console.log(topics)
    const  topics1=topics.data
    //const { name,id}=topics1
    //console.log(topics1?.name)

    return (
        
        <div className=' '>
            {

              //console.log(singletopic)
            topics1.map(singletopic => <div className='grid'>



            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img  className='imgg bg-gray-400' src={singletopic.logo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{singletopic.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"> <Link to={`/topics/${singletopic.id}`}> Start Quiz</Link> </button>
              </div>
            </div>
          </div>

            </div>
                // <div className=' gridd'>
                //     <div>

                //     <img className='imgg' src={singletopic.logo} alt="" />
                //     <h4>{singletopic.name}</h4>
                //     <button> Start Quiz</button>
                //     </div>
                // </div>

        //      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        //     <img className="imgg" src={singletopic.logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
        //     <div className="flex flex-col justify-between p-6 space-y-8">
        //         <div className="space-y-2">
        //             <h2 className="text-3xl font-semibold tracking-wide">{singletopic.name} </h2>
        //             <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
        //         </div>
        //         <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Start Quiz</button>
        //     </div>
        // </div>
            
            // <h1>name {singletopic.name}</h1>
            // <Siglequize
            // key={id}

            // // topics1={topics1}
            // ></Siglequize> 
             )
            }
            {/* {
                singletopic.map( sp =>console.log(sp)
                )
            } */}

            {/* 

<div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
			<p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
	</div>
</div> */}
            {/* <h1>Topics Topics</h1> */}
            
            
        </div>
    );
};

export default Topics;