import React from "react";

const Header = () => {
  return (
    <div className="h-11 bg-[#1e2d7d] min-w-[375px] max-w-[780px] md:min-w-[780px] md:max-w-[1600px] flex items-center justify-center ">
      <span className="uppercase text-white font-poppins text-[13px] md:text-[15px]  ">
        FREE SHIPPING ON ORDERS OVER 199$
      </span>
    </div>
  );
};

export default Header;
