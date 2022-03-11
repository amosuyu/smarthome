import React from "react";
import { useDispatch } from "react-redux";
import "./style.scss";
import { AiFillDelete } from "react-icons/ai";

import { actRemoveProduct } from "container/Client/saveProductToBuyReducer/reducer";

export default function ItemToChose({ item }) {
  const { photo, price, id } = item;
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center justify-between min-w-[13rem] py-2 border-b-2">
        <div className="w-10">
          <img src={`http://localhost:8000/images/${photo}`} alt="ma" />
        </div>
        <div className="flex items-center">
          <input className="w-10 text-center" type="number" value="1" />
        </div>
        <div>{price}$</div>
        <AiFillDelete
          title="remove"
          onClick={() => dispatch(actRemoveProduct(id))}
        />
      </div>
    </>
  );
}
