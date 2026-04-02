import React, { useState } from "react";
import CheckBox from "../../../components/form-elements/CheckBox";
import PopUp from "../../../components/popup/PopUp";
import { MdArrowDropDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Buttons from "../../../components/form-elements/Buttons";
import Input from "../../../components/form-elements/Input";
import { HiOutlineTrash } from "react-icons/hi";
import { Images } from "../../../images/Image";
import DeletePop from "./DeletePop";
import DeletePopup from "./DeletePop";

const CartProductsMobile = ({
  item,
  onChange,
  checked,
  onUpdateQty,
  selectedDelete,
  selectedItems,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [quantity, setQuantity] = useState(item.qty);

  return (
    <div className="mobile-cart-block">
      <div className="cart-block-left">
        <div className="left-wrapper">
          <div className="checkBox-block">
            <CheckBox
              checked={checked}
              onChange={onChange}
              id={`cart-checkbox-${item.id}`}
            />
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
          {({ close }) =>
            !showInput ? (
              <div className="popup-quantity-select-wrapper">
                <div className="select-quantity">
                  <div
                    className={`quantity ${quantity == 1 ? "active" : ""}`}
                    onClick={() => setQuantity(1)}
                  >
                    1
                  </div>
                  <div
                    className={`quantity ${quantity == 2 ? "active" : ""}`}
                    onClick={() => setQuantity(2)}
                  >
                    2
                  </div>
                  <div
                    className={`quantity ${quantity == 3 ? "active" : ""}`}
                    onClick={() => setQuantity(3)}
                  >
                    3
                  </div>
                  <div
                    className={`quantity hide2 ${quantity == 4 ? "active" : ""}`}
                    onClick={() => setQuantity(4)}
                  >
                    4
                  </div>
                  <div
                    className={`quantity hide ${quantity == 5 ? "active" : ""}`}
                    onClick={() => setQuantity(5)}
                  >
                    5
                  </div>

                  <div className="quantity" onClick={() => setShowInput(true)}>
                    <FaPlus />
                  </div>
                </div>

                <div className="quantity-apply-button-container">
                  <Buttons
                    variant="primary"
                    onClick={() => {
                      onUpdateQty(item.id, quantity);
                      close();
                      setShowInput(false);
                    }}
                  >
                    Apply
                  </Buttons>
                </div>
              </div>
            ) : (
              <div className="custom-quantity-wrapper">
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity"
                />

                <div className="quantity-input-button-group">
                  <div className="input-buttons-cart">
                    <Buttons
                      variant="outline-primary"
                      onClick={() => {
                        setShowInput(false);
                        setQuantity(item.qty);
                      }}
                    >
                      {" "}
                      Back{" "}
                    </Buttons>
                  </div>
                  <div className="input-buttons-cart">
                    <Buttons
                      variant="primary"
                      onClick={() => {
                        onUpdateQty(item.id, quantity);
                        close();
                        setShowInput(false);
                      }}
                    >
                      Apply
                    </Buttons>
                  </div>
                </div>
              </div>
            )
          }
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
        {/* <PopUp
          trigger={
            <HiOutlineTrash
            />
          }
          size="sm"
        >
          {({ close }) => (
            <div className="mobile-cart-delete-popup-conatiner">
              <HiOutlineTrash className="icon" />
              <h1>Remove {selectedItems.length} items</h1>
              <h4>
                Do you want to remove these {selectedItems.length} items from
                your bag.
              </h4>
              <div className="remove-widhlist-button-wrapper">
                <div>
                  <Buttons
                    variant="outline-primary"
                    className="cart-delete"
                    onClick={() => {
                      selectedDelete(item.id)
                      close();
                    }}
                  >
                    Remove
                  </Buttons>
                </div>
                <div>
                  <Buttons variant="primary" className="cart-delete">
                    Move to Wishlist
                  </Buttons>
                </div>
              </div>
            </div>
          )}
        </PopUp> */}

        <DeletePopup
          trigger={<HiOutlineTrash />}
          title="Remove item"
          description="Do you want to remove this item from your bag?"
          onRemove={() => selectedDelete(item.id)}
          iconElement = {<HiOutlineTrash />}
          type="delete"
        />
      </div>
    </div>
  );
};

export default CartProductsMobile;
