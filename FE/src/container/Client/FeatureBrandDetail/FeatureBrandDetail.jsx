import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { BsPlus, BsPatchCheckFill } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
//scss
import "./style.scss";
//img from assests
import img1 from "assets/2472divbig.jpg";
import img2 from "assets/2472dlalbig_1.jpg";
import img3 from "assets/outlet_dimmer.jpg";
import img4 from "assets/vai-pdp-msi.jpg";
import { actSaveProduct } from "../saveProductToBuyReducer/reducer";

export default function FeatureBrandDetail() {
  const dispatch =  useDispatch()
  const location = useLocation();
  const { description, price, title } = location.state;
  const [imgShow, setImgShow] = useState(
    "http://localhost:3000/static/media/2472divbig.791c2e6efcffe540ff69.jpg"
  );

  const onChangeImg = (e) => {
    setImgShow(e.target.src);
    const items = document.querySelectorAll(".border_img");
    items.forEach((item) => {
      item.classList.remove("img_style_border");
      if (item.src == e.target.src) {
        item.classList.toggle("img_style_border");
      }
    });
  };
  const [amount, setamount] = useState(1);

  const changeamount = (event) => {
    setamount(event.target.value);
  };

  const handleChangeUp = () => {
    setamount(amount + 1);
  };
  
  const handleChangeDown = () => {
    if (amount >= 2) {
      setamount(amount - 1);
    }
  };
  const scrollToTop = () => {
    dispatch(actSaveProduct({...location.state, amount}))
    window.scrollTo(0, 0)
    
  }

  return (
    <div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="border-2 p-7">
                <div className="space-y-5 flex items-center align-top justify-between">
                  <div className="w-1/3 flex-col   m-0">
                    <img
                      onClick={onChangeImg}
                      src={img1}
                      className="border_img py-4  my-8 w-16 img_style_border"
                      alt="..."
                    />
                    <img
                      className="border_img py-4 my-8 w-16"
                      onClick={onChangeImg}
                      src={img2}
                      alt="..."
                    />
                    <img
                      className="border_img py-4 my-8 w-16"
                      onClick={onChangeImg}
                      src={img3}
                      alt="..."
                    />
                    <img
                      className="border_img py-4 my-8 w-16"
                      onClick={onChangeImg}
                      src={img4}
                      alt="..."
                    />
                  </div>
                  <div className=" w-2/3">
                    <img className="w-full" src={imgShow} alt="..." />
                  </div>
                </div>
              </div>
              <div className="border-2 p-7">
                <div>
                  <p className="text-[25px] font-medium text-[#1e2d7d]">
                    {title}
                  </p>
                  <div className="text-sm">
                    <span className="text-[#00badb]">INSTE</span>
                    <span className="ml-1 pl-1 border-l-2">SKU: 2474DWH</span>
                  </div>
                </div>
                <hr />
                <div>
                  <div>
                    <span className="font-bold text-[#1e2d7d] uppercase ">
                      Price :
                    </span>{" "}
                    <span className="ml-9 text-red-500 text-2xl font-bold">
                      {price} $
                    </span>
                  </div>
                  <div className="mt-16 ">
                    <div className="flex flex-col items-start gap-5  md:gap-10  md:flex md:flex-row md:items-center  ">
                      <span className="font-bold text-[#1e2d7d] uppercase ">
                        Quantity :{" "}
                      </span>

                      <div className="flex  gap-4 border-[1px] border-black opacity-50 items-center h-11 px-2 ">
                        <BsPlus className="text-lg" onClick={handleChangeUp} />
                        <div>
                          <input
                            type="text"
                            value={amount}
                            onChange={changeamount}
                            className="  w-6 box-border text-center"
                          />
                        </div>
                        <BiMinus
                          className="text-lg"
                          onClick={handleChangeDown}
                        />
                      </div>
                      <div>
                        <button  className="bg-orange-500 py-2 px-5  text-white hover:bg-orange-400 ">
                        
                          Click Buy
                        
                        </button>
                      </div>
                    </div>
                    <div className=" mt-5">
                      <span className="font-bold text-[#1e2d7d] uppercase ">
                        Description :
                      </span>
                      <p className="font-light text-base mt-4">
                        <li>{description}</li>
                      </p>
                    </div>
                  </div>
                </div>
                <button 
                  className="ease-linear	duration-300 bg-[#fa9405] mt-8 h-12 text-white w-6/12 hover:bg-[rgba(250,148,5,.8)]" 
                  onClick={
                    () => scrollToTop()
                }>
                  
                  Add to cart
              
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white px-4 py-3 md:w-1/2 mx-auto">
        <div className="border-2 mx-auto px-4 pb-4  ">
          <div className=" mt-3">
            <h5 className="text-[#1e2d7d] font-medium">Đánh giá sản phẩm Nest x Yale Lock with Nest </h5>
          </div>
          <div className="border-2 mt-2 px-3 pt-2 hover:bg-slate-50     ">
          <div className="flex items-center gap-4 mb-2 ">
            <span className="font-semibold  ">Anonymous</span>
            <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-green-400" /> 
              <span className="text-green-600 italic text-xs">
              đã mua hàng tại SmartHome
              </span>
            </div>
          </div>
            <div>
              <p className="mb-0">Sản phẩm tốt đạt chất lượng</p>
              <span className="italic text-xs">2 ngày trước</span>
            </div>
            </div>
          <div className="border-2 mt-2 px-3 pt-2 hover:bg-slate-50   ">
          <div className="flex items-center gap-4 mb-2 ">
            <span className="font-semibold  ">Anonymous</span>
            <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-green-400" /> 
              <span className="text-green-600 italic text-xs">
              đã mua hàng tại SmartHome
              </span>
            </div>
          </div>
            <div>
              <p className="mb-0">Sản phẩm tốt đạt chất lượng</p>
              <span className="italic text-xs">2 ngày trước</span>
            </div>
            </div>
          <div className="border-2 mt-2 px-3 pt-2 hover:bg-slate-50   ">
          <div className="flex items-center gap-4 mb-2 ">
            <span className="font-semibold  ">Anonymous</span>
            <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-green-400" /> 
              <span className="text-green-600 italic text-xs">
              đã mua hàng tại SmartHome
              </span>
            </div>
          </div>
            <div>
              <p className="mb-0">Sản phẩm tốt đạt chất lượng</p>
              <span className="italic text-xs">2 ngày trước</span>
            </div>
            </div>
          <div className="border-2 mt-2 px-3 pt-2 hover:bg-slate-50   ">
          <div className="flex items-center gap-4 mb-2 ">
            <span className="font-semibold  ">Anonymous</span>
            <div className="flex items-center gap-2">
                <BsPatchCheckFill className="text-green-400" /> 
              <span className="text-green-600 italic text-xs">
              đã mua hàng tại SmartHome
              </span>
            </div>
          </div>
            <div>
              <p className="mb-0">Sản phẩm tốt đạt chất lượng</p>
              <span className="italic text-xs">2 ngày trước</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
