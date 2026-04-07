import React from 'react'
import PopUp from '../popup/PopUp'
import Buttons from '../form-elements/Buttons'
import Input from '../form-elements/Input'
import { Images } from '../../images/Image'
import TextArea from '../form-elements/TextArea'

const ProRevMob = () => {
  return (
    <div className='pro-rev-mob'>
        <PopUp trigger={<Buttons variant='outline-primary'>Write a Review</Buttons>
        } size="md" title="Edit Package">
          <div className='product-review-popup'>
            <div className='howitem-row'>
              <div className='how-item-img'><img src={Images.product} /></div>
              <div className='howitem-title'>
                <h3 >How was the item?</h3>
                <h5 >Aquaremid - Unique Biotech Pvt Ltd</h5>
                <div className='yellowstars'>
                  {[...Array(5)].map((_, index) => (
                    <img className='yellowstars' key={index} src={Images.yellowstar} alt="star" width="20" />
                  ))}
                </div>
              </div>
            </div>
            <div className='howitem-inputs'>
              <Input placeholder='eg; Good Quality' label="Title your review (Required)" />
            </div>
            <div className='howitem-inputs'>
              <TextArea placeholder='eg; Good Quality' label="Write your review" />
            </div>
           
              <div className="howitem-inputs">
                <label className="file-upload">
                  <input type="file" />
                  <div className="upload-box">
                    <span className="icon"><img src={Images.uplaod}/>Upload file</span>
                    <p></p>
                  </div>
                </label>
              </div>   
            <div className='howitem-buttons'>
              <Buttons variant='outline-primary'>Cancel</Buttons>
              <Buttons variant='primary'>Submit</Buttons>
            </div>
          </div>
        </PopUp>
    </div>
  )
}

export default ProRevMob