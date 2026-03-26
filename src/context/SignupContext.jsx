import { createContext, useState } from "react";

export const SignupContext = createContext();

export const SignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    username: "",
    password: "",
    confirmpassword: "",

    category: null,
    subcategory: [],

    securityQuestions: []
  });

  return (
    <SignupContext.Provider value={{ signupData, setSignupData }}>
      {children}
    </SignupContext.Provider>
  );
};