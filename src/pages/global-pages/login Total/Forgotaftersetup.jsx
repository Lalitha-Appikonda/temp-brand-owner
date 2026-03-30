import React, { useEffect } from "react";
import { Images } from "../../../images/Image";
import Input from "../../../components/form-elements/Input";
import Buttons from "../../../components/form-elements/Buttons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Forgotaftersetup = ({ formData, setFormData, nextStep, prevStep }) => {
  const navigate = useNavigate();
   const location = useLocation();

const questions = location.state?.questions || [];
const userId = location.state?.userId;


  const handleSubmit = async () => {
    try {
      const payload = {
        answers: Object.entries(formData.answers || {}).map(
          ([qid, answer]) => ({
            qid: Number(qid),    
            answer: answer
          })
        )
      };

      console.log("Payload:", payload);

    

useEffect(() => {
  if (!userId) {
    navigate("/forgotpassword");
  }
}, [userId, navigate]);

      const res = await axios.post(
        `https://b17q02g4-5051.asse.devtunnels.ms/rest2/0.1/unAuth/verifyAnswers/${userId}`, 
        payload  
      );

      console.log("Verify Success:", res.data);

       
      navigate("/reset-password", { state: { userId } });

    } catch (error) {
      console.log(error);
      alert("Wrong answers");
    }
  };
  return (
    <div className="aftersetup-container">
      <div className="back-btn" onClick={prevStep}>
        <img src={Images.lessThan} alt="" />
      </div>
      <p className="title-text">Answer Your Security Question</p>
      <h3 className="sub-title-text">
        Answer your already setup question after that you can change login
        password.{" "}
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
                <Input
                  placeholder="Answer"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      answers: {
                        ...prev.answers,
                        [q.qid]: e.target.value,
                      },
                    }))
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Buttons
        className="submit-button"
        variant="btn btn-secondary"
        onClick={handleSubmit}
      >
        Submit
      </Buttons>
    </div>
  );
};

export default Forgotaftersetup;
