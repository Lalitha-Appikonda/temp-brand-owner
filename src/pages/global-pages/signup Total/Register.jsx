import React, { useState } from "react";
import SignUp from "./SignUp";
import ProductCategory from "./ProductCategory";
import SecurityQuestions from "./SecurityQuestions";

const Register = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirmpassword: "",
    category: null,
    subcategory: [],
    answers: {}
  });
  return (
    <>
      {step === 1 && (
        <SignUp
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <ProductCategory
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <SecurityQuestions
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
        />
      )}
    </>
  );
};

export default Register;
