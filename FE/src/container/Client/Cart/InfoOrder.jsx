import { list } from "postcss";
import React from "react";

const listProduct = [
  {
    name: "iPhone 13 Pro Max",
    price: 19000000,
    quantity: 1,
  },

  {
    name: "iPhone 12 Pro Max",
    price: 15000000,
    quantity: 1,
  },

  {
    name: "iPhone 11 Pro Max",
    price: 11000000,
    quantity: 1,
  },
];

const InfoOrder = () => {
  return (
    <div className="w-[90%] border-2 mx-4 p-3 mb-4 md:w-full">
      <h3 className="mb-4 text-xl text-[#1e2d7d] uppercase md:font-bold ">Đơn hàng của bạn</h3>
      <table className="table-fixed flex flex-col gap-3">
        <thead>
          <tr className="flex justify-between ">
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        {listProduct.map((item, index) => (
          <tbody key={index}>
            <tr className="flex justify-between">
              <td className="truncate">{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}$</td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="flex justify-between mt-4">
          <span className="uppercase text-red-500 font-bold">Tổng tiền</span>
          <span className="text-red-500 font-bold text-xl">29000000$</span>
      </div>
    </div>
  );
};

export default InfoOrder;
