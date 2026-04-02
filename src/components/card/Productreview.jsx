import React from 'react'
import Buttons from '../../components/form-elements/Buttons';

const Productreview = () => {
  return (
    <div>
         <div className='product-review'>
                <h2>Review this product</h2>
                <h5>Share your thoughts with other customers</h5>
                <div>
                    <Buttons variant='outline-primary'>Write a Product Review</Buttons>
                </div>
            </div>
    </div>
  )
}

export default Productreview