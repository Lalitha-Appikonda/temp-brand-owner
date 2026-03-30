import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const MobileCart = () => {
  return (
    <>
      <div className="mobile-cart-container">
        <div className="header">
          <div className="header-left">
            <FaArrowLeft />
            <h1>Shopping Bag</h1>
          </div>
          <div className="haeder-right">
            <FaRegHeart className="icon" />
          </div>
        </div>

        <div className="progress-indication-container">
          <div className="progress-block">
            <div className="progress-line"></div>

            <div className="step active">
              <div className="circle"></div>
              <span>Bag</span>
            </div>
          </div>

          <div className="progress-block block2">
            <div className="progress-line"></div>

            <div className="step">
              <div className="circle"></div>
              <span>Address</span>
            </div>
          </div>

          <div className="progress-block block3">
            <div className="progress-line"></div>

            <div className="step">
              <div className="circle"></div>
              <span>Payment</span>
            </div>
          </div>
        </div>

        <div className="selected-items"></div>



      </div>
    </>
  );
};

export default MobileCart;
