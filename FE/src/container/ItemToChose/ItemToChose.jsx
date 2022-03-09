import React, { useState } from "react";
import "./style.scss";

import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export default function ItemToChose({ activeModel }) {
  const [price, setprice] = useState();
  return (
    <div
      className={`item_to_chose ease-linear duration-75 ${
        activeModel && "activeModelItemBuy"
      }`}
    >
      <div>
        <div>
          <img src="http://localhost:8000/images/16461297231.jpg" alt="ma" />
        </div>
        <div>
          <BsPlus />
          <div>
            <input type="number" defaultValue={price} />
          </div>
          <BiMinus />
        </div>
      </div>
    </div>
  );
}
