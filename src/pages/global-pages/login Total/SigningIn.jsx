import React, { useState } from 'react'
import ForgotPassword from '../ForgotPassword';
import Forgotaftersetup from '../Forgotaftersetup';
import SetNewPassword from '../SetNewPassword';

const SigningIn = () => {

    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        username: "",
        answers: {},
        newPassword: "",
        confirmPassword: ""
    });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

  return (
    <>
    {step === 1 && (
        <ForgotPassword
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <Forgotaftersetup
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <SetNewPassword
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
        />
      )}
    </>
  )
}

export default SigningIn