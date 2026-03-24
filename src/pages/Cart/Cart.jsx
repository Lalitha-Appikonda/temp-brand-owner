import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import PopUp from "../../components/popup/PopUp";   

 
const productImg = "/assets/products/product-1.png";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "AQUAREMID", qty: 2, price: 300 },
    { id: 2, name: "AQUABISON", qty: 3, price: 30 },
  ]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">

      {/* LEFT */}
      <div className="cart-left">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>

            {/* LEFT SIDE */}
            <div className="item-left">
              <img src={productImg} alt="product" className="item-img" />

              <div className="item-details">
                <h4>{item.name}</h4>
                <p className="stock">In stock</p>
                <p className="size">
                  <span>Size:</span> 500g
                </p>

                {/* CONTROLS */}
                <div className="qty-controls">
                  <div className="qty-inner">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  {/* DELETE POPUP */}
                  <PopUp
                    size="sm"
                    trigger={
                      <button className="delete-btn">
                        <FaTrashAlt />
                      </button>
                    }
                    title="Remove Item"
                  >
                    {({ close }) => (
                      <div>
                        <p>Are you sure you want to remove this item?</p>

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

                  <button className="save-btn">Save for later</button>
                </div>
              </div>
            </div>

            {/* PRICE */}
            <h3 className="item-price">
              ₹{item.price * item.qty}
            </h3>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="cart-right">
        <h3>Price Details</h3>

        <div className="price-row">
          <span>Total Price ({cartItems.length} items)</span>
          <span>₹{total}</span>
        </div>

        <div className="price-row discount">
          <span>Discount</span>
          <span>-₹{Math.floor(total * 0.1)}</span>
        </div>

        <div className="price-row total">
          <span>Total Payable</span>
          <span>₹{total - Math.floor(total * 0.1)}</span>
        </div>

        <button
          className="pay-btn"
          onClick={() => navigate("/address")}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Cart;