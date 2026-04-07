import React, { useState, useContext } from "react";
import { Images } from "../../images/Image";
import SelectBox from "../form-elements/SelectBox";
import Buttons from "../form-elements/Buttons";
import { FiArrowUpRight } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import CheckBox from "../form-elements/CheckBox";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext"; // adjust path

const Card = ({
  id,
  title,
  id,
  price,
  oldPrice,
  discount,
  badge,
  image,
  rating,
  reviews,
  cusBtnIcon = null,
  buttonText = "Add to Cart",
  enableQuantity = true,
  onButtonClick = null,
  ischecked = false,
  onMoveToBag,
  isDisabled = false,
  handleSelectedItems,
  hideAddCart = false,
  hideDropdownIcon = false,
  hideLike = false
}) => {

  const location = useLocation()
  const currentPath = location.pathname;

  const [like, setLike] = useState(false);

  const { cartitems, addtocart, increaseqty, decreaseqty } = useContext(CartContext);

  const cartItem=cartitems.find(item=> item.id ===id);
 
  return (
    <div className="card-context">
      {ischecked && <div className="selected-check-cards"><CheckBox onChange={(e) => handleSelectedItems(id, e)}/></div>}
      <div className="card card-desktop ">
        <div className={badge ? "wrapper " : "card-image-wrapper"}>
          {badge && (
            <div className={`badge ${badge.toLowerCase()}`}>{badge}</div>
          )}
          {!hideLike && (
            <div className="image-likeback">
              <svg
                onClick={() => setLike(!like)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="25"
                height="26"
                className={`heart ${like ? "active" : ""}`}
              >
                <path d="M12 21s-7-4.35-9.5-7.28C.6 11.5.4 8.5 2.5 6.4c2.1-2.1 5.2-1.8 7.5.5L12 8.9l2-2c2.3-2.3 5.4-2.6 7.5-.5 2.1 2.1 1.9 5.1 0 7.3C19 16.65 12 21 12 21z" />
              </svg>
            </div>
          )}
        </div>

        <div className="image-container">
          {rating && (
            <div className="rating">
              <img src={Images.ministar} />
              <h6>{rating}</h6>
              <img src={Images.minline} />
              <h6>{reviews}</h6>
            </div>
          )}
          <div className="product-image-container">
            <img src={image} alt="Product" className="product-img" />
          </div>
        </div>

        <h3 className="image-text">{title}</h3>
        <div className="price-section">
          {/* <h3 className="rupees">₹{price}</h3> */}
          <div className="product-price rupees">
            <span className="rupee-symbol">₹</span>
            <span className="product-price-value">{price}</span>
          </div>

          <div className="discount-container">
            {oldPrice && <span className="old-price">₹{oldPrice}</span>}
            {discount && <span className="discount">{discount}</span>}
          </div>
        </div>

        <div className="select-cart">
          <select>
            <option value="">500g</option>
            <option value="">5L</option>
            <option value="">1L</option>

            <option value="">200g</option>
            <option value="">1000g</option>
            <option value="">300g</option>
          </select>

          {cartItem ? (
            <div className="quantity">
              <button className="reduce" onClick={()=>decreaseqty(id)}>
                <FaMinus className="minus" />
              </button>
              <span>{cartItem.qty}</span>
              <button className="increase" onClick={()=>increaseqty(id)}>
                <FaPlus className="plus" />
              </button>
            </div>
          ) : (
            <Buttons onClick={()=>addtocart({id,title,price})} className="addcart-mobile-btn">
              Add to Cart
            </Buttons>
          )}
        </div>
      </div>


      <div className="btn-down">
        <Buttons variant="circle-secondary">
          {cusBtnIcon || <FiArrowUpRight className="arrow-icon" />}
        </Buttons>
      </div>
    </div>
  );
};

export default Card;
