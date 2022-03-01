
  import React, { useState } from 'react';

  // react-id-swiper
  import 'swiper/css';
  import 'swiper/css/parallax';
  import Swiper from 'react-id-swiper';
  
  
  // custom css
  import './heroslider.css';
  
  // images
  import image1 from '../../assets/neolock_banner.jpg';
  import image2 from '../../assets/neolock_hotel.png';
  import image3 from '../../assets/neo-lock-banner2.png';
  
  // slider configuration
  const HeroSliderConfigs = {
    containerClass: 'swiper-container hero-slider',
    parallax: true,
    centeredSlides: true,
    grabCursor: true,
    speed: 500,
    spaceBetween: 0,
    effect: 'slide',
    scroll : false
  };
  
  // slider component
  const HeroSlider = () => {
    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.5;
    return (
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={image1} alt="image1"></img>
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={image2} alt="image2"></img>
          </div>
        </div>
        <div className="hero-slide">
          <div
            className="slide-image"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img src={image3} alt="image3"></img>
          </div>
        </div>
      </Swiper>
    );
  };
  
  export default HeroSlider;