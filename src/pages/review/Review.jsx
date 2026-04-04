import React from 'react'
import { useParams } from 'react-router-dom';

const Review = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Review Page</h3>
      <h4>Reviews for Product ID: {id}</h4>
    </div>
  )
}

export default Review;