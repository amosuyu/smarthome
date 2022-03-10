import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ListItemSearch({
  handleValue,
  focusFill,
  focus,
  setOpen,
  setfocus
}) {
  let valueInput = handleValue?.target.value;
  const navigate = useNavigate();
  const { dataProduct } = useSelector((state) => state.productReducer);

  const newDataProduct = dataProduct?.filter((item) => {
    if (valueInput) {
      return item.title.toLowerCase().indexOf(valueInput.toLowerCase()) !== -1;
    }
    return dataProduct;
  });

  return (
    <div
      className={`absolute w-full min-h-[3rem] leading-[3rem] bg-white z-10 border-2 rounded-sm p-1 ${
        !focus && "hidden"
      }`}
      ref={focusFill}
    >
      {newDataProduct?.map((product, index) => {
        const { title, price, photo } = product;
        return (
          <div
            key={index}
            className="flex max-h-[10rem] border-b-2 p-x-5 items-center cursor-pointer"
            onClick={(e) => {
              setOpen(false);
              setfocus(false);
              navigate("/feature", { state: product });
            }}
          >
            <img
              src={`http://localhost:8000/images/${photo}`}
              alt={photo}
              className="h-16 pr-3"
            />
            <p className="text-[15px] leading-[1.5] w-full pr-3">{title}</p>
            <p>{price}$</p>
          </div>
        );
      })}
      {newDataProduct?.length == 0 && (
        <p className="text-center leading-[1.5] m-auto p-[inherit]">
          -- no result--
        </p>
      )}
    </div>
  );
}
