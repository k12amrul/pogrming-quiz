import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider}   from "react-router-dom";
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Main from './components/layout/Main';
import Topics from './components/Topics/Topics';
import Siglequize from './components/Siglequize/Siglequize';

function App() {
  const router =createBrowserRouter(
    [
      {
        path: "/",
        element: <Main></Main>,
        children : [
          {
            path : 'topics',
            element : <Topics></Topics>,
            loader:async () =>  fetch('https://openapi.programming-hero.com/api/quiz')


          },
          
          {
            path: "blog",
            element:<Blog></Blog>,
    
          },
          {
            path: "/st",
            element: <Statistics></Statistics>,
    
          },
          {
            path: "/topics/Id",
            element:  <Siglequize></Siglequize>,
            loader :async ({params}) =>{
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)

            }
        
    
          },
          {
            path: "*",
            element: <h1>nnnnnnnnnnn</h1>,
    
          },

        ]

      },
      {
        path: "blog",
        element:<Blog></Blog>,

      },
      
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
