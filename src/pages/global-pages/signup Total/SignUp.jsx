import { useNavigate } from "react-router-dom";

import { Images } from "../../../images/Image";
import Buttons from "../../../components/form-elements/Buttons";
import { useState } from "react";
import * as Yup from "yup";
import { useContext } from "react";
import { SignupContext } from "../../../context/SignupContext";
import PopUp from "../../../components/popup/PopUp";
import TermsAndConditions from "../TermsAndConditions";
import Input from "../../../components/form-elements/Input";

const SignUp = ({ formData, setFormData, nextStep }) => {
  const navigate = useNavigate();

  const form = formData;
  const setForm = setFormData;

  const [isValid, setIsValid] = useState(false);

  const [showPassword, setShowPassword] = useState(false); /* show pwd state */
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false); /* show cfm pwd state */

  const [errors, setErrors] = useState({}); /* errors state */

  const { setSignupData } = useContext(SignupContext);

  const signupSchema=Yup.object({
    name:Yup.string()
    .trim()
    
    .min(5,"*Minimum 5 characters")
    .max(20, "*Maximum 20 characters only")
    .matches(/^[A-Za-z ]+$/, "*Only letters and spaces allowed")
    .required("*Name is required")
    .test("*No multiple-spaces","no extra spaces allowed",(value)=> !/\s{2,}/.test(value || "")),

    username:Yup.string()
    .trim()
    .min(5,"*Minimum 5 characters")
    .max(25,"*Max 25 charcters only")
    .matches(/^[a-zA-Z0-9_]+$/, "*Only letters, numbers, underscore")   //have to write one more validation here to display as username already exits
    .required("*Username is required"),
    password:Yup.string()
    .trim()
    
    .min(8,"*Minimum 8 characters")
    .max(16,"*Maximum 16 characters")
    .matches(/[0-9]/, "At least 1 number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "*At least 1 special character")
    .required("*Password is required"), // Pattern wrong

    confirmpassword: Yup.string()
      .required("*Confirm password is required")
      .oneOf([Yup.ref("password")], "*Passwords must match"),
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      await signupSchema.validate(form, { abortEarly: false });
      setErrors({}); //clear errors if valid

      setSignupData((prev) => ({
        ...prev,
        name: form.name,
        username: form.username,
        password: form.password,
        confirmpassword: form.confirmpassword,
      }));

      navigate(nextStep());
    } catch (err) {
      const formattedErrors = {};
      err.inner.forEach((error) => {
        formattedErrors[error.path] = error.message;
      });
      setErrors(formattedErrors);
    }
  };

  // if (!isValid){
  //   return;
  // }

  // try{
  //   const response=await fetch("signup api ",{
  //   method:"POST"
  // })
  // const data=await response.json();
  // console.log(data);
  // }catch(error){
  //   console.log(error)
  // }

  const handlechange = async (e) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);

    setErrors((prev) => ({
      /* to remove errors while typing */ ...prev,
      [name]: "",
    }));
    try {
      await signupSchema.validate(updatedForm, { abortEarly: false });
      setIsValid(true);
    } catch {
      setIsValid(false);
    }
  };

  const passwordRules = {
    length: form.password.length >= 8,
    number: /[0-9]/.test(form.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(form.password),
  };
  const rules = [
    { text: "At least 8 characters", valid: passwordRules.length },
    { text: "At least 1 special character", valid: passwordRules.special },
    { text: "At least 1 number", valid: passwordRules.number },
  ];

  return (
    <form className="signup-container" onSubmit={handlesubmit}>
      {/* <div className='container'> */}

      <p className="logintext">Create Your Account</p>
      <h4 className="singing-text">
        Continue managing your sales, purchases, and reports by signing in
        securely.
      </h4>

      <div className="input-box">
        <img src={Images.user} className="icon left" />
        <Input
            placeholder="Name"
            name="name"
            value={form.name}
            onChange={handlechange}
            onKeyDown={(e) => {
              // allow letters and space only
              if (
                !/[a-zA-Z ]/.test(e.key) && // only letters and space
                e.key !== "Backspace" &&
                e.key !== "Tab" &&
                e.key !== "ArrowLeft" &&
                e.key !== "ArrowRight"
              ) {
                e.preventDefault();
              }
            }}
          
            maxLength={20}
          />
      </div>
      {/* {errors.name && <p className='error-text'>{errors.name}</p> } */}

      <div className="input-box">
        <img src={Images.user} className="icon left" />
        <Input
          placeholder="Username"
          name="username"
          value={form.username}
          onChange={handlechange}
          error={errors.username}
          maxLength={25}
          onKeyDown={(e) => {
            if (
                !/[a-zA-Z0-9_]/.test(e.key) &&
                e.key !== "Backspace" &&
                e.key !== "Tab" &&
                e.key !== "ArrowLeft" &&
                e.key !== "ArrowRight"
              ) {
                e.preventDefault();
              }
            }}
          />
      </div>
      {/* {errors.username  && <p className='error-text'>{errors.username}</p> } */}

      <div className="input-box">
        <img src={Images.lockicon} className="icon left" />
        <Input
          placeholder="password"
          name="password"
          value={form.password}
          type={showPassword ? "text" : "password"}
          onChange={handlechange}
          error={errors.password}
          maxLength={16}
          onKeyDown={(e)=>e.key === " " && e.preventDefault()}
        />
        <img
          src={showPassword ? Images.eyeclose : Images.eyeicon}
          onClick={() => setShowPassword((prev) => !prev)}
          className="icon right"
        />
      </div>
      {/* {errors.password && <p className='error-text'>{errors.password}</p> } */}

      <ul className="rules">
        {rules.map((rule, index) => (
          <li key={index} className="rules-img">
            <span>
              <img
                src={rule.valid ? Images.greentick : Images.minus}
                alt="icon"
              />
            </span>
            {rule.text}
          </li>
        ))}
      </ul>

      <div className="input-box">
        <img src={Images.lockicon} className="icon left" />
        <Input
          placeholder="Confirm Password"
          name="confirmpassword"
          value={form.confirmpassword}
          type={showConfirmPassword ? "text" : "password"}
          onChange={handlechange}
          error={errors.confirmpassword}
          maxLength={16}
          onKeyDown={(e)=>e.key === " " && e.preventDefault()}
        />
        <img
          src={showConfirmPassword ? Images.eyeclose : Images.eyeicon}
          className="icon right"
          onClick={() => setShowConfirmPassword((prev) => !prev)}
        />
      </div>
      {/* {errors.confirmpassword && <p className='error-text'>{errors.confirmpassword}</p> } */}

      <div className='signin-next'>
        <Buttons type="submit"   className= {`btn ${isValid ? "btn-primary":"btn-secondary"}`}  >Next</Buttons>
      </div>

      <div className="login-texts">
        <p> Already Have an Account?</p>
        <p onClick={() => navigate("/login")}>Login</p>
      </div>

      <p className="terms terms-conditions">
        By clicking, I confirm that I have read, understood, and agree to the
        <PopUp
          trigger={<span> Terms of Service </span>}
          size="md"
          title="Terms of Service"
          className="terms-popup"
        >
          <div className="dividing-line"></div>
          <TermsAndConditions />
        </PopUp>
        of Sri Animalife Biotech Pvt Ltd.
      </p>
      <div className="parent-div">
        <div className="child-div"></div>
      </div>
    </form>

    //  </div>
  );
};
export default SignUp;
