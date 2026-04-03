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
   const [isSubmitted, setIsSubmitted] = useState(false);

  const [isValid, setIsValid] = useState(false);
  const isFormReady = isValid && username.trim().length >= 3;


  const navigate = useNavigate()

  const usernameSchema=Yup.string()
    .trim()
    .min(3, "Minimum 3 characters") 
    .required("enter username")
  
    const handlechange = async (e) => {
        const value = e.target.value;
        setusername(value);
        
        if(isSubmitted){
          setError("")
        }

        try {
          await usernameSchema.validate(value);
          setIsValid(true);
        } catch (err) {
          setIsValid(false);
        }
      };

    const handlesubmit = async (e) => {
      e.preventDefault();
      setIsSubmitted(true); //  

      try {
        await usernameSchema.validate(username);

        const response = await axios.post(
          "http://localhost:5051/rest2/0.1/unAuth/getUser",
          { username }
        );

        const userId = response.data.data.id;

        const getresponse = await axios.get(
          `http://localhost:5051/rest2/0.1/unAuth/getQuestions/${userId}`
        );

        const questions = getresponse.data;

        navigate("/login/forgot-after-setup", {
          state: { userId, questions },
        });

      } catch (err) {
        if (err.name === "ValidationError") {
          setError(err.message);
        } else {
          setError(err.response?.data?.message || "user not found");
        }
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
                    <Input placeholder='Enter username' name="username" value={username} maxLength={16} onChange={handlechange} onKeyDown={(e)=>e.key === " " && e.preventDefault()}/>
                    {isSubmitted && error && (<p className='error-text'>{error}</p>)}
                  </div>
                  
              </div>
              <div className='action-buttons'>
                <Buttons type="button" className='cancel-button' variant='btn btn-outline-primary' onClick = {()=>navigate('/login')}>Cancel</Buttons>
                <Buttons
                  type="submit"
                  className="submit-button"
                  variant={`btn ${isFormReady ? "btn-primary" : "btn-secondary"}`}
                   
                >
                  Submit
                </Buttons>
              </div>
      </form>

    </div>
  )
}

export default ForgotPassword