
  import React, { useState } from 'react';
  import { Autoplay, Pagination, Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";

  // react-swiper
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  
  
  // custom css
  import './heroslider.css';
  
  // images
  import image1 from '../../../../assets/neo-lock-banner2.png'
  import image2 from '../../../../assets/neolock_banner.jpg'
  import image3 from '../../../../assets/neolock_hotel.png'
  
  // slider configuration
  
  
  // slider component
  const  HeroSlider = () => {
    return (
      <div className='hero'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
         
        </Swiper>
      </div>
    );
  }
  export default HeroSlider