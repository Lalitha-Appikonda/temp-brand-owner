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



