import React from 'react';
import {Link } from 'react-router-dom'

const Header = () => {
    return (
      

        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Quiz</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/topics'}>Topics</Link></li>
      {/* <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li> */}
      <li> <Link to={'/st'}>Statistics</Link></li>
    </ul>
  </div>
</div>

<div className='flex'>
<img className='w-20' src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1665577095~exp=1665577695~hmac=7d34e5cbcc9ca63f07d94908f1decd598d51afa16e0564df0d54c8d178d2267f" alt="" />
<h1 className='text-4xl'>Learn Programming Quiz</h1>
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