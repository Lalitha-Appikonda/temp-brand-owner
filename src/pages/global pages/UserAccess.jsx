import React from 'react'
import { Images } from '../../images/Image'
import { Outlet } from 'react-router-dom'

const UserAccess = () => {
  return (
    <>
    <div className='user-access-conatiner'>
        <div className='container access-wrapper'>
            <div><img src={Images.diffImg} alt="image" /></div>
            <div className='main-content'>
                <img src={Images.lessThan} alt="" />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserAccess



{/* <div className='back-btn'><img src={Images.lessThan} alt="" /></div>
                <div className='text-content'>
                    <h1>Set Your Security Question</h1>
                    <p>Choose and answer a security question to help you safely
reset your password anytime you forget it.</p>
                </div> */}