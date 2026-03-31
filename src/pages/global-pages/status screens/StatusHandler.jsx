import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StatusScreen from "./StatusScreen";
import { Images } from "../../../images/Image";
import axios from "axios";
import { useLocation } from "react-router-dom";

const StatusHandler = () => {
  
  const navigate = useNavigate();
  const [type,setType]=useState("waiting")

  const location = useLocation();
  const username = location.state?.username;

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

    useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await axios.post(
          "https://v3n2pcp3-5051.inc1.devtunnels.ms/rest2/0.1/unAuth/getStatus",
          {username}
        );

        console.log(response.data);

        const status = response.data?.message.status;

        if (status === 1) {
          setType("approved");
        } else if (status === 2) {
          setType("rejected");
        } else {
          setType("waiting");
        }

      } catch (err) {
        console.error(err);
        setType("rejected");
      }
    };

    checkStatus(); 
  }, []);
    useEffect(() => {
        if (type === "approved") {
          // wait 2 seconds so user can see success screen
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }
      }, [type]);
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

