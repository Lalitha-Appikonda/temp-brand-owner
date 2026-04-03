import React from 'react'
import Buttons from '../../components/form-elements/Buttons';
import PopUp from '../popup/PopUp';
import { Images } from '../../images/Image';

const Productreview = () => {
  return (
    <div>
      <div className='product-review'>
        <h2>Review this product</h2>
        <h5>Share your thoughts with other customers</h5>
        <div>

          <PopUp trigger={<Buttons variant='outline-primary'>Write a Product Review</Buttons>
          } size="sm" title="Edit Package">
            <div>
                <img className='how-item-img'  src={Images.product}/>
            </div>
          </PopUp>
        </div>
      </div>
    </div>
  )
}

export default Productreview