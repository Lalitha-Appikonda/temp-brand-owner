import React from 'react'
import { Images } from '../../../images/Image'
import Buttons from '../../../components/form elements/Buttons'
import Input from '../../../components/form elements/Input'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = ({ formData, setFormData, nextStep }) => {
  const navigate = useNavigate()
  return (
    <div className='forgotpassword-container'>
      <div className="back-btn" onClick = {()=>navigate('/login')}>
        <img src={Images.lessThan} alt="" />
      </div>

      <p className='title-text'>Forgot Password</p>
      <h3 className='sub-title-text'>For forgot password enter username</h3>
      <div className='input-box-container'>
        <label className='label-text'>Username</label>
        <div className="input-box">
          <img src={Images.user2} className="icon left" />
          <Input placeholder='Enter username'
          value={formData.username}
          onChange={(e)=>setFormData(prev=>({...prev, username:e.target.value}))}
           />

        </div>
      </div>
      <div className='action-buttons'>
        <Buttons className='cancel-button' variant='btn btn-outline-primary' onClick = {()=>navigate('/login')}>Cancel</Buttons>
        <Buttons className='submit-button' variant=' btn btn-secondary' onClick = {()=>nextStep()}>Submit</Buttons>
      </div>

    </div>
  )
}

export default ForgotPassword