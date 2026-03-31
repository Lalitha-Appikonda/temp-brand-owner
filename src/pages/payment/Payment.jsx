import React, { useState } from "react";
import CartItems from "./CartItems";
import PriceDetails from "./component/PriceDetails";
import { useLocation } from "react-router-dom";
import Address from "./Address";
import { BsPlusLg } from "react-icons/bs";
import Buttons from "../../components/form-elements/Buttons";
import Card from "../../components/card/Card";
import { Images } from "../../images/Image";

const Payment = () => {
  const location = useLocation();

  const page = location.pathname;

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "AQUAREMID", qty: 2, price: 300, stock: "In stock" },
    { id: 2, name: "AQUABISON", qty: 3, price: 30, stock: "In stock" },
    // { id: 3, name: "AQUABISON", qty: 3, price: 30 , stock: "In stock" },
    // { id: 4, name: "AQUABISON", qty: 3, price: 30 , stock: "In stock" },
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
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  return (
    <>
      <div className="container">
        <div className="layout">
          <div className="title-button-row">
            <p className="title">
              {page === "/cart" && "Shopping Cart"}
              {page === "/address" && "Delivery Address"}
            </p>
            {page === "/address" && (
              <div className="new-address-button-wrapper">
                <Buttons variant="outline-primary" className="new-adddress">
                  <span className="button-content">
                    Add New Address
                    <BsPlusLg className="icon" />
                  </span>
                </Buttons>
              </div>
            )}
          </div>

          {/* <p className="title">Shopping Cart</p> */}
          <div className="inner-container">
            <div className="left-section">
              {page === "/cart" && (
                <CartItems cartItems={cartItems} setCartItems={setCartItems} />
              )}

              {page === "/address" && <Address />}
            </div>
            <div className="right-section">
              <PriceDetails cartItems={cartItems} total={total} />
            </div>
          </div>

          {page === "/cart" && (
            <div className="cart-card-bottom">
              <div className="cart-cards">
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
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;
