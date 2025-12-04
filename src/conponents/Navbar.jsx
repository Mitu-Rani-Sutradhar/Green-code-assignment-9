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
      
   <div className='w-full rounded-sm  p-5  flex justify-between items-center items-center
   '>

   <div className='text-5xl bg-emerald-700 rounded-2xl mb-20'><PiTreePalm /></div>
   <div className='flex gap-6 text-2xl underline mb-20'>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/plants/plantId">Plants</NavLink>
         <NavLink to="/profile">My Profile</NavLink>
         
   </div>
   <div className=''>
    
    {
        user ? (
        <div>
            <details className="dropdown mr-20 mb-20">
  <summary className="btn bg-white border-0 shadow-0"> <img className='w-[50px] h-[50px] mb-2 mx-auto rounded-full mt-5' src={`${user ? user.photoURL
             : userIcon}`} alt="" referrerpolicy="no-referrer"/></summary>
  <ul className=" dropdown-content bg-base-100 rounded-box z-1 p-2 shadow-sm w-[150px] mt-5">
    <li><a>{user.displayName}</a></li>
    <li><a><button onClick={handleLogOut} className='btn text-xl'>Logout</button></a></li>
  </ul>
</details>
            
        {/* <div>
             <img className='w-[50px] h-[50px] mb-2 mx-auto rounded-full mt-5' src={`${user ? user.photoURL
             : userIcon}`} alt="" referrerpolicy="no-referrer"/>
            
        </div> */}

        {/* <div className='flex gap-2'>
        <p className='text-lg font-bold bg-base-300 p-1 rounded-2xl ml-9'>{user.displayName}</p>
        <button onClick={handleLogOut} className='btn text-xl'>Logout</button>
        </div> */}
        </div>
        ) : ( 
        
        <div className='mb-20'> <Link to="/auth/login" className='btn text-2xl mr-2'>Login</Link>
         <Link to="/auth/signup" className='btn text-2xl'>Register</Link></div>)
    }
    
   
   </div>

   </div>

    );
};

export default Navbar;