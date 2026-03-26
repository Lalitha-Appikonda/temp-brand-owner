import React from 'react'
import Input from '../../components/form elements/Input'
import { Images } from '../../images/Image'
import Buttons from '../../components/form elements/Buttons'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()
    
    return (
        <div className='login-container'>
            <p className='title-text'>Login Your Account</p>
            <h3 className='sub-title-text  login-texts'>Continue managing your sales, target, and
                reports by signing in securely.</h3>
            <div className="input-box">
                <img src={Images.user2} className="icon left" />
                <Input placeholder="Name" />
            </div>
            <div className="input-box">
                <img src={Images.lockicon} className="icon left" />
                <Input placeholder='Password' />
                <img src={Images.eyeicon} className="icon right" />
            </div>
            <div className='login-wrapper'>
                <div className='flex-swites'>
                    <h3 className='forgot-text' >Remember me</h3>
                    <label className="switch">
                        <input type="checkbox" id="toggle" />
                        <span className="slider"></span>
                    </label>
                </div>
                <div>
                    <h3 className='forgot-text forgotpaaword' onClick={()=> navigate('/login/forgotpssword')}>Forgot Password</h3>
                </div>

            </div>

            <Buttons className='login-button' variant='btn btn-secondary'>Login</Buttons>
            <div className='login-texts'>
                <p> Don’t Have an Account?</p>
                <p>Signup</p>

            </div>

        </div>
    )
}

export default Login