import React from 'react'
import { Images } from '../../images/Image'
import SelectBox from '../form elements/SelectBox'
import Buttons from '../form elements/Buttons'
import { FiArrowUpRight } from 'react-icons/fi'

const Card = () => {
  return (
    <div className='card-context'>
      <div className='card'>
        <div className='card-image-wrapper'>
          <div className='image-likeback'>
            <img src={Images.like} />
          </div>
        </div>

        <div className='image-container'>
          <div class="rating">
            <img src={Images.ministar} />
            <h6>5.0</h6>
            <img src={Images.minline} />
            <h6>20K</h6>
          </div>

          <img src={Images.product} alt="Product" class="product-img" />
        </div>
        <h1 className='image-text'>Probizyme</h1>
        <h3 className='rupees'>₹1700</h3>

        <div className='select-cart'>
          <select>
            <option value="all">500g</option>
            <option value="pending">200g</option>
            <option value="approved">1000g</option>
            <option value="rejected">300g</option>
          </select>

          <Buttons className='btn'>Add to Cart</Buttons>
        </div>


      </div>
     <div className='btn-down'>
      <Buttons variant="circle-secondary">
        <FiArrowUpRight className="arrow-icon" />
      </Buttons>
      </div>
    </div>
  )
}

export default Card