import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './../../components/form elements/Input';
import { Images } from '../../images/Image'
import Buttons from './../../components/form elements/Buttons';


const SignUp = () => {
  const navigate = useNavigate()

  return (
   <div className="signup-container">

  
  <p className='logintext'>Create Your Account</p>
  <h4 class="singing-text">
    Continue managing your sales, purchases, and reports by signing in securely.
  </h4>

 
  <div className="input-box">
    <img src={Images.user} class="icon left"/>
    <Input  placeholder="Name"/>
  </div>

  
  <div className="input-box">
    <img src={Images.user} class="icon left"/>
    <Input placeholder="Username"/>
  </div>

 
  <div className="input-box">
    <img src={Images.user} class="icon left"/>
    <Input placeholder="password"/>
    <img src={Images.user} class="icon right"/>
  </div>

 
  <ul className="rules">
   <li className='rules-img'><span><img src={Images.user} className=""/></span> at least 8 characters</li>
    <li className='rules-img'><span><img src={Images.user} className=""/></span>at least 1 special character</li>
     <li className='rules-img'><span><img src={Images.user} className=""/></span>at least 1 number</li>
  </ul>

 
  <div className="input-box">
    <img src={Images.user} class="icon left"/>
    <Input  placeholder="Re-enter Password"/>
    <img src={Images.user} class="icon right"/>
  </div>

 
  <Buttons className='btn button'>Next</Buttons>

  <div className='login-texts'>
    <p> Already Have an Account?</p>
    <p>Login</p>
    
  </div>

  <p className="terms">
    By clicking, I confirm that I have read, understood, and agree to the
    <a href="#">Terms of Service</a>
  </p>

</div>

    


  )
}

export default SignUp