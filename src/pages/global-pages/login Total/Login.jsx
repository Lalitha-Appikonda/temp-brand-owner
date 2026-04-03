import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from "axios"
import * as Yup from "yup";

import { Images } from '../../../images/Image';

import Input from '../../../components/form-elements/Input';
import Buttons from '../../../components/form-elements/Buttons';

const Login = () => {

    const navigate = useNavigate()
    
    const [form,setForm]=useState({
        username:"",
        password:""
    })
    const [errors,setErrors]=useState({})
    const [showPassword,setShowPassword]=useState(false);
    

    const [isValid, setIsValid] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
        };

    const handlechange= async(e)=>{
        const {name,value}=e.target;

        const updatedForm={
            ...form,
            [name]:value
        }
        setForm(updatedForm)

        setErrors((prev)=>({
            ...prev,
            [name]:" " // clear errors
        }));
         
        try{
            await loginSchema.validate(updatedForm,{abortEarly:false})
            setIsValid(true);
        }catch{
            setIsValid(false)
        }
        
    }
    const loginSchema=Yup.object({
        username:Yup.string()
        .trim()
        .min(5, "*Minimum 5 characters")
        .required("*Username is required"),
        password:Yup.string()
        .trim()
        .min(6,"*Minimum 6 characters")
        .required(" *Password required")  //have to write one more validation here , if the user enter wrong credentials then it will show error 
    })

    const handlelogin = async () => {
  try {
     
    await loginSchema.validate(form, { abortEarly: false });

     
    setErrors({});

     
    const response = await axios.post(
      "https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/login",
      form
    );

    const { accessToken, refreshToken,userId } = response.data;

    localStorage.setItem("accesstoken", accessToken);
    localStorage.setItem("refreshtoken", refreshToken);

    navigate("/");

  } catch (err) {

 
    if (err.name === "ValidationError") {
      const validationErrors = {};

      err.inner.forEach((e) => {
        validationErrors[e.path] = e.message;
      });

      setErrors(validationErrors);
    }

    
    else {
      console.log("API ERROR:", err.response?.data);

      const apiMsg=err.response?.data?.message || err.response?.data?.error || " Invalid username or password";

      setErrors({
        api:apiMsg
      })
    }
  }
};
    
    return (
        <div className='login-container'>
            <h1 className='title-text'>Login Your Account</h1>
            <h3 className='sub-title-text  login-texts'>Continue managing your sales, target, and reports by signing in securely.</h3>
            <div className="input-box">
                <img src={Images.user2} className="icon left" />
                <Input placeholder="Name" name="username" value={form.username} onChange={handlechange} onKeyDown={(e)=>e.key === " " && e.preventDefault()} maxLength={25} error={errors.username}  />
            </div>
            {/* {errors.username && <p className='error-text'>{errors.username}</p> } */}

            <div className="input-box">
                <img src={Images.lockicon} className="icon left" />
                <Input placeholder='Password' name="password" value={form.password} onChange={handlechange}   type={showPassword? "text":"password"} onKeyDown={(e)=>e.key === " " && e.preventDefault()} maxLength={16} error={errors.password}/>
                <img 
                    src={showPassword ? Images.eyeclose : Images.eyeicon}
                    className="icon right" 
                    onClick={togglePassword}
                    style={{ cursor: "pointer" }}
                    />
             </div>
             {errors.api && <p className="error-text">{errors.api}</p>}

             
              
          
            <div className='login-wrapper'>
                {/* <div className='flex-swites'>
                    <h3 className='forgot-text' >Remember me</h3>
                    <label className="switch">
                        <input type="checkbox" id="toggle" />
                        <span className="slider"></span>
                    </label>
                </div> */}
                <div>
                    <h3 className='forgot-text forgotpassword' onClick={() => navigate('/login/forgotpassword')}>Forgot Password</h3>
                </div>

            </div>

            <Buttons className='btn login-button' variant='primary' onClick={handlelogin} >Login</Buttons>
            <div className='login-texts'>
                <p> Don't Have an Account?</p>
                <p onClick={() => navigate('/sign-up')}>Signup</p>

            </div>

        </div>
    )
}

export default Login