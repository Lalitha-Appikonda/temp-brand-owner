import React from "react";
import { Images } from "../../images/Image";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const UserAccess = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  //   console.log(currentPath, "currentPath");
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const dummiCondition = isMobile && currentPath === "/security-questions";

  return (
    <>
      <div className="user-access-conatiner">
        <div className="container access-wrapper">
          <div className="side-img">
            {/* <div className="image" ></div> */}
            {/* <img className="image" src={Images.diffImg} alt="image" /> */}
          </div>
          <div className="main-content">
            {!dummiCondition && <img src={Images.lessThan} alt="" />}
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
