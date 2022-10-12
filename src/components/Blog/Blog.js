import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1> why use react router ?</h1>
            <p>It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser history features while maintaining the correct view of the application. React Router uses a component-based approach to routing.</p>
            <h1>how work context API ?</h1>
            
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
              <h1>what is used  ref hook in react</h1>
              <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly</p>


        
        </div>
    );
};

export default Blog;