import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigator = useNavigate();
  return (
    <nav className="bg-gray-800 py-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl ml-5">Attandance Monitoring</div>
        <ul className="flex space-x-4 mr-5">
          <li><a href="#" className="text-white hover:text-gray-300"
            onClick={()=>{
              navigator('/');
            }}
          >Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Student Login</a></li>
          <li><a href="#" className="text-white hover:text-gray-300"
            onClick={()=>{
              navigator('/login');
            }}
          >Faculty Login</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
