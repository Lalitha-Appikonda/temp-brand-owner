import React from 'react'
import { Images } from '../../images/Image'
import {  FaTimes} from 'react-icons/fa'

const ApprovalWait = () => {
  return (
    <>
    <div className='wait-time-screen'>
        <div className='close-icon'><FaTimes className='icon'/></div>
        <div className="container">
            <div className='wait-content'>
                <img src={Images.waitTime} alt="" />
                <h1>Please Wait for Approval</h1>
                <h3>You have successfully submitted your details. Please wait for management approval. Once your account is approved. you can login using your username and password. </h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default ApprovalWait