import React, { useEffect, useState } from "react";
import { Images } from "../../../images/Image";
import Input from "../../../components/form-elements/Input";
import Buttons from "../../../components/form-elements/Buttons";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";


const Forgotaftersetup = () => {

  const [answer,setanswer]=useState({});
   

   const location=useLocation();
   const userId=location.state?.userId;
   const questions=location.state?.questions || [];
   console.log(userId)
   console.log(questions)

   const navigate=useNavigate()

   useEffect(()=>{
    if (!userId){
      navigate("/login/forgotpassword")
    }
   },[userId,navigate])


   //validation 

   const getValidationSchema =()=>{
    const shape={}

    questions.forEach((q)=>{
      shape[q.qid]=Yup.string().trim().required("Answers are required")
    })
    return Yup.object().shape(shape)
   }

   const handlechange=(e, qid)=>{
    setanswer((prev)=>({
      ...prev,
      [qid]:e.target.value
    }))
   }

   const handlesubmit= async (e)=>{
    e.preventDefault();

    try {
       const schema=getValidationSchema();
       await schema.validate(answer,{abortEarly:false})

       const payload={
        answers:Object.entries(answer).map(([qid,ans])=>({
          qid:Number(qid),
          answer:ans
        }))
       }
       console.log(payload);

       const response=await axios.post(`https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/attemptAnswers/${userId}`,
        
          payload
        
       )
       console.log(response.data)
       navigate("/reset-password",{
        state:{userId}
       })

       
    } catch (error) {
      if (error.name==="ValidationError"){
        console.log(error)
      }
      
    }

   }

  return (
    <form onSubmit={handlesubmit}>
      <div className="aftersetup-container">
        <div className="back-btn">
          <img src={Images.lessThan} alt="" />
        </div>

        <p className="title-text">Answer Your Security Question</p>

        <h3 className="sub-title-text">
          Answer your already setup question after that you can change login password.
        </h3>

        <div className="ques-container">
          {questions.map((q, index) => (
            <div className="boxes" key={index}>
              <div>
                <div className="row1">
                  <img src={Images.quesIcon} alt="" />
                  <p className="ques">{q.question}</p>
                </div>

                <div className="ans-input">
                  <Input placeholder="Answer" onChange={(e)=>handlechange(e,q.qid)} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Buttons
          type="submit"
          className="submit-button"
          variant="btn btn-secondary"
        >
          Submit
        </Buttons>
      </div>
    </form>
  );
};

export default Forgotaftersetup;