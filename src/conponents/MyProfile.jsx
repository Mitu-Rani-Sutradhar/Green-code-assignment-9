import React, { use } from 'react';
import {AuthContext} from "../provider/AuthProvider";
import userIcon from "../assets/user.png/Screenshot 2025-12-03 094517.png";
import { updateProfile } from 'firebase/auth';


const MyProfile = () => {
    const { user } = use(AuthContext);

    updateProfile(user.displayName,user.photoURL)
    .then(() => {
        
    })
    .catch()
    
    return (
        <div className=''>
             
            <h1 className='font-bold py-2 text-3xl underline'>User Info</h1>
            <div className='mx-auto'>
              <p className='text-xl font-bold'>Name: {user && user.displayName}</p>
              <p className='py-2 text-xl font-bold'>Email: {user && user.email}</p>
              <p className='text-xl font-bold'>Photo: <img className='pt-2 w-[300px] h-[200px] mx-auto' src={`${user ? user.photoURL: userIcon}`} alt="" /></p>   

                  <button className='btn bg-amber-200 my-4'>Update Profile</button>

            </div> 
        </div>
    );
};

export default MyProfile;