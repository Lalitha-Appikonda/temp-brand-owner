import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/form elements/Buttons";
import { BsPlusLg } from "react-icons/bs";

const DeliveryAddress = () => {
  const [selectedId, setSelectedId] = useState(1);

  const navigate = useNavigate();
  

  return (
    <>
      <div className="container">
        <div className="address-container">
          <div className="title-button-row">
            <p className="title">Delivery Address</p>
            <div className="new-address-button-wrapper">
              <Buttons variant="outline-primary" className="new-adddress">
                <span className="button-content">
                  Add New Address
                  <BsPlusLg className="icon" />
                </span>
              </Buttons>
            </div>
          </div>

          <div className="address-content-wrapper">

            <div className="address-left"></div>

            <div className="address-right">
              <h2>Price Details</h2>

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
      </div>
    </>
  );
};

export default DeliveryAddress;
