import React from 'react'
import { Images } from '../../images/Image'
import { FaTimes } from 'react-icons/fa'
import Buttons from '../../components/form elements/Buttons'

const AccountApproved = () => {
  return (
    <>
    <div className='approved-screen'>
            <div className='close-icon'><FaTimes className='icon'/></div>
            <div className="container">
                <div className='approved-content'>
                    <img src={Images.approved} alt="" />
                    <h1>Account Approved</h1>
                    <h3>Please login using your username and password</h3>
                    <div>
                        <Buttons variant="outline-primary">Go to the Login</Buttons>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccountApproved