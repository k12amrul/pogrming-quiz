import React from 'react';
import {Link } from 'react-router-dom'

const Header = () => {
    return (
      

        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Learn Programming Quiz</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/topics'}>Topics</Link></li>
      <li><Link to={'/blog'}>Blog</Link></li>
    
      <li> <Link to={'/st'}>Statistics</Link></li>
    </ul>
  </div>
</div>

<div className='flex'>
<img className='w-30%' src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1665577095~exp=1665577695~hmac=7d34e5cbcc9ca63f07d94908f1decd598d51afa16e0564df0d54c8d178d2267f" alt="" />
<h1 className='text-4xl'>In this website we have presented various topics of programming language in a simple way so that beginners can learn it easily</h1>
</div>
        
         </div>
    );
};

export default Header;

{/* <nav>
            <h1>Header Header</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/topics'}>Topics</Link>
            <Link to={'/blog'}>Blog</Link>
            <Link to={'/st'}>Statistics</Link>
            
        </nav> */}