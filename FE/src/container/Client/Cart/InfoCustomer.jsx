import React from "react";
import Input from "./Input";

const InfoCustomer = (props) => {
    const {inputType, classStyle, label, placeHolder, valueInput,styleLabel} = props
  return (
    <div className="flex flex-col border-2 mx-4  p-3 py-4 md:w-full ">
      <h1 className="text-[#1e2d7d] text-xl uppercase md:font-bold ">Thông tin nhận hàng</h1>
      <div className="flex flex-col  gap-3 text-sm">
      <Input label='Họ:' inputType='text' styleLabel="text-[#1e2d7d] font-bold" classStyle='w-[80%] box-border border-[1px] rounded-lg px-2 py-1 text-base  focus:outline-red-200 md:w-2/3'   />
      <Input label='Tên:' inputType='text' styleLabel="text-[#1e2d7d] font-bold" classStyle='w-[80%] box-border border-[1px] rounded-lg  px-2 py-1 text-base  focus:outline-red-200 md:w-2/3'    />
      <Input label='Quốc gia/Khu vực' inputType='text' valueInput='Việt Nam' styleLabel="text-[#1e2d7d] font-bold" classStyle='w-[25%]  focus:none  px-2 py-1 md:w-[30%]'    />
      <Input label='Địa chỉ:' inputType='text' placeHolder='nhập địa chỉ' styleLabel="text-[#1e2d7d] font-bold" classStyle='w-[80%] box-border border-[1px] rounded-lg  px-2 py-1 text-base  focus:outline-red-200 md:w-2/3'   />
      <Input label='Tỉnh/thành phố' inputType='text' styleLabel="text-[#1e2d7d] font-bold" classStyle='w-[80%] box-border border-[1px] rounded-lg  px-2 py-1 text-base  focus:outline-red-200 md:w-2/3'    />
      <Input label='Số điện thoại:' inputType='text' styleLabel="text-[#1e2d7d] font-bold"classStyle='w-[80%] box-border border-[1px] rounded-lg  px-2 py-1 text-base  focus:outline-red-200 md:w-2/3'    />
      <Input label='Địa chỉ Email:' inputType='text' placeHolder='example@gmail.com'  styleLabel="text-[#1e2d7d] font-bold" classStyle='w-[80%] box-border border-[1px] rounded-lg  px-2 py-1 text-base  focus:outline-red-200 md:w-2/3'    />
      <div className="flex justify-between items-center md:justify-start">
      <Input label='Đăng kí nhận Email từ SmartHome' inputType='checkbox' styleLabel="text-[#1e2d7d] font-bold" classStyle='w-[80%] box-border border-[1px] rounded-lg  px-2 py-1 text-3xl focus:outline-red-200 md:w-2/3'    />
      </div>
      <button className="bg-red-600 uppercase w-2/3 mx-auto p-2 text-white mt-5 hover:bg-red-500 cursor-pointer md:w-1/5">Đặt Hàng</button>
      </div>
    </div>
  );
};

export default InfoCustomer;
