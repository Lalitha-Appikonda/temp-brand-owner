import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Cart Page</h2>

      {/* 🔹 Proceed to Address */}
      <button onClick={() => navigate("/address")}>
        Proceed to Delivery
      </button>
    </div>
  )
}

export default Cart;