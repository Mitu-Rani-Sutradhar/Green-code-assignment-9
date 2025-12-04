import React, {  useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast, ToastContainer } from "react-toastify";

const ViewDetails = () => {
    
 const datainfo = useLoaderData();
 const {id}=useParams();
 console.log(id);
    
    console.log(datainfo);
     
    const data = datainfo.find((plantData)=>
        plantData.plantId=== parseInt(id)
    )
console.log(data);
const handleBooking=(e)=>{
        e.preventDefault();
        toast.success("success!");

        

    }
    // const [filteredDatainfo, setFilteredDatainfo] = useState([]);
      
    //   useEffect(()=>{
    //     const filteredDatainfo = datainfo.find(informations=>informations.plantId == id);
    //     setFilteredDatainfo(filteredDatainfo);
    //      },[datainfo]);
    //      console.log(filteredDatainfo)

    return (
        <div>
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
           <div className='border mb-3 w-[800px] mx-auto bg-gray-100 rounded-lg py-3 my-3'>
                   <img className='mx-auto w-[750px] h-[300px]' src={data.image} alt="" />
                   <p className='py-2 font-bold text-2xl'> {data.plantName}</p>
                   <p className='text-lg'>{data.description}</p>
                  <div className='flex justify-between px-25'>
                     <p className='text-xl bg-amber-200 w-[120px] rounded-sm'>Price: {data.price} tk</p>
                   <p className='text-red-700 bg-cyan-100 w-[70px] rounded-sm'>Rating: {data.rating}</p>
                  </div>
                   <p className='mx-auto'>(Stock-{data.availableStock})</p>
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
           
        </div>
    );
};

export default ViewDetails;