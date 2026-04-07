import React, { useState, useContext } from "react";
import { Images } from "../../images/Image";
import { FaMinus, FaPlus } from "react-icons/fa";
import PopUp from "../../components/popup/PopUp";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/form-elements/Buttons";
import { CartContext } from "../../context/CartContext";


const Cart=()=>{
  const navigate = useNavigate();

  const { cartitems, increaseqty, decreaseqty, removeitems } = useContext(CartContext);



  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-left">
          {cartitems.map((item) => (
            <div key={item.id}>
              <div className="cart-item">
                <div className="item-left">
                  <img
                    src={Images.addCartImage}
                    alt="product"
                    className="item-img"
                  />

                  <div className="item-details">
                    <h2>{item.title}</h2>
                    <h6 className="stock">{item.stock}</h6>
                    <h6 className="size">
                      Size:<span> 500g</span>
                    </h6>

                    <div className="qty-controls">
                      <div className="qty-inner">
                        <button onClick={() => decreaseqty(item.id)}>
                          <FaMinus />
                        </button>

                        <span>{item.qty}</span>

                        <button onClick={() => increaseqty(item.id)}>
                          <FaPlus />
                        </button>
                      </div>

                      <PopUp
                        size="sm"
                        trigger={
                          <button className="delete-btn">
                            <HiOutlineTrash />
                          </button>
                        }
                        title="Remove Item"
                        className="cart-delete-popup"
                      >
                        {({ close }) => (
                          <div className="delete-popup-inner-title">
                            <h5>Are you sure you want to remove this item?</h5>

                            <div className="popup-actions">
                              <Buttons
                                variant="primary"
                                className="popup-remove-btn"
                                onClick={() => {
                                  removeitems(item.id);
                                  close();
                                }}
                              >
                                Remove
                              </Buttons>

                              <Buttons
                                variant="outline-primary"
                                className="popup-remove-btn"
                                onClick={close}
                              >
                                Cancel
                              </Buttons>
                            </div>
                          </div>
                        )}
                      </PopUp>

                      <button className="save-btn">Save for Later</button>
                    </div>
                  </div>
                </div>

                <p className="item-price">
                  <span className="currency">₹</span>
                  <span className="amount">{item.price * item.qty}</span>
                </p>
              </div>

              <div className="dividing-line line"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
