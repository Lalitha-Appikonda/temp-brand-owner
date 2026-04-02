import React, { useState } from "react";
import CheckBox from "../../../components/form-elements/CheckBox";
import PopUp from "../../../components/popup/PopUp";
import { MdArrowDropDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Buttons from "../../../components/form-elements/Buttons";
import Input from "../../../components/form-elements/Input";
import { HiOutlineTrash } from "react-icons/hi";
import { Images } from "../../../images/Image";

const CartProductsMobile = ({item, onChange , checked}) => {

    const [showInput, setShowInput] = useState(false);
    const [EnterQty, setEnterQty] = useState("");

  return (
    <div  className="mobile-cart-block">
      <div className="cart-block-left">
        <div className="left-wrapper">
          <div className="checkBox-block">
            <CheckBox checked={checked} onChange={onChange} id={`cart-checkbox-${item.id}`}/>
          </div>
          <div className="image-block">
            <img
              className="product-img"
              src={Images.cartMobileproduct}
              alt={item.name}
            />
          </div>
        </div>

        <PopUp
          trigger={
            <div className="qunatity">
              Qty: {item.qty}
              <span>
                <MdArrowDropDown />
              </span>
            </div>
          }
          size="sm"
          title={showInput ? "Enter Quantity" : "Select Quantity"}
        >
          {!showInput ? (
            <div className="popup-quantity-select-wrapper">
              <div className="select-quantity">
                <div className="quantity">1</div>
                <div className="quantity">2</div>
                <div className="quantity">3</div>
                <div className="quantity hide2">4</div>
                <div className="quantity hide">5</div>

                <div className="quantity" onClick={() => setShowInput(true)}>
                  <FaPlus />
                </div>
              </div>

              <div className="quantity-apply-button-container">
                <Buttons variant="primary">Apply</Buttons>
              </div>
            </div>
          ) : (
            <div className="custom-quantity-wrapper">
              <Input
                type="number"
                value={EnterQty}
                onChange={(e) => setEnterQty(e.target.value)}
                placeholder="Enter quantity"
              />

              <div className="quantity-input-button-group">
                <div className="input-buttons-cart">
                  <Buttons
                    variant="outline-primary"
                    onClick={() => {
                      setShowInput(false);
                      setEnterQty("");
                    }}
                  >
                    {" "}
                    Back{" "}
                  </Buttons>
                </div>
                <div className="input-buttons-cart">
                  <Buttons variant="primary">Apply</Buttons>
                </div>
              </div>
            </div>
          )}
        </PopUp>
      </div>

      <div className="cart-block-right">
        <h1 className="title">{item.name}</h1>
        <h4 className="stock">{item.stock}</h4>
        <h4 className="size">
          Size: <span>500g</span>
        </h4>

        <div className="image-container">
          <div className="rating">
            <img src={Images.ministar} alt="" />
            <h6>5.0</h6>
            <img src={Images.minline} alt="" />
            <h6>20k</h6>
          </div>
        </div>

        <h1 className="amount">
          <span className="currency">₹</span>
          <span className="price">{item.price}</span>
        </h1>
      </div>

      <div className="delete-cart-product">
        <HiOutlineTrash />
      </div>
    </div>
  );
};

export default CartProductsMobile;
