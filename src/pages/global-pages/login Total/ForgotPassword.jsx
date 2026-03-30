import React, { useState } from 'react'
import Input from "../../../components/form-elements/Input";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as Yup from "yup"
import { Images } from '../../../images/Image';
import Buttons from '../../../components/form-elements/Buttons';

const ForgotPassword = ({ formData, setFormData, nextStep }) => {

  const [username,setusername]=useState("")
  const navigate = useNavigate()

  const usernameSchema=Yup.string()
    .trim()
    .required("enter username")
    

  


  const handlechange=(e)=>{
    setusername(e.target.value);
  }

 const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    await usernameSchema.validate(username);

    // to  get User
    const userRes = await axios.post(
      "https://b17q02g4-5051.asse.devtunnels.ms/rest2/0.1/unAuth/getUser",
      { username }
    );

    console.log("User Response:", userRes.data);

    //  exatract id
    const userId = userRes.data.id; // or userRes.data.userId



    
    const quesRes = await axios.get(
      `https://b17q02g4-5051.asse.devtunnels.ms/rest2/0.1/unAuth/getQuestions/${userId}`
    );

    console.log("Questions:", quesRes.data);

    y
    navigate("/forgot-after-setup", {
      state: {
        questions: quesRes.data,
        userId: userId
      }
    });

  } catch (error) {
    console.log("error", error);
    alert(error.message || "Something went wrong");
  }
};
  
  
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
                    <Input placeholder='Enter username' name="username" value={username} onChange={handlechange}/>

                  </div>
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