import React from 'react'
import { useNavigate } from 'react-router-dom';

const DeliveryAddress = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Delivery Address Page</h2>

      <button onClick={() => navigate("/address/edit")}>
        Edit Address
      </button>
    </div>
  )
}

export default DeliveryAddress;