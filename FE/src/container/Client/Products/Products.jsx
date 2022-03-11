import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actListProducts } from "container/Client/ClientHome/SliderFeaturedBrand/module/action";
import { IoMdArrowDropright } from "react-icons/io";
export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { dataProduct } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(actListProducts());
  }, []);

  return (
    <div className="m-auto w-5/6 grid grid-cols-1 gap-4 md:grid-cols-3 ">
      {dataProduct.map((item, index) => {
        const { photo, title, price, description } = item;
        return (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg mx-auto w-10/12 md:"
          >
            <img
              className="w-full"
              src={`http://localhost:8000/images/${photo}`}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-gray-700 text-base text-ellipsis overflow-hidden whitespace-nowrap">
                {description}
              </p>
              <p
                className="cursor-pointer inline ease-linear duration-100 text-[#007bff] hover:text-[#0056b3]"
                onClick={() => navigate("/feature", { state: item })}
              >
                Xem chi tiết{" "}
                <IoMdArrowDropright className="inline text-[2rem]" />{" "}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {price}$
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
