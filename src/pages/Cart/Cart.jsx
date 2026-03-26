import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import PopUp from "../../components/popup/PopUp";   

 
const productImg = "/assets/products/product-1.png";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "AQUAREMID", qty: 2, price: 300 },
    { id: 2, name: "AQUABISON", qty: 3, price: 30 },
  ]);

 
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

 
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div>Cart</div>
  )
}

export default Cart