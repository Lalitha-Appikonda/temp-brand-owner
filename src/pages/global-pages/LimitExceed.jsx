import React from "react";
import { FaTimes } from "react-icons/fa";
import Buttons from "../../components/form elements/Buttons";
import { Images } from "../../images/Image";

const LimitExceed = () => {
  return (
    <>
      <div className="limit-exceed-screen">
        {/* <div className="close-icon">
          <FaTimes className="icon" />
        </div> */}
        <div className="container">
          <div className="limit-exceed-content">
            <img src={Images.limitExceed} alt="" />
            <h1>Limit exceeded.</h1>
            <h3>
              You've reached the maximum number of attempts.
Please try again after 1 hour.
            </h3>
            <div>
              <Buttons variant="outline-primary" className="login-back">Back to the Login</Buttons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LimitExceed;
