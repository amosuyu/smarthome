import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="h-auto bg-[#1e2d7d] mt-24">
      <div
        className="flex justify-between w-full items-center p-3  text-white  text-base md:justify-around md:gap-10
     "
      >
        <div className="flex flex-col text-xs md:text-base " >
          <Link to="/" className="text-white uppercase md:pt-4">
            SmartHome
          </Link>
          <Link to="/products" className="text-white uppercase md:pt-4">
            Product
          </Link>
          <Link to="/contact" className="text-white uppercase md:pt-4">
            Contact
          </Link>
          <Link to="/cart" className="text-white uppercase md:pt-4">
            Cart
          </Link>
          <Link to="/blog" className="text-white uppercase md:pt-4">
            Blog
          </Link>
        </div>
        <div className=" flex flex-col gap-y-3 md:text-4xl md:flex-row md:gap-12  ">
          <BsFacebook className=" " />
          <BsInstagram className=" " />
          <BsTwitter className=" " />
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center justify-start gap-5">
            <span className="text-xs md:text-base uppercase ">Contact Us </span>
            <GiRotaryPhone className="text-xs md:text-2xl" />
          </div>
          <span className=" text-xs md:text-base uppercase md:pt-4">Hotline : 18001091</span>
          <img
            src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
            alt=""
            className="w-[60px] object-cover md:w-[120px] md:pt-4"
          />
        </div>
      </div>
      <div className="flex flex-col text-white items-center text-[10px] md:text-xs  ">
        <p>© 2022. CÔNG TY CÔNG NGHỆ SMARTHOME.</p>
        <p>Địa chỉ 145 Điện Biên Phủ Phường Đa Kao Quận 1 Hồ Chí Minh</p>
        <p>Design by BTS</p>
      </div>
    </div>
  );
};

export default Footer;
