// import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router';
import { toast, ToastContainer } from "react-toastify";


const ViewDetails = () => {
    const data = useLoaderData();

    
    
    console.log(data);
    const handleBooking=(e)=>{
        e.preventDefault();
        toast.success("success!");

        

    }
    
    return (
        <div className='pt-5 mx-auto grid grid-cols-1'>
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
         {
            data.map(info =>(
                <div className='border mb-3 p-2 lg:w-[800px] mx-auto bg-gray-100 rounded-lg py-3'>
                   <img className='mx-auto w-[750px] h-[300px]' src={info.image} alt="" />
                   <p className='py-2 font-bold text-2xl'> {info.plantName}</p>
                   <p className='text-lg'>{info.description}</p>
                  <div className='flex justify-between lg:px-25'>
                    <p className='text-xl bg-amber-200 w-[120px] rounded-sm'>Price: {info.price} tk</p>
                   <p className='text-red-700 bg-cyan-100 w-[70px] rounded-sm'>Rating: {info.rating}</p>
                  </div>
                   <p className='mx-auto'>(Stock-{info.availableStock})</p>
                 <div>
                   <form onSubmit={handleBooking} className=''>

             <div className='py-3'>
                 <label className="label">Name :</label>
          <input name="name" type="name" className="input" placeholder="Name" required />
             </div>
          
          
          <div>
            <label className="label">Email :</label>
          <input name="email" type="email" className="input" placeholder="Email" required /> 
          </div>
          <button type="submit" className='py-2 btn mt-2 bg-green-800 text-white'>Book Now</button>
                    </form> 
                    </div>  
                </div>

            ))}
            
            
        </div>
        
    );
};


export default ViewDetails;
