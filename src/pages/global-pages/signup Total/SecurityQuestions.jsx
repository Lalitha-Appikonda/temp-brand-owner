import React, { useEffect, useState, useContext } from "react";
import { Images } from "../../../images/Image";
import Input from "../../../components/form-elements/Input";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Buttons from "../../../components/form-elements/Buttons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SignupContext } from "../../../context/SignupContext";
import * as Yup from "yup";
 

const BASE_URL =
  "https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1";

const SecurityQuestions = ({ formData, setFormData, prevStep }) => {
  const navigate = useNavigate();
  const { signupData, setSignupData } = useContext(SignupContext); 
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(null);
  const [answers, setAnswers] = useState({});
  const [error,setError]=useState("");


  console.log("SIGNUP DATA ", signupData);


    const securitySchema = Yup.object().shape({
      answers: Yup.array()
        .test(
          "min-answered",
          "Please answer at least 3 questions",
          (answers = []) => {
            const valid = answers.filter(
              (a) => a.answer && a.answer.trim() !== ""
            );
            return valid.length >= 3;
          }
        ),
        
         
    });

  // ########### FETCH QUESTIONS

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/unAuth/getAllQuestions`
        );

        console.log("API RESPONSE ", res.data);

        setQuestions(res.data?.questions || []);
      } catch (err) {
        console.log("Error fetching questions", err);
      }
    };

    fetchQuestions();
  }, []);

  //  HANDLE ANSWERS
  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

 const handleSubmit = async () => {
  const filledAnswers = Object.entries(answers)
     
    .map(([questionId, answer]) => ({
      questionId: Number(questionId),
      answer:(answer || "").trim(),
    }));

  try {
    //  Yup validation
    await securitySchema.validate(
      { answers: filledAnswers },
      { abortEarly: false }
    );

    //  Prepare payload
    const finalData = {
      brandOwnerName: signupData.name,
      username: signupData.username,
      password: signupData.password,
      passwordVerify: signupData.confirmpassword,
      productCategory: Number(signupData.category?.id),
      categoryName: signupData.category?.name,
      productSubCategory: signupData.subcategory.map(
        (item) => Number(item.id)
      ),
      subCategoryName: signupData.subcategory.map(
        (item) => item.name
      ),
      roleId: 2,
      panNumber: signupData.panNumber,
      GSTNumber: signupData.GSTNumber,
      answers: filledAnswers,
    };

    console.log("FINAL PAYLOAD ", finalData);

    //  API call
    const res = await axios.post(
      `${BASE_URL}/unAuth/signup`,
      finalData
    );

    console.log("Signup Success ", res.data);

    navigate("/status/waiting");

  } catch (err) {
    //  Handles BOTH validation + API errors
    console.log("Error ", err);

    if (err.name === "ValidationError") {
       setError(err.errors[0]);
    }
  }
};
  return (
    <div className="security-ques-text-content">
      <div
        className="back-btn"
        onClick={() => prevStep()}
      >
        <img src={Images.lessThan} alt="" />
      </div>

      <div className="text-content">
        <h1>Set Your Security Question</h1>

        <p className="choose">
          Choose and answer a security question to help you safely reset your
          password anytime.
        </p>

        <h6>Answer any 3 of {questions.length}</h6>
        

        <div className="ques-container">
          {questions.map((q, index) => (
            <div className={`boxes ${open === index ? "change-boxes" : ""}`} key={q.id}>
              <div
                className="ques-prefix"
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
              >
                <div className="row1">
                  <div className="prefix-container">
                    <img src={Images.quesIcon} alt="" />
                  </div>
                  <p className="ques">{q.question}</p>
                </div>

                <div className="dropdowns">
                  {open === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>

              {open === index && (
                <div>
                  <div className="dividing-line"></div>

                  <Input
                    className="ques-input"
                    placeholder="Enter Answer"
                    value={answers[q.id] || ""}
                    onChange={(e) =>
                      handleAnswerChange(q.id, e.target.value)
                    }
                  />
                </div>
              )}
            </div>
          ))}
          {error && <p className="error-text">{error}</p>}
        </div>
        {/* {error && <p className="error-text">{error}</p>} */}
      </div>

      <div className="ques-submit">
        <Buttons
          variant="secondary"
          className="submit-ques"
          onClick={handleSubmit}
        >
          Submit
        </Buttons>
      </div>
    </div>
  );

}
export default SecurityQuestions;