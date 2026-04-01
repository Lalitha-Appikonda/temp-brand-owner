import React, { useState } from "react";
import { FaPlus, FaRegHeart, FaTimes } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import CheckBox from "../../components/form-elements/CheckBox";
import { HiOutlineTrash } from "react-icons/hi";

import { Images } from "../../images/Image";
import Buttons from "../../components/form-elements/Buttons";
import Card from "../../components/card/Card";
import CartProductsMobile from "./component/CartProductsMobile";
import { IoBagHandleOutline } from "react-icons/io5";

const MobileCart = () => {
  const [mobileCartItems, setMobileCartItems] = useState([
    { id: 1, name: "AQUAREMID", qty: 2, price: 300, stock: "In stock" },
    { id: 2, name: "AQUABISON", qty: 3, price: 30, stock: "In stock" },
    { id: 3, name: "AQUABISON", qty: 3, price: 30, stock: "In stock" },
    { id: 4, name: "AQUABISON", qty: 3, price: 30, stock: "In stock" },
    // { id: 5, name: "AQUABISON", qty: 3, price: 30 , stock: "In stock" },
    // { id: 6, name: "AQUABISON", qty: 3, price: 30 , stock: "In stock" },
    // { id: 7, name: "AQUABISON", qty: 3, price: 30 , stock: "In stock" },
    // { id: 8, name: "AQUABISON", qty: 3, price: 30 , stock: "In stock" },
    // { id: 9, name: "AQUABISON", qty: 3, price: 30 , stock: "In stock" },
  ]);

  const products = [
    {
      id: 1,
      title: "Probizyme",
      price: 1100,
      oldPrice: 2000,
      discount: "45% OFF",
      badge: "Sale",
      image: Images.product,
      showQuantity: true,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 2,
      title: "De - ODOPLUS",
      price: 1700,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 3,
      title: "ub-SPORE",
      price: 600,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 4,
      title: "AquabISON",
      price: 850,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 5,
      title: "Pond Care",
      price: 1100,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 6,
      title: "AquaCare",
      price: 1080,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 7,
      title: "De - ODOPLUS",
      price: 1700,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 8,
      title: "ub-SPORE",
      price: 600,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
    {
      id: 9,
      title: "AquabISON",
      price: 850,
      showQuantity: false,
      image: Images.product,
      rating: "5.0",
      reviews: "20K",
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = () => {
    if (selectedItems.length === mobileCartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(mobileCartItems.map((item) => item.id));
    }
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const selectedPrice = mobileCartItems
  .filter((item) => selectedItems.includes(item.id))
  .reduce((sum, item) => sum + item.price * item.qty, 0);

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
          <div className="progress-line"></div>

          <div className="step active">
            <div className="circle"></div>
            <span>Bag</span>
          </div>

          <div className="progress-line"></div>

          <div className="step">
            <div className="circle"></div>
            <span>Address</span>
          </div>

          <div className="progress-line"></div>

          <div className="step">
            <div className="circle"></div>
            <span>Payment</span>
          </div>
        </div>

        <div className="selected-items-block">
          <div className="selected-wrapper">
            <div className="selected-left">
              <div>
                <CheckBox 
                id="select-all-cart-items"
                checked={selectedItems.length === mobileCartItems.length}
                onChange={handleSelectAll}
                />
              </div>
              <p>
                {selectedItems.length}/{mobileCartItems.length} Selected <span>(₹{selectedPrice})</span>
              </p>
            </div>
            <div className="selected-right">
              <img src={Images.cartLikeMobile} alt="" />
              <HiOutlineTrash />
            </div>
          </div>
        </div>

        <div className="cart-products-mobile">
          {mobileCartItems.map((item) => (
            <CartProductsMobile key={item.id} item={item} checked={selectedItems.includes(item.id)}
    onChange={() => handleSelectItem(item.id)}/>
          ))}
        </div>

        <div className="dividing-space"></div>

        <div className="other-cart-product-items">
          <h1>You may also like</h1>
          <div className="other-products-button-block">
            <Buttons
              variant="outline-primary"
              className="cart-others-mobile-products-btn"
            >
              All
            </Buttons>
            <Buttons
              variant="outline-primary"
              className="cart-others-mobile-products-btn"
            >
              Probiotics
            </Buttons>
            <Buttons
              variant="outline-primary"
              className="cart-others-mobile-products-btn"
            >
              Minerals
            </Buttons>
          </div>

          <div className="cart-mobile-products-block">
            {products.map((product) => (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                discount={product.discount}
                badge={product.badge}
                showQuantity={product.showQuantity}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
                cusBtnIcon={<IoBagHandleOutline />}
              />
            ))}
          </div>
        </div>

        <div className="dividing-space"></div>

        <div className="price-details-cart-mobile">
          <h2 className="title">Price Details (2 Items)</h2>
          <div className="dividing-line"></div>
          <div className="price-content">
            <div className="details">
              <h3>Total Price (5 items)</h3>
              <h2>₹7200</h2>
            </div>

            <div className="details ">
              <h3>Discount on Price</h3>
              <h2 className="discount-amount">-₹600</h2>
            </div>

            <div className="dividing-line"></div>

            <div className="total-amount">
              <h2>Total Price (5 items)</h2>
              <h2>₹6600</h2>
            </div>
          </div>
        </div>

        <div className="place-order-mobile-wrapper">
          <div>
            <h4>7200</h4>
            <h1>₹6600</h1>
          </div>
          <div className="mobile-place-order-button-container">
            <Buttons>Place Order</Buttons>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileCart;
