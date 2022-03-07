import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="h-auto bg-[#1e2d7d] mt-24">
    <div className="flex justify-between w-full items-center p-3  text-white  text-base md:justify-around md:gap-10
     ">
      <div className="flex flex-col md:text-lg">
       
        <Link to="/" className="text-white">SmartHome</Link>
        <Link to="/products" className="text-white">Product</Link>
        <Link to="/contact" className="text-white">Contact</Link>
        <Link to="/blog" className="text-white">Blog</Link>
      </div>
      <div className=" flex flex-col gap-y-3 md:text-3xl md:flex-row md:gap-12  "> 
        <BsFacebook className=" " />
        <BsInstagram className=" " />
        <BsTwitter className=" " />
      </div>
      <div className="flex flex-col ">
        <span>Contact Us </span>
        <span>Hotline : 18001091</span>
      </div>
    </div>
    <div className="flex flex-col text-white items-center text-xs md:mt-8 ">
        <p>© 2022. CÔNG TY CÔNG NGHỆ SMARTHOME.</p>
        <p>Địa chỉ 145 Điện Biên Phủ Phường Đa Kao Quận 1 Hồ Chí Minh</p>
        <p>Design by BTS</p>
    </div>
    </div>
  );
};

export default Footer;
