import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import logo from "assets/logo.png";
import bocongthuong from "assets/bocongthuong.png";
import "./style.scss";


const listLink = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'Product',
    path: '/product'
  },
  {
    id: 3,
    name: 'Contact Us',
    path: '/contact'
  },
  {
    id: 4,
    name: 'Blog',
    path: '/Blog'
  }
]

const Footer = () => {
  
    const handleClick = () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
      
    };
  return (
    <div className="flex flex-col w-full h-auto bg-[#fff] mt-24 font-lora">
      <div className="flex flex-col w-[90%] mx-auto border-[#e7e7e7] border-t-[1px] pt-[50px] md:flex-row md:gap-[100px]">
        <div className="flex flex-col w-full gap-[-40px]">
          <Link to="/" onClick={() => handleClick()}>
            <img className="w-[50%] h-[50px] bg-cover mb-[35px]" src={logo} alt=""/>
          </Link>
          <p className="text-[15px] md:text-[18px] font-normal"><i className="fa-solid fa-location-dot text-[#333]"></i><strong className="text-[#777] font-bold"> Address: </strong> 29/7 Hoàng Diệu, phường 10, Quận Phú Nhuận, Tp.Hồ Chí Minh</p>
          <p className="text-[15px] md:text-[18px] font-normal"><i className="fa-solid fa-location-dot text-[#333]"></i><strong className="text-[#777] font-bold"> Warehouse: </strong> 170 Quốc Lộ 1A, Phường Bình Hưng Hòa B, Quận Bình Tân, Tp. Hồ Chí Minh</p>
          <p className="text-[15px] md:text-[18px] font-normal"><i className="fa-solid fa-phone"></i><strong className="text-[#777] font-bold"> Hotline: </strong> 0902 978 179</p>
          <p className="text-[15px] md:text-[18px] font-normal"><i className="fa-solid fa-phone"></i><strong className="text-[#777] font-bold"> Technical Hotline: </strong> 0979.305513 - 0902.395288</p>
          <p className="text-[15px] md:text-[18px] font-normal"><i className="fa-solid fa-envelope"></i><strong className="text-[#777] font-bold"> Email: </strong> info@neolock.vn</p>
          <p className="text-[15px] md:text-[18px] font-normal">BTS Solutions</p>
        </div>
        <div className="flex flex-col w-full border-[#e7e7e7] border-t-[1px] pt-[15px] md:border-none ">
          <ul className="block w-full">
          {listLink.map(link => (
            <li  className="text-[18px] font-medium leading-[35px] "  key={link.id}><Link onClick={() => handleClick()}  className="text-[#333] hover:no-underline p-[5px] hover:shadow-md hover:text-[#1176c0]" to={link.path}>{link.name}</Link></li>
          ))}
          </ul>
          <div className="border-[#e7e7e7] border-t-[1px] pt-[15px]">
            <h3 className="text-[18px] text-[#333] font-semibold" >Subscribe</h3>
          <form className="flex flex-row w-full mt-[20px] md:w-[70%]">
              <input type="text" id="Subscribe" name="Subscribe" className="w-[75%] outline-none bg-[#f0f0f0] border-[#f0f0f0] border-[1px] focus:border-red-600 p-[10px] text-[15px]" />
              <button type="submit" className="w-[25%] bg-red-600 py-[10px] text-[#fff] text-[15px] font-normal z-50">Subscribe</button>
            </form>
          </div>
          <div>
            <h3 className="text-[18px] text-[#333] font-semibold mt-[40px]">Connect With Us</h3>
          </div>
          <div className="flex flex-row w-full gap-[20px] mt-[40px] text-[20px] ml-[10px] items-center">
            <a href="https://www.facebook.com/SmartHome-107575498555655/" className="icon-social hover:no-underline hover:bg-[#1196f5]"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/" className="icon-social hover:no-underline hover:bg-[#f00]"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://www.instagram.com/" className="icon-social hover:no-underline hover:bg-gradient-to-bl from-purple-600 via-[#f51818] to-[#fdff8b]"><i className="fa-brands fa-instagram"></i></a>
            <span><img src={bocongthuong} alt="" className="w-full h-[60px] bg-cover" /></span>
          </div>
        </div>
      </div>
      <div className="mt-[40px] pt-[60px] text-center text-[15px] font-normal border-[#e7e7e7] border-t-[1px]">
        <p>Copyright © 2022. CÔNG TY CÔNG NGHỆ SMARTHOME. Design by BTS</p>
      </div>
    </div>
  );
};

export default Footer;
