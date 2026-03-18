import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Images } from '../../images/Image'
import Buttons from '../../components/form elements/Buttons'

const RejectedApproval = () => {
  return (
    <>
    <div className='rejected-screen'>
            <div className='close-icon'><FaTimes className='icon'/></div>
            <div className="container">
                <div className='rejected-content'>
                    <img src={Images.rejected} alt="" />
                    <h1>Account Rejected</h1>
                    <h3>We are sorry to inform you that your account has not been
approved at this time. Please try again later.</h3>
                    <div>
                        <Buttons variant="outline-primary">Close</Buttons>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RejectedApproval