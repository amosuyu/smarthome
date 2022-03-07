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
import { useDispatch } from "react-redux";
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

  const showMenu = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="h-16 flex justify-start gap-7 z-[100]  md:justify-between md:gap-14 items-center border-b-2 px-2 w-[400px] md:w-full  sticky">
      <div className="text-[25px]">
        {!open ? (
          <AiOutlineMenu
            className="text-[#1e2d7d] text-2xl md:pl-3 md:text-4xl md:cursor-pointer  "
            onClick={showMenu}
          />
        ) : (
          <AiOutlineClose
            className="text-[#1e2d7d] text-2xl md:pl-3 md:text-4xl md:cursor-pointer"
            onClick={showMenu}
          />
        )}
        {open && (
          <div className=" absolute top-16 bg-white w-full left-0  h-auto   md:w-1/4 md:left-0 md:z-100 md:h-full    ">
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
      <div className="w-[150px] h-[22px] md:w-[255px] md:h-[38px] md:items-center md:justify-center">
        <img src={logo} alt="" className="object-cover" />
      </div>
      <div className="hidden md:block md:flex md:gap-10 md:pr-5 ">
        <AiOutlineSearch className="text-xl  md:text-3xl md:cursor-pointer  " />
        <Link to="/login">
          <AiOutlineUser className="text-2xl  md:hover:shadow-lg md:text-3xl" />
        </Link>
        <Link to="/cart">
          <AiOutlineShoppingCart className="text-2xl  md:hover:shadow-lg md:text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
