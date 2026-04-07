import React from "react";
import { Images } from "../../images/Image";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const UserAccess = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const hideLogo = ["/security-questions", "/setnewpassword"];

  const dummiCondition = isMobile && hideLogo.includes(currentPath);

  return (
    <>
      <div className="user-access-conatiner">
        <div className="container access-wrapper">
          <div className="side-img">
            {/* <div className="image" ></div> */}
            {/* <img className="image" src={Images.diffImg} alt="image" /> */}
            {/* <p className="title">Simplify management with our dashboard.</p>
            <p className="sub-title">Get complete control over operations, performance, and
business growth from one powerful panel.</p> */}
            <div className="login-text">
              <h1>
                Simplify <br />
                management with <br />
                our{" "}
                <span className="highlight">
                  dashboard.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="curve"
                    viewBox="0 0 281 15"
                    fill="none"
                  >
                    <path
                      d="M1.3002 12.7846C54.1335 4.11795 183.6 -8.01538 278.8 12.7846"
                      stroke="white"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p>
                Get complete control over operations, performance, and business
                growth from one powerful panel.
              </p>
            </div>
            <div className="person-img">
              <img src={Images.person} alt="" />
            </div>
          </div>
          <div className="main-content">
            <div className="main-logo">
              {!dummiCondition && (
                <img className="mainlogo" src={Images.mainlogo} alt="" />
              )}
              {!dummiCondition && (
                <img className="mobile-logo" src={Images.mobilelogo} />
              )}
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccess;
