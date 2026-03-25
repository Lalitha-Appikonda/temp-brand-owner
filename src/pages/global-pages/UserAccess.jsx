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

  const dummiCondition =
    isMobile && hideLogo.includes(currentPath);

  return (
    <>
      <div className="user-access-conatiner">
        <div className="container access-wrapper">
          <div className="side-img">
            {/* <div className="image" ></div> */}
            {/* <img className="image" src={Images.diffImg} alt="image" /> */}
          </div>
          <div className="main-content">
            <div className="main-logo">
              {!dummiCondition && <img className="mainlogo" src={Images.mainlogo} alt="" />}
              {!dummiCondition && <img className="mobile-logo" src={Images.mobilelogo} />}
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
