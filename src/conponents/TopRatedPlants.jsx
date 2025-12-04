import React, { use, useEffect, useState } from 'react';
import { ImGift } from 'react-icons/im';
import { Link } from 'react-router';

const plantPromise = fetch("/plants.json").then((res) =>res.json());
const TopRatedPlants = () => {
    // console.log(plantPromise);
  const plants = use(plantPromise);
  const [filteredProducts, setFilteredProducts] = useState([])
  
  useEffect(()=>{
    const filteredPlants = plants.filter(items=>items.rating == 5);
    setFilteredProducts(filteredPlants);
     },[plants]);

    return (
        <div className='mx-auto bg-green-50 rounded-2xl'>
        
            <h1 className='font-bold text-2xl py-8'>Top Rated Plants</h1>
        
        {/* <div>
        {plants.map(plant => (
        <div>{plant.plantName}</div>
      ))}
        </div> */}   

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 bg-green-50 pb-5'>
            {
            filteredProducts.map(item =>(
             <div className='h-[350px] w-[320px] bg-amber-50 mx-auto rounded-lg mb-5 shadow-2xl'>
             <img className='h-[200px] w-[300px] mx-auto py-3' src= {item.image}  alt="" />
            <div className='font-bold text-xl py-2'>
                 {item.plantName}
            </div>
             <div className='flex justify-between px-6'>
                <p className='bg-amber-100 rounded-xl p-1'>Price-{item.price} tk</p>
                <p className='rounded-xl p-1 text-red-500'>Rating-{item.rating}</p>
             </div>
             <Link to={`/details/${item.plantId}`} className='btn bg-blue-300 my-3'>View Details</Link>
             </div>
            ))
            }
        </div>

        
       
        </div>
    );
};

export default TopRatedPlants;