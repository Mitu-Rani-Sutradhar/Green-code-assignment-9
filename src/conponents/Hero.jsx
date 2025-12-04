import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, } from 'swiper/modules';
import 'swiper/css/pagination';
const Hero = () => {
    return (
      <section className='mx-auto'>
<div className=' mx-auto container'
>
        <Swiper 
        modules={[ Pagination, ]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >
      <SwiperSlide 
      >
        <div className=''
        >
            <img className='mx-auto mt-2 h-[300px] w-full rounded-sm'     
            src="https://i.ibb.co.com/xbfN9Yh/HD-wallpaper-nature-nice-view-green-view-nature.jpg
            " alt="" />
        <h2 className='font-bold py-5 text-xl'
        >
            Breathe Easy, Live Green
        </h2>
        </div>
       
      </SwiperSlide>
      <SwiperSlide>
<div>
    <img className='mx-auto pt-5 h-[300px] w-full rounded-xl' 
     src="https://i.ibb.co.com/yBx3ZnVS/vertical-shot-mesmerizing-landscape-forested-mountains-181624-48206.jpg
    " alt="" />
</div>
<h2 className='font-bold py-5 text-xl'
>
   Green Spaces, Happy Faces
</h2>

      </SwiperSlide>
      <SwiperSlide>
        <img className='mx-auto pt-5 h-[300px] w-full rounded-xl' 
         src="https://i.ibb.co.com/LDhzt2cX/2851026377-f602b4ea14-b.jpg
        
        " alt="" />
        <h2 className='font-bold py-5 text-xl'
        >
            Nature That Nurtures
        </h2>
      </SwiperSlide>
      <SwiperSlide>
        <img className='mx-auto pt-5 h-[300px] w-full rounded-xl' 
        src="https://i.ibb.co.com/NGKPphM/premium-photo-1675827055694-010aef2cf08f-w-600-auto-format-fit-crop-q-60-ixlib-rb-4-1.jpg
        
        " alt="" />
        <h2 className='font-bold py-5 text-xl mb-4'
        >
            Let Your Home Bloom
        </h2>
      </SwiperSlide>
      {/* ... */}
    </Swiper>
       </div>
      </section>
      
    );
};

export default Hero;