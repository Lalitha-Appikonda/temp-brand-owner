import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Images } from "../../images/Image";
import { useNavigate } from "react-router-dom";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";

const MobileHeader = ({
  title,
  onArrowClick,
  search,
  wishlist,
  cart,
  edit,
  deleteIcon,
  wishlistBag,
}) => {
  const navigate = useNavigate();

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
            {deleteIcon && <HiOutlineTrash className="icon" />}
            {edit && <LuPencil className="icon" />}
            {cart && (
              <div className="bag" onClick={() => navigate("/cart")}>
                <img
                  src={wishlistBag ? Images.wishlistBag : Images.cartBag}
                  alt=""
                />
                {!wishlistBag && <div className="dot-circle">8</div>}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
