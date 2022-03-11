import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./style.scss";

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

import logo from "assets/logo.png";
import ListItemSearch from "container/ListItemSearch/ListItemSearch";
import ItemToChose from "container/ItemToChose/ItemToChose";
import { actListCategory } from "./module/action";
import { actListProducts } from "container/Client/ClientHome/SliderFeaturedBrand/module/action";

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
  let focusFill = useRef();
  const [focus, setfocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [handleValue, sethandleValue] = useState();
  const [activeModel, setActiveModel] = useState(false);

  const { categoryList, loadding } = useSelector(
    (state) => state.categoryReducer
  );

  const { productToBuyReducer } = useSelector((state) => state);

  const show = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(actListCategory());
    dispatch(actListProducts());
  }, []);

  useEffect(() => {
    let handle = (e) => {
      if (!focusFill.current?.contains(e.target)) {
        setfocus(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  return (
    <>
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
              <div className="flex justify-center gap-4 items-center mt-[60px] text-3xl  md:hover:text-[#1e2d7d ] md:pb-3 cursor-pointer transition-all ">
                <Link to="/">
                  <AiFillTwitterCircle />
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
        <div className=" md:flex md:gap-10 md:pr-28 items-center">
          <div className="relative">
            <input
              onClick={() => setfocus(!focus)}
              onChange={(e) => sethandleValue(e)}
              type="text"
              id="search"
              className="focus:outline-red-500 border-2 w-[300px] px-3 rounded-md h-10"
              autoFocus
              placeholder="search"
            />

            <ListItemSearch
              handleValue={handleValue}
              focusFill={focusFill}
              focus={focus}
              setOpen={setOpen}
              setfocus={setfocus}
            />
          </div>
          <label className="mb-0">
            <AiOutlineSearch
              className="text-xl  md:text-3xl md:cursor-pointer   "
              onClick={show}
            />
          </label>

          <Link to="/login">
            <AiOutlineUser className="text-2xl   md:text-3xl" />
          </Link>
          <div className="text-[#007bff] cursor-pointer hover:text-[#0056b3] relative store_hover_show">
          <Link to='/cart'>
            <AiOutlineShoppingCart
              className="text-2xl md:text-3xl"
              onClick={() => setActiveModel(!activeModel)}
            />
            </Link>
            <div className= "w-5 h-5 rounded-2xl bg-[#00badb] absolute text-white text-center leading-[18px] inset-[0] inset-x-[15px] hover:w-6 hover:h-6 hover:leading-[20px] ease-linear duration-75">
              {productToBuyReducer?.length}
            </div>
            <div className="item_to_chose">
              {productToBuyReducer.map((item, index) => {
                return <ItemToChose item={item} key={index} index={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden  md:flex md:justify-center md:items-center md:gap-6 ">
        {categoryList?.map((item, index) => (
          <ul className="flex" key={index}>
            <li className="">
              <Link
                to="/"
                className=" opacity-70 font-semibold hover:no-underline text-base text-[#1e2d7d] uppercase"
              >
                {item.title}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Navbar;
