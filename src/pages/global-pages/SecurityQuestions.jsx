import React, { useState } from "react";
import { Images } from "../../images/Image";
import Input from "../../components/form elements/Input";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Buttons from "../../components/form elements/Buttons";

const SecurityQuestions = () => {
  const questions = [
    "What is your favorite food?",
    "What is your mother's name?",
    "What is your father's name?",
    "What is your first school name?",
    "What is your best friend's name?",
  ];
  const [open, setOpen] = useState(null);
  return (
    <>
      <div className="security-ques-text-content">
        <div className="back-btn">
          <img src={Images.lessThan} alt="" />
        </div>

        <div className="text-content">
          <h1>Set Your Security Question</h1>
          <p className="choose">
            Choose and answer a security question to help you safely reset your
            password anytime you forget it.
          </p>
          <h6>Answer any 3 of 5 questions</h6>
          <div className="ques-container">
            {questions.map((q, index) => (
              <div className="boxes" key={index}>
                <div className="ques-prefix" onClick={() => setOpen(open === index ? null : index)}>
                  <div className="row1">
                    <div className="prefix-container">
                      <img src={Images.quesIcon} alt="" />
                    </div>
                    <p className="ques">{q}</p>
                  </div>
                  <div className="dropdowns">
                    {open === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                {open === index && (
                  <div>
                    <div className="dividing-line"></div>
                    <Input className="ques-input" placeholder="Enter Answer" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="ques-submit">
             <Buttons variant="secondary">Submit</Buttons>
        </div>

      </div>
    </>
  );
};

export default SecurityQuestions;
