import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  return (
    <div>
      <h2>Product Page</h2>
      <h3>Product ID: {id}</h3>

     
      <button onClick={() => navigate(`/product/${id}/reviews`)}>
        View Reviews
      </button>

     
      <button onClick={() => navigate("/cart")}>
        Buy Now
      </button>
    </div>
  )
}

export default Product;