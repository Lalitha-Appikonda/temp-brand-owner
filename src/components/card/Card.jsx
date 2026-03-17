import React from 'react'
import { Images } from '../../images/images'

const Card = () => {
  return (
    <>
    <div className='card-container'>
        <div className='card-image-wrapper'>
            <div className='like-btn-row'>
                <button>hot</button>
                <div className='like'><img src={Images.likeIcon} alt="" /></div>
            </div>
            <div><img src={Images.product1} alt="" /></div>
        </div>
    </div>
    </>
  )
}

export default Card