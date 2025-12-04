import React, { use } from 'react';
import { PiTreePalm } from "react-icons/pi";
import { Link, NavLink } from 'react-router';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';
import userIcon from "../assets/user.png/Screenshot 2025-12-03 094517.png"
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
const { user,logOut } = use(AuthContext);
const handleLogOut =()=>{
    // console.log("logout try");
    logOut().then(() => {
     alert("Logged Out Successfully");
}).catch((error) => {
   console.log(error);
});
    
}
    return (
      
   <div className='w-full rounded-sm  p-5  flex justify-between items-center
   '>

   <div className='text-5xl bg-emerald-700 rounded-2xl'><PiTreePalm /></div>
   <div className='flex gap-6 text-2xl underline'>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/plants/plantId">Plants</NavLink>
         <NavLink to="/profile">My Profile</NavLink>
         
   </div>
   <div className=''>
    
    {
        user ? (<div>
        <div>
             <img className='w-[50px] h-[50px] mb-2 mx-auto rounded-full mt-5' src={`${user ? user.photoURL: userIcon}`} alt="" />
             <p className='px-25'><RiArrowDropDownLine /></p>
        </div>

        <div className='flex gap-2'>
        <p className='text-lg font-bold border-1 p-1 rounded-2xl ml-9'>{user.displayName}</p>
        <button onClick={handleLogOut} className='btn text-xl'>Logout</button>
        </div>
        </div>) : ( 
        
        <div> <Link to="/auth/login" className='btn text-2xl mr-2'>Login</Link>
         <Link to="/auth/signup" className='btn text-2xl'>Register</Link></div>)
    }
    
   
   </div>

   </div>

    );
};

export default Navbar;