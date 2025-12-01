import React from 'react';
import { PiTreePalm } from "react-icons/pi";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
      
   <div className='w-full bg-gray-300 p-5 flex justify-between items-center
   '>

   <div className='text-5xl bg-emerald-700 rounded-2xl'><PiTreePalm /></div>
   <div className='flex gap-6 text-2xl underline'>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/plants">Plants</NavLink>
         <NavLink to="/profile">My Profile</NavLink>
         
   </div>
   <div className='lg:flex gap-2'>
    <button className='btn text-2xl'>Login</button>
    <button className='btn text-2xl'>Register</button>
   </div>

   </div>

    );
};

export default Navbar;