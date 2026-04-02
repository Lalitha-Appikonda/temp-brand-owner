import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Images } from "../../images/Image";
import { useNavigate } from "react-router-dom";

const MobileHeader = ({ title, onArrowClick, search,  wishlist, cart }) => {

    const navigate = useNavigate()

  return (
    <>
      <div className="mobile-product-listing">
        <div className="title-arrows-back">
          <FaArrowLeft onClick={onArrowClick} />
          <h1>{title}</h1>
        </div>

        <div className="mobile-right-products-list">
          <div className="product-list-search">
            {search && <FaSearch className="icon" />}
          </div>
          <div className="cart-container-wrapper">
            {wishlist && <CiHeart className="icon" />}
            {cart && (
              <div className="bag" onClick={()=>navigate("/cart")}>
                <img src={Images.cartBag} alt="" />
                <div className="dot-circle">8</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
