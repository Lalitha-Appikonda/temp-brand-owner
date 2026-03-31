
import React, { useState } from "react";
import Input from "../../../components/form-elements/Input";
import { Images } from "../../../images/Image";
import Buttons from "../../../components/form-elements/Buttons";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import axios from "axios";


const SetNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData,setFormData]=useState({})
  const [error,setError]=useState({});

  const navigate = useNavigate();
  const location=useLocation();
  const userId=location.state?.userId || localStorage.getItem("userId");
 
  const password=formData?.newPassword || ""
    const passwordRules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const setrules=[
    {
      text:"use at least 8-12 characters",
      valid:passwordRules.length
    },
    {
      text:"mix upper and lowercase letters",
      valid:passwordRules.uppercase && passwordRules.lowercase
    },
    {
      text:"include numbers and special symbols",
      valid:passwordRules.number && passwordRules.special
    },
     
  ]
    

  const handlechange=(e)=>{
    const {name,value}=e.target;

    setFormData({
      ...formData,
       [name]:value
    })
  }


  const handleSubmit= async (e)=>{
    e.preventDefault();

    try{
      await newpasswordschema.validate(formData,{ abortEarly:false})
      setError({}) // to clear errors

      const res=await axios.post(`https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/newPassword/${userId}`,
      {
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword,
      })
      console.log(res.data)
      navigate("/status/success")
    }catch(err){
       if (err.inner){
        const newErrors={};
        err.inner.forEach((error)=>{
          newErrors[error.path]=error.message
        })
        setError(newErrors)
       }else{
        console.log(err)
       }
     
  }

}


  const newpasswordschema=Yup.object({
    newPassword:Yup.string()
    .required("password is required")
    .min(8,"minimum 8 characters")
    .matches(/[A-Z]/, "At least 1 uppercase")
    .matches(/[a-z]/, "At least 1 lowercase")
    .matches(/[0-9]/, "At least 1 number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "At least 1 special character"),

    confirmPassword:Yup.string()
    .required("confirm password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
  })

  return (
    <form onSubmit={handleSubmit}>
        <div className="setnewpassword-container">
          <p className="title-text">Set New Password</p>
          <h4 className="sub-title-text">
            Set a new password to keep your account secure. Choose a strong password
            that is easy for you to remember.
          </h4>
          <div className="input-box-container">
            <label className="label-text">New Password</label>
            <div className="input-box">
              <img src={Images.key} className="icon left" />
              <Input type={showPassword?"text":"password"} onChange={handlechange} value={formData?.newPassword || ""} name="newPassword"/>
              <img src={showPassword ?Images.eyeclose: Images.eyeicon} className="icon right" onClick={()=>setShowPassword(prev=>!prev)}/>
            </div>
             {error.newPassword && <p className="error-text">{error.newPassword}</p> }

          </div>
          <ul className="rules">
            {setrules.map((rule, index) => (
              <li key={index} className="rules-img" style={{ color: rule.color }}>
                <span>
                  <img src={rule.valid ? Images.greentick : Images.wrongtick} alt="icon" />
                </span>
                {rule.text}
              </li>
            ))}
          </ul>
          <div className="input-box-container">
            <label className="label-text">Confirm New Password</label>
            <div className="input-box">
              <img src={Images.lockicon} className="icon left" />
              <Input name="confirmPassword"  value={formData?.confirmPassword || ""} onChange={handlechange}
                placeholder="Enter" type={showConfirmPassword ? "text" :"password"}
              
                
              />
              <img src={showConfirmPassword ? Images.eyeclose: Images.eyeicon} className="icon right" onClick={()=> setShowConfirmPassword(prev=>!prev)} />
            </div>
            {error.confirmPassword && <p className="error-text">{error.confirmPassword}</p> }
          </div>
          <div className="action-buttons">
            <Buttons
              className="cancel-button"
              variant="btn btn-outline-primary"
              onClick={() => prevStep()}
            >
              Cancel
            </Buttons>
            <Buttons
              className="submit-button"
              variant=" btn btn-secondary"
               type="submit"
            >
              Submit
            </Buttons>
          </div>
        </div>
      </form>
  );
};


export default SetNewPassword;



// import React, { useState } from "react";
// import Input from "../../../components/form-elements/Input";
// import { Images } from "../../../images/Image";
// import Buttons from "../../../components/form-elements/Buttons";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import * as Yup from "yup";
// import axios from "axios";

// const SetNewPassword = () => {
//   const navigate = useNavigate();

//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const location=useLocation()
//   const userId=location.state?.userId
//   console.log(userId)
//    const signupSchema=Yup.object({
//     newPassword:Yup.string()
//       .trim()
//       .required("password is required")
//       .min(8,"minimum 8 characters")
//       .matches(/[0-9]/, "At least 1 number")
//       .matches(/[!@#$%^&*(),.?":{}|<>]/, "At least 1 special character"), // Pattern wrong
  
//       confirmpassword: Yup.string()
//       .required("confirm password is required")
//       .oneOf([Yup.ref("password")],"passwords must match")
  
//     })


//     const handlechange=(e)=>{
//        const {name,value}=e.target;

//        if(name==="newPassword"){
//         setNewPassword(value)
//        }else{
//         setConfirmPassword(value)
//        }
//     }


//     const handlesubmit= async (e)=>{
//       e.preventDefault();

//       try{
//         await signupSchema.validate({newPassword,confirmPassword},{abortEarly:false})


//         const res=await axios.post(`https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/newPassword/${userId}`,{
//           newPassword,confirmPassword
//         })
//         navigate("/login")
//         console.log(res.data)
//       }catch(error){
//         console.log(error)
//       }
//     }




//   return (
//        <form onSubmit={handlesubmit}>
//         <div className="setnewpassword-container">

//       <p className="title-text">Set New Password</p>

//       <div className="input-box">
//         <img src={Images.key} className="icon left" />
//         <Input
//           placeholder="New Password"
//           name="newPassword"
//           value={newPassword}
//           onChange={handlechange}
//         />
//       </div>

//       <div className="input-box">
//         <img src={Images.lockicon} className="icon left" />
//         <Input
//           placeholder="Confirm Password"
//           name="confirmPassword"
//           value={confirmPassword}
//            onChange={handlechange}
//         />
//       </div>

//       <Buttons > Submit </Buttons>

//     </div>
//        </form>
//   );
// };

// export default SetNewPassword;

