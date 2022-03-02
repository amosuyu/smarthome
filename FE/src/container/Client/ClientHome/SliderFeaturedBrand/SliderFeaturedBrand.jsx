import React from "react";
import Slider from "react-slick";
import "./style.scss";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SliderFeaturedBrand() {
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
        breakpoint: 600,
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

  return (
    <div>
      <p> Featured Brand - Insteon </p>
      <Slider {...settings}>
        <div>
          <div className="crs_model_home">
            <div className="img_crs_home">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/098/550/files/mo-hinh-iron-man-mark-46-polystone-ti-le-12-cao-35cm-mk46-civil-war-1.jpg?v=1575022160977"
                alt="..."
              />
              <div className="hover_img_crs_home">
                <img
                  src="https://cf.shopee.vn/file/3e42d6c4fe4b3153f9d70d5075e0f3d2"
                  alt="..."
                />
              </div>
            </div>
            <div className="content_modal_crs_home">
              <p className="name_text_crs_home">name some thing</p>
              <p className="price_crs_home">$454</p>
              <button className="btn_see_more">Quick view</button>
            </div>
          </div>
        </div>
        <div>
          <div className="crs_model_home">
            <div className="img_crs_home">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/098/550/files/mo-hinh-iron-man-mark-46-polystone-ti-le-12-cao-35cm-mk46-civil-war-1.jpg?v=1575022160977"
                alt="..."
              />
              <div className="hover_img_crs_home">
                <img
                  src="https://cf.shopee.vn/file/3e42d6c4fe4b3153f9d70d5075e0f3d2"
                  alt="..."
                />
              </div>
            </div>
            <div className="content_modal_crs_home">
              <p className="name_text_crs_home">name some thing</p>
              <p className="price_crs_home">$454</p>
              <button className="btn_see_more">Quick view</button>
            </div>
          </div>
        </div>
        <div>
          <div className="crs_model_home">
            <div className="img_crs_home">
              <img
                src="https://bizweb.dktcdn.net/thumb/large/100/098/550/files/mo-hinh-iron-man-mark-46-polystone-ti-le-12-cao-35cm-mk46-civil-war-1.jpg?v=1575022160977"
                alt="..."
              />
              <div className="hover_img_crs_home">
                <img
                  src="https://cf.shopee.vn/file/3e42d6c4fe4b3153f9d70d5075e0f3d2"
                  alt="..."
                />
              </div>
            </div>
            <div className="content_modal_crs_home">
              <p className="name_text_crs_home">name some thing</p>
              <p className="price_crs_home">$454</p>
              <button className="btn_see_more">Quick view</button>
            </div>
          </div>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
}
