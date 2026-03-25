import React from "react";
import { FaTimes } from "react-icons/fa";


import Buttons from "../../../components/form elements/Buttons";

const StatusScreen = ({
  type,
  image,
  title,
  message,
  buttonText,
  showClose = true,
  onButtonClick
}) => {
  return (
    <div className="status-screen">
      {showClose && (
        <div className="close-icon" >
          <FaTimes className="icon" />
        </div>
      )}

      <div className="container">
        <div className={`status-content ${type}-content`}>
          <img src={image} alt="" />
          <h1>{title}</h1>
          <h3>{message}</h3>

          {buttonText && (
            <div className={`${type}-btn`}>
              <Buttons variant="outline-primary" onClick={onButtonClick}>{buttonText}</Buttons>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusScreen;
