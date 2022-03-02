import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./style.scss";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { actListCategory } from "./module/action";
import { useDispatch, useSelector } from "react-redux";

export default function SliderFeaturedBrand() {
  const dispatch = useDispatch();
  const { dataCategory, loadding } = useSelector(
    (state) => state.categoryReducer
  );
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style}}
        onClick={onClick}
      >
        <IoIosArrowForward className="img_arrow" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style}}
        onClick={onClick}
      >
        <IoIosArrowBack className="img_arrow" />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    className: "crs_home",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    dispatch(actListCategory());
  }, []);

  return (
    <div>
      <p> Featured Brand - Insteon </p>
      <Slider {...settings}>
        {dataCategory.map((item, index) => {
          const { title, price, photo } = item;
          return (
            <div key={index}>
              <div className="crs_model_home">
                <div className="img_crs_home">
                  <img src={photo} alt="..." />
                  <div className="hover_img_crs_home">
                    <img
                      src="https://cf.shopee.vn/file/3e42d6c4fe4b3153f9d70d5075e0f3d2"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="content_modal_crs_home">
                  <p className="name_text_crs_home">{title}</p>
                  <p className="price_crs_home">{price}</p>
                  <button className="btn_main btn_chose">Chose option</button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
