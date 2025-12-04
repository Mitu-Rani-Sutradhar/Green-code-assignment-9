import React, { use } from 'react';

const plantsTips = fetch("/tips.json").then((res) =>res.json());
// console.log(plantsTips);


 
const PlantsTips = () => {
    const tips = use(plantsTips);
    return (
        <div className='mx-auto'>
          <h1 className='py-5 font-bold text-2xl underline text-blue-900'>Plant Care Tips</h1>
        
     <div className='lg:flex justify-around pl-'>
        <div className='w-[300px]'>
            <h1 className='font-bold py-3 underline'>Watering Tips</h1>
          <div className='mx-auto'>
          {tips.map(tip => (
         <div>
            <li className='py-2'>{tip.watering}</li>
            </div>
          ))}
      </div>  
        </div>

        <div className='w-[300px]'>
       <h1 className='font-bold py-3 underline'> Sunlight Tips</h1>
       <div className='mx-auto'>
          {tips.map(tip => (
         <div><li className='py-2'>{tip.sunlight}</li></div>
          ))}
      </div>  
        </div>

        <div className='w-[300px]'>
          <h1 className='font-bold py-3 underline'>Fertilizing Tips</h1>
           <div className='mx-auto'>
          {tips.map(tip => (
         <div><li className='py-2'>{tip.fertilizing}</li></div>
          ))}
      </div>  
            </div>

     </div>
        
        </div>
    );
};

export default PlantsTips;