import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineClose,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

import logo from "assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { actListCategory } from "./module/action";

const nav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Product",
    path: "/product",
  },
  {
    display: "Contact Us",
    path: "/contact",
  },
  {
    display: "Blog",
    path: "/Blog",
  },
  {
    display: "Login",
    path: "/login",
  },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(actListCategory());
  }, []);
  const { categoryList, loadding } = useSelector(
    (state) => state.categoryReducer
  );

  const show = () => {
    setOpen(!open);
    
  };
  return (
    <div className="">
      <div className="h-16 flex justify-start gap-7 z-[100]  md:justify-between md:gap-5 items-center border-b-2 px-2 min-w-[375px] max-w-[780px] md:min-w-[780px] md:max-w-[1800px]  sticky">
        <div className=" block text-[25px] md:hidden">
          {!open ? (
            <AiOutlineMenu
              className="text-[#1e2d7d] text-2xl md:pl-3 md:text-4xl md:cursor-pointer  "
              onClick={show}
            />
          ) : (
            <AiOutlineClose
              className="text-[#1e2d7d] text-2xl md:pl-3 md:text-4xl md:cursor-pointer"
              onClick={show}
            />
          )}
          {open && (
            <div className=" absolute top-16 bg-white w-full left-0  h-auto     ">
              {nav.map((item, index) => (
                <ul
                  className=" w-full flex p-0 justify-center items-center h-full  md:w-full md:text-center md:boder-r-2   "
                  key={index}
                >
                  <li
                    className="py-7 text-base bg-white text-black hover:text-[#1e2d7d] transition-all font-semibold 
                                      md:w-full md:hover:border-b-2 md:font-bold md:text-lg"
                  >
                    <Link
                      to={item.path}
                      className="text-black hover:text-[#1e2d7d]"
                    >
                      {item.display}
                    </Link>
                  </li>
                </ul>
              ))}
              <div className="flex justify-center gap-4    items-center mt-[60px] text-3xl  md:hover:text-[#1e2d7d ] md:pb-3 cursor-pointer transition-all ">
                <Link to="/">
                  <AiFillTwitterCircle className="" />
                </Link>
                <Link to="/">
                  <AiFillInstagram />
                </Link>
                <Link to="/">
                  <AiFillFacebook />
                </Link>
                <Link to="/">
                  <AiFillYoutube />
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="w-[150px] h-[22px] md:ml-28 md:w-[255px] md:h-[38px] md:items-center md:justify-center">
          <img src={logo} alt="" className="object-cover" />
        </div>
        <div className="hidden md:block md:flex md:gap-10 md:pr-28  ">
        {
          open ? (
            // <button>
            //   <AiOutlineSearch
            //     className="text-xl  md:text-3xl md:cursor-pointer  "
            //     onClick={show}
            //   />
            // </button>
            <input type="text" id="search" className="outline-blue-500 border-blue-400 border-2 w-[300px] px-3 rounded-md" />
          ) : (
            <button>
            <AiOutlineSearch
              className="text-xl  md:text-3xl md:cursor-pointer  "
              onClick={show}
            />
          </button>
          )
        }
        {
           open && (
             <label htmlFor="search">
            <AiOutlineSearch
            className="text-xl  md:text-3xl md:cursor-pointer  "
            onClick={show}
          />
          </label>
           )
        }
            
     
     
          <Link to="/login">
            <AiOutlineUser className="text-2xl   md:text-3xl" />
          </Link>
          <Link to="/cart">
            <AiOutlineShoppingCart className="text-2xl   md:text-3xl" />
          </Link>
        </div>
      </div>
      <div className=" hidden  md:flex md:justify-center md:items-center md:gap-6 ">
        {categoryList?.map((item, index) => (
          <ul className="flex" key={index}>
            <li className="">
              <Link
                to="/"
                className=" text-black opacity-70 font-semibold hover:no-underline text-base text-[#1e2d7d] uppercase"
              >
                {item.title}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Navbar;