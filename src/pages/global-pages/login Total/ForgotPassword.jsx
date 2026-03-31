import React, { useState } from 'react'
import Input from "../../../components/form-elements/Input";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as Yup from "yup"
import { Images } from '../../../images/Image';
import Buttons from '../../../components/form-elements/Buttons';

const ForgotPassword = () => {

   const [username,setusername]=useState("");
   const [error,setError]=useState("");

  const navigate = useNavigate()

  const usernameSchema=Yup.string()
    .trim()
    .required("enter username")
  
    const handlechange=(e)=>{
      setusername(e.target.value)
      setError("");

    }

    const handlesubmit= async (e)=>{
      e.preventDefault();
      
      try{
        await usernameSchema.validate(username);

        const response=await axios.post("https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/getUser",
          {
            username
          }
        )
        console.log(response.data)
        console.log("FULL RESPONSE:", response);
        const userId=response.data.data;
        console.log(userId)

        const getresponse=await axios.get(`https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/getQuestions/${userId}`)
        const questions = getresponse.data; 
        console.log(getresponse.data)
        
        navigate("/login/forgot-after-setup",{
          state:{userId,questions}
        })

      }catch(err){
        console.log(err)

        if(err.name === "ValidationError"){
          setError(err.message);
        }else{
          setError(err.response?.data?.message || "user not found")
        }
      }

      

    }
  

 
  
  
  return (
    <div className='forgotpassword-container'>
      <div className="back-btn" onClick = {()=>navigate('/login')}>
        <img src={Images.lessThan} alt="" />
      </div>

      <p className='title-text'>Forgot Password</p>
      <h3 className='sub-title-text'>For forgot password enter username</h3>
      <form onSubmit={handlesubmit}>
              <div className='input-box-container'>
                  <label className='label-text'>Username</label>
                  <div className="input-box">
                    <img src={Images.user2} className="icon left" />
                    <Input placeholder='Enter username' name="username" value={username} maxLength={25} onChange={handlechange} onKeyDown={(e)=>e.key === " " && e.preventDefault()}/>

                  </div>
                  {error && <p className='error-text'>{error}</p> }
              </div>
              <div className='action-buttons'>
                <Buttons type="button" className='cancel-button' variant='btn btn-outline-primary' onClick = {()=>navigate('/login')}>Cancel</Buttons>
                <Buttons type="submit" className='submit-button' variant=' btn btn-secondary'>Submit</Buttons>
              </div>
      </form>

    </div>
  )
}

export default ForgotPassword