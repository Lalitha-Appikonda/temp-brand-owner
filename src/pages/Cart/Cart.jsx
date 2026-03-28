import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import PopUp from "../../components/popup/PopUp";
import { Images } from "../../images/Image";
import { HiOutlineTrash } from "react-icons/hi";
import Buttons from "../../components/form elements/Buttons";
import Card from "../../components/card/Card";

const productImg = "/assets/products/product-1.png";

const Cart = () => {
  const navigate = useNavigate();

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

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container">
      <div className="cart-container">
        <p className="title">Shopping Cart</p>
        <div className="cart-wrapper">
          <div className="cart-left">
            {cartItems.map((item) => (
              <>
                <div className="cart-item" key={item.id}>
                  <div className="item-left">
                    <img
                      src={Images.addCartImage}
                      alt="product"
                      className="item-img"
                    />

                    <div className="item-details">
                      <h2>{item.name}</h2>
                      <h6 className="stock">{item.stock}</h6>
                      <h6 className="size">
                        Size:<span> 500g</span>{" "}
                      </h6>

                      <div className="qty-controls">
                        <div className="qty-inner">
                          <button onClick={() => decreaseQty(item.id)}>
                            <FaMinus className="minus" />
                          </button>
                          <span>{item.qty}</span>
                          <button onClick={() => increaseQty(item.id)}>
                            <FaPlus className="plus" />
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
                              <h5>
                                Are you sure you want to remove this item?
                              </h5>

                              <div className="popup-actions">
                                <button
                                  className="popup-remove-btn"
                                  onClick={() => {
                                    removeItem(item.id);
                                    close();
                                  }}
                                >
                                  Remove
                                </button>

                                <button
                                  className="popup-cancel-btn"
                                  onClick={close}
                                >
                                  Cancel
                                </button>
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
              </>
            ))}
          </div>

          <div className="cart-right">
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

       
          <div className="cart-bottom-cards">
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
      
      </div>
    </div>
  );
};

export default Cart;
