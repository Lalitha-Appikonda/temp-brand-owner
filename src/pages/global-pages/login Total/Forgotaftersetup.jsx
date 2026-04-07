import React, { useEffect, useState } from "react";
import { Images } from "../../../images/Image";
import Input from "../../../components/form-elements/Input";
import Buttons from "../../../components/form-elements/Buttons";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";


const Forgotaftersetup = () => {

  const [answer,setanswer]=useState({});
  const [apiError, setApiError] = useState("");

  const [fieldErrors, setFieldErrors] = useState({});

  const [isValid, setIsValid] = useState(false);
   

   const location=useLocation();
   const userId=location.state?.userId;
   const questions=location.state?.questions?.data || [];
  useEffect(() => {
  console.log("userId:", userId);
  console.log("questions:", questions);
}, []);

   // to flatten the array of arrays into a single array
const flatQuestions = questions.flat(); // ES2019+

   const navigate=useNavigate()

   useEffect(()=>{
    if (!userId){
      navigate("/login/forgotpassword")
    }
   },[userId,navigate])


   //validation 
   const getValidationSchema = () => {
    const shape = {};

    flatQuestions.forEach((q) => {
      shape[String(q.id)] = Yup.string()
        .trim()
        .min(3, "Answer must be at least 3 characters")
        .max(25, "Max 25 characters")
        .required(`Answer for "${q.question}" is required`);
    });

    return Yup.object().shape(shape);
  };

  useEffect(() => {
  if (flatQuestions.length === 0) return;

  const validateForm = async () => {
    const schema = getValidationSchema();
    try {
      await schema.validate(answer, { abortEarly: false });
      setIsValid(true);
    } catch {
      setIsValid(false);
    }
  };

  validateForm();
}, [answer, flatQuestions]);

const isFormReady =
  isValid &&
  flatQuestions.length > 0 &&
  flatQuestions.every((q) =>
    answer[String(q.id)]?.trim()
  );

 const handlechange = (e, id) => {
  const key = String(id);

  setanswer((prev) => ({
    ...prev,
    [key]: e.target.value,
  }));

  setFieldErrors((prev) => ({
    ...prev,
    [key]: "",
  }));
};

   const handlesubmit= async (e)=>{
    e.preventDefault();

    try {
      setApiError(""); //clear old error
       const schema=getValidationSchema();
       await schema.validate(answer,{abortEarly:false})

       const payload={
        answers:Object.entries(answer).map(([id,ans])=>({
          qid:Number(id),
          answer:ans.trim()
        }))
       }
       console.log(payload);

       const response=await axios.post(`http://localhost:5051/rest2/0.1/unAuth/attemptAnswers/${userId}`,
        
          payload
        
       )
       console.log(response.data)
       console.log("FINAL PAYLOAD:", payload);
       navigate("/login/reset-password",{
        state:{userId}
       })

       
    } catch (error) {
  if (error.name === "ValidationError") {
    const errorsObj = {};

    error.inner.forEach((err) => {
      errorsObj[String(err.path)] = err.message;
    });

    setFieldErrors(errorsObj);
    return;
  }

  const message = error.response?.data?.message;
  const lowerMsg = message?.toLowerCase() || "";

  // (limit exceed handling)
  if (
    message?.toLowerCase().includes("limit") ||
    message?.toLowerCase().includes("attempt") ||
    error.response?.status === 429 ||
    lowerMsg.includes("blocked") ||
    lowerMsg.includes("exceed")
  ) {
     setApiError("");
     
    navigate(`/status/limit-exceed`, {
      state: { type: "limit-exceed",
        username: location.state?.username
       }
    });
    return;
  }

  // normal API error
  if (message) {
    setApiError(message);
  }
}

   }
   console.log("fieldErrors:", fieldErrors);

  return (
    
    <form onSubmit={handlesubmit}>
      <div className="aftersetup-container">
        <div className="back-btn" onClick={() => navigate(-1)}>
          <img src={Images.lessThan} alt="" />
        </div>

        <h2 className="title-text">Answer Your Security Question</h2>

        <h4 className="sub-title-text">
          Answer your already setup question after that you can change login password.
        </h4>

        <div className="ques-container">
          {flatQuestions.map((q, index) => (
            <div className="boxes" key={q.id}>
              <div>
                <div className="row1">
                  <img src={Images.quesIcon} alt="" />
                  <p className="ques">{q.question}</p>
                </div>

                <div className="ans-input">
                  <Input placeholder="Answer"
                   onChange={(e)=>handlechange(e,q.id)}
                   value={answer[String(q.id)] || ""}
                   maxLength={25}
                   error={fieldErrors[String(q.id)]} 
                   onKeyDown={(e) => {
                    if (
                      !/[a-zA-Z ]/.test(e.key) &&
                      e.key !== "Backspace" &&
                      e.key !== "Tab" &&
                      e.key !== "ArrowLeft" &&
                      e.key !== "ArrowRight"
                    ) {
                      e.preventDefault();
                    }
                    if (e.key === " " && answer[String(q.id)]?.length === 0) {
                      e.preventDefault();
                    }

                    // prevent double space
                    if (e.key === " " && answer[String(q.id)]?.slice(-1) === " ") {
                      e.preventDefault();
                    }
                  }}
                  
                  
                    /> 
                    {apiError && <p className="error-text">{apiError}</p>}
                    
                </div>
               </div>
            </div>
          ))}
        </div>
         
        <Buttons
            type="submit"
            className="submit-button"
            variant={`btn ${isFormReady ? "btn-primary" : "btn-secondary"}`}
            
          >
            Submit
          </Buttons>
      </div>
    </form>
  );
};

export default Forgotaftersetup;