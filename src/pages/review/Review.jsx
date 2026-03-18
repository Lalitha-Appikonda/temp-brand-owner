import React from 'react'
import { useParams } from 'react-router-dom';

const Review = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Review Page</h2>
      <h3>Reviews for Product ID: {id}</h3>
    </div>
  )
}

export default Review;