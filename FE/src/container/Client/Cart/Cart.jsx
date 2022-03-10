import React, { useState, useEffect } from "react";
import ProductInCart from "./ProductInCart";

const data = [
  {
    id: 1,
    name: "August Smart Lock",
    price: 1230000,
    url: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-200x200.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "August Smart Lockkkk",
    price: 123456,
    url: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-200x200.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "August Smart Lockkkkckkkk",
    price: 123533443,
    url: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-200x200.jpg",
    quantity: 1,
  },
];
const Cart = () => {
  const [listProduct, setListProduct] = useState([]);
  

  
 
  useEffect(() => {
    setListProduct(data);
    console.log(listProduct)
  }, []);

  const handleIncrement = (id) => {
    setListProduct((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity === 10 ? 10 : product.quantity + 1,
            }
          : product
         
      )
    );
  };
  const handleDecrement = (id) => {
    setListProduct((prev) =>
      prev.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity === 1 ? 1 : product.quantity - 1,
            }
          : product
      )
    );
  };
  const removeProduct = (id) => {
      const removeArr = [ ...listProduct].filter(product => product.id !== id);
      setListProduct(removeArr);
  }
  return (
    <div>
        <>
        {
            listProduct.map((item, index) => {
                return (
                <ProductInCart key={index} product={item} increment={handleIncrement} decrement={handleDecrement} remove={removeProduct} />
                )
            })
        }
        </>
    
    </div>
  );
};

export default Cart;
