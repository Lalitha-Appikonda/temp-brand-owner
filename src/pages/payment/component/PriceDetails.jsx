import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../../../components/form-elements/Buttons";

const PriceDetails = ({ cartItems, total }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="cart-container">
        <div className="cart-wrapper"> 
          <div className="cart-right">
            <h4>Price Details</h4>

            <div className="dividing-line"></div>

            <div className="price-details">
              <div className="price-row">
                <span className="content-left">
                  Total Price ({cartItems.length} items)
                </span>
                <div className="content-right">
                  <span className="dollar">₹</span>
                  <span className="amount">{total}</span>
                </div>
              </div>

              <div className="price-row">
                <span className="content-left">Discount</span>
                <div className="content-right discount-content-right">
                  <span className="minus">-</span>
                  <span className="dollar">₹</span>
                  <span className="amount">{Math.floor(total * 0.1)}</span>
                </div>
              </div>

              <div className="dividing-line"></div>

              <div className="price-row total">
                <span className="content-left">Total Payable Amount</span>
                <div className="content-right">
                  <span className="dollar">₹</span>
                  <span className="amount">
                    {total - Math.floor(total * 0.1)}
                  </span>
                </div>
              </div>

              <div className="pay-btn-conatienr">
                {/* <button>
                {" "}
                Proceed to Pay
              </button> */}
                <Buttons
                  className="pay-btn"
                  onClick={() => navigate("/address")}
                >
                  Proceed to Pay
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
