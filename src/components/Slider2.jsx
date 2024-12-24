import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

function Slider() {
  
  return (
    <div className="my-8 px-4 md:px-8 lg:px-16  shadow-xl shadow-black-500/40">
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {      // Mobile
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {      // Tablets
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {     // Desktops
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {     // Large screens
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       <SwiperSlide> <img src="https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png  " alt="" srcset="" className='shadow-[5px_5px_0px_0px_rgba(219,68,68,1)]'/> </SwiperSlide>
        <SwiperSlide> <img src="https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png" alt="" srcset="" className='shadow-[5px_5px_0px_0px_rgba(219,68,68,1)]' /> </SwiperSlide>
        <SwiperSlide> <img src="https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png" alt="" srcset="" className='shadow-[5px_5px_0px_0px_rgba(219,68,68,1)]' /> </SwiperSlide>
        <SwiperSlide> <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png " alt="" srcset="" className='shadow-[5px_5px_0px_0px_rgba(219,68,68,1)]'/> </SwiperSlide>
        
        <SwiperSlide> <img src="https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png  " alt="" srcset="" className='shadow-[5px_5px_0px_0px_rgba(219,68,68,1)]'/> </SwiperSlide>
        <SwiperSlide> <img src="https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png" alt="" srcset="" className='shadow-[5px_5px_0px_0px_rgba(219,68,68,1)]'/> </SwiperSlide>
        <SwiperSlide> <img src="https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png" alt="" srcset=""className='shadow-[5px_5px_0px_0px_rgba(219,68,68,1)]' /> </SwiperSlide>
        <SwiperSlide> <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png " alt="" srcset=""className='shadow-[5px_5px_0px_0px_rgba(219,68,68,1)]' /> </SwiperSlide>
        

      </Swiper>
    </div>
  );
}

export default Slider;
