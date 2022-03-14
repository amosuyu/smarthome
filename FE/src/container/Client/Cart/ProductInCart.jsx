import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";

const ProductInCart = ({ product, increment, decrement,remove }) => {
  return (
    <div>
    <div className="border-2  p-3 my-5  mx-4 w-[90%] md:w-full h-auto">
      <div className="flex gap-x-10">
        <div className="flex flex-col w-1/3 justify-around items-center gap-5">
          <img src={product.photo} alt="" className=" cover w-full md:w-[50%]" />
          <AiOutlineClose className="text-red-500 md:text-3xl md:font-bold"  onClick={() => remove(product.id)}/>
        </div>
        <div className="flex flex-col w-2/3 ">
            <span className="text-[#1e2d7d] font-bold text-lg md:text-2xl">
              {product.name}
            </span>
            <div className="">
              <label htmlFor="1" className="italic text-sm text-red-400">
                Chọn 1 trong các khuyến mãi sau :
              </label>
              <br />
              <input type="radio" id="1" value="10%" />
              <label for="" className="ml-3 text-sm">
                Discount 10%
              </label>
              <br />
              <input type="radio" id="2" value="fs" /> 
              <label for="" className="ml-3 text-sm">
                Free Ship
              </label>
            </div>
   
          <div>
            <label htmlFor="color" className="mr-3 font-medium">
              Màu
            </label>
            <select name="" id="color" className="text-sm">
              <option value="black" className="bg-black text-white">
                Đen
              </option>
              <option value="gray" className="bg-gray-400 text-white">
                Xám
              </option>
              <option value="white" className="bg-white text-black">
                Trắng
              </option>
            </select>

          </div>
          <div className="">
            <span className="text-red-500 font-bold text-lg">
              {product.price}$
            </span>
            <div className="flex gap-3 justify-between px-3 items-center mt-3 border-2 w-2/3 md:w-1/4 md:justify-around">
              <AiOutlinePlus onClick={() => increment(product.id)} className="cursor-pointer" />
              <input
                type="text"
                value={product.quantity}
                className="w-6 pl-1 box-border "
              />
              <AiOutlineMinus onClick={() => decrement(product.id)} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
    
  );
};
export default ProductInCart;
