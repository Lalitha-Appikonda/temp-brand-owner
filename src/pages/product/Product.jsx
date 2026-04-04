import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  return (
    <div>
      <h4>Product Page</h4>
      <h4>Product ID: {id}</h4>

     
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