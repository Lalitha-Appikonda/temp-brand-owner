import React from 'react'
import { Images } from '../../images/Image'
import SelectBox from '../form elements/SelectBox'
import Buttons from '../form elements/Buttons'
import { FiArrowUpRight } from 'react-icons/fi'

const Card = ({
  title,
  price,
  oldPrice,
  discount,
  badge,
  showQuantity,
}) => {
  return (
    <div className='card-context'>
      <div className='card'>

        {badge && <div className={`badge ${badge.toLowerCase()}`}>{badge}</div>}

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

        <h1 className='image-text'>{title}</h1>
        <div className="price-section">
          <h3 className="rupees">₹{price}</h3>

          {oldPrice && <span className="old-price">₹{oldPrice}</span>}
          {discount && <span className="discount">{discount}</span>}
        </div>

        <div className='select-cart'>
          <select>
            <option value="">500g</option>
            <option value="">200g</option>
            <option value="">1000g</option>
            <option value="">300g</option>
          </select>

          {showQuantity ? (
            <div className="quantity">
              <button className='reduce'>-</button>
              <span>3</span>
              <button className='increase'>+</button>
            </div>
          ) : (
            <Buttons>Add to Cart</Buttons>
          )}
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