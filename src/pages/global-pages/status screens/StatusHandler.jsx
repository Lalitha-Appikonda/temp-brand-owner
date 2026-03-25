import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import StatusScreen from "./StatusScreen";
import { Images } from "../../../images/Image";

const StatusHandler = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const config = {
    waiting: {
      image: Images.waitTime,
      title: "Please Wait for Approval",
      message:
        "You have successfully submitted your details. Please wait for management approval. Once your account is approved. you can login using your username and password. ",
    },

    approved: {
      image: Images.approved,
      title: "Account Approved",
      message: "Please login using your username and password",
      buttonText: "Go to Login",
      action: () => navigate("/login"),
    },

    rejected: {
      image: Images.rejected,
      title: "Account Rejected",
      message:
        "We are sorry to inform you that your account has not been approved at this time. Please try again later",
      buttonText: "Close",
      action: () => navigate("/"),
    },

    "limit-exceed": {
      image: Images.limitExceed,
      title: "Limit exceeded",
      message:
        "You've reached the maximum number of attempts.Please try again after 1 hour.",
      buttonText: "Back to Login",
      showClose: false,
      action: () => navigate("/login"),
    },

    success: {
      image: Images.successful,
      title: "Successfully",
      message:
        "Your new password has been set successfully. You can now log in using your updated password and continue using all features without any interruption.",
      buttonText: "Back to Login",
      showClose: false,
      action: () => navigate("/login"),
    },
  };

  const data = config[type];


  return (
    <StatusScreen
      type={type}
      image={data.image}
      title={data.title}
      message={data.message}
      buttonText={data.buttonText}
      showClose={data.showClose}
      onButtonClick={data.action}
    />
  );
};

export default StatusHandler;

