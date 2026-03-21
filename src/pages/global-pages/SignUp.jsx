import React from 'react'
import { useNavigate } from 'react-router-dom'
import Input from './../../components/form elements/Input';
import { Images } from '../../images/Image'
import Buttons from './../../components/form elements/Buttons';


const SignUp = () => {
  const navigate = useNavigate()
  const rules = [
    { text: "At least 8 characters", icon: Images.minus },
    { text: "At least 1 special character", icon: Images.minus },
    { text: "At least 1 number", icon: Images.minus }
  ];

  return (
    <div className="signup-container">
      {/* <div className='container'> */}


      <p className='logintext'>Create Your Account</p>
      <h4 className="singing-text">
        Continue managing your sales, purchases, and reports by signing in securely.
      </h4>


      <div className="input-box">
        <img src={Images.user} className="icon left" />
        <Input placeholder="Name" />
      </div>


      <div className="input-box">
        <img src={Images.user} className="icon left" />
        <Input placeholder="Username" />
      </div>


      <div className="input-box">
        <img src={Images.lockicon} className="icon left" />
        <Input placeholder="password" />
        <img src={Images.eyeicon} className="icon right" />
      </div>


      <ul className='rules'>
        {rules.map((rule, index) => (
          <li key={index} className="rules-img">
            <span>
              <img src={rule.icon} alt="icon" />
            </span>
            {rule.text}
          </li>
        ))}
      </ul>


      <div className="input-box">
        <img src={Images.lockicon} className="icon left" />
        <Input placeholder="Re-enter Password" />
        <img src={Images.eyeicon} className="icon right" />
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

    //  </div>   


  )
}

export default SignUp