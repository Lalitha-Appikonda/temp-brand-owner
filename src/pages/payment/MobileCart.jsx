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
import PopUp from "../../components/popup/PopUp";
import DeletePopup from "./component/DeletePop";
import { useLocation, useNavigate } from "react-router-dom";
import MobileHeader from "../../components/mobileHeader/MobileHeader";
import ProductButtons from "../../components/productSortingButtons/ProductButtons";
import { TiTick } from "react-icons/ti";

const MobileCart = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const [mobileCartItems, setMobileCartItems] = useState([
    {
      id: 1,
      name: "AQUAREMID",
      qty: 2,
      price: 300,
      stock: "out of stock",
      discount: "10",
    },
    {
      id: 2,
      name: "AQUABISON",
      qty: 3,
      price: 30,
      stock: "In stock",
      discount: "3",
    },
    {
      id: 3,
      name: "AQUABISON",
      qty: 3,
      price: 30,
      stock: "In stock",
      discount: "6",
    },
    {
      id: 4,
      name: "AQUABISON",
      qty: 3,
      price: 30,
      stock: "In stock",
      discount: "2",
    },
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

  // Select all checkbox
  const handleSelectAll = () => {
    if (selectedItems.length === mobileCartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(mobileCartItems.map((item) => item.id));
    }
  };

  // single checkbox
  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  // Update quantity from child
  const updateQuantity = (id, newQty) => {
    if (!newQty || newQty <= 0) return;

    setMobileCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Number(newQty) } : item,
      ),
    );
  };

  // Total Qty
  const selectedTotalQty = mobileCartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((count, item) => count + item.qty, 0);

  // Total Price
  const totalPrice = mobileCartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.qty, 0);

  // Discount (10%)
  const discount = totalPrice * 0.1;

  // total delete
  const handleDeleteAll = () => {
    setMobileCartItems((prev) =>
      prev.filter((item) => !selectedItems.includes(item.id)),
    );

    setSelectedItems([]);
  };

  // selected items delete

  const handleSelectedDelete = (id) => {
    setMobileCartItems((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  // delete all, whishlist all icon disabled
  const isDisabled = selectedItems.length === 0;

  // place order

  const selectedCartProducts = mobileCartItems.filter((item) =>
    selectedItems.includes(item.id),
  );

  const hasOutOfStock = selectedCartProducts.some(
    (item) => item.stock.toLowerCase() !== "in stock",
  );

  const outOfStockSelectedItems = selectedCartProducts.filter(
  (item) => item.stock.toLowerCase() !== "in stock",
);

// remove out-of-stock items from cart + selected list
const handleRemoveOutOfStock = () => {
  const outOfStockIds = outOfStockSelectedItems.map((item) => item.id);

  setMobileCartItems((prev) =>
    prev.filter((item) => !outOfStockIds.includes(item.id)),
  );

  setSelectedItems((prev) =>
    prev.filter((id) => !outOfStockIds.includes(id)),
  );
};

// only unselect out-of-stock items
const handleUnselectOutOfStock = () => {
  const outOfStockIds = outOfStockSelectedItems.map((item) => item.id);

  setSelectedItems((prev) =>
    prev.filter((id) => !outOfStockIds.includes(id)),
  );
};

  const handlePlaceOrder = () => {
    if (selectedCartProducts.length === 0) return;

    if (hasOutOfStock) return;

    navigate("/address");
  };

  return (
    <>
      <div className="mobile-cart-container">
        <MobileHeader title="Shopping Bag" wishlist={true} />

        <div className="progress-indication-container">
          <div
            className={`progress-line ${currentPath === "/cart" ? "active" : ""}`}
          ></div>

          <div className="step">
            <div
              className={`circle ${currentPath === "/cart" ? "active" : ""}`}
            ><TiTick className={`tick-icon ${currentPath === "/address" ? "enable" : ""}`}/></div>
            <span>Bag</span>
          </div>

          <div
            className={`progress-line ${currentPath === "/address" ? "active" : ""}`}
          ></div>

          <div className="step">
            <div
              className={`circle ${currentPath === "/address" ? "active" : ""}`}
            ></div>
            <span>Address</span>
          </div>

          <div
            className={`progress-line ${currentPath === "/payment" ? "active" : ""}`}
          ></div>

          <div className="step">
            <div
              className={`circle ${currentPath === "/payment" ? "active" : ""}`}
            ></div>
            <span>Payment</span>
          </div>
        </div>

        <div className="selected-items-block">
          <div className="selected-wrapper">
            <div className="selected-left">
              <div>
                <CheckBox
                  id="select-all-cart-items"
                  checked={
                    selectedItems.length > 0 ||
                    selectedItems.length === mobileCartItems.length
                  }
                  onChange={handleSelectAll}
                  className={
                    selectedItems.length > 0 &&
                    selectedItems.length < mobileCartItems.length
                      ? "check-box-icon-change"
                      : ""
                  }
                />
              </div>
              <p>
                {selectedItems.length}/{mobileCartItems.length} Selected{" "}
                <span>(₹{totalPrice})</span>
              </p>
            </div>
            <div className="selected-right">
              {isDisabled ? (
                <img
                  src={Images.cartLikeMobile}
                  alt=""
                  style={{
                    opacity: 0.5,
                    cursor: "not-allowed",
                  }}
                />
              ) : (
                <DeletePopup
                  trigger={
                    <img
                      src={Images.cartLikeMobile}
                      alt=""
                      style={{
                        pointerEvents: isDisabled ? "none" : "auto",
                        opacity: isDisabled ? 0.5 : 1,
                        cursor: isDisabled ? "not-allowed" : "pointer",
                      }}
                    />
                  }
                  title={` Move ${selectedItems.length} items to wishlist `}
                  description={`Do you want to move these ${selectedItems.length} items from your bag?`}
                  onRemove={close}
                  imageElement={<img src={Images.cartLikeMobile2} alt="" />}
                  type="cancel"
                />
              )}

              {isDisabled ? (
                <HiOutlineTrash
                  className="delete-icon"
                  style={{
                    opacity: 0.5,
                    cursor: "not-allowed",
                  }}
                />
              ) : (
                <DeletePopup
                  trigger={
                    <HiOutlineTrash
                      className="delete-icon"
                      style={{
                        pointerEvents: isDisabled ? "none" : "auto",
                        opacity: isDisabled ? 0.5 : 1,
                        cursor: isDisabled ? "not-allowed" : "pointer",
                      }}
                    />
                  }
                  title={`Remove ${selectedItems.length} items`}
                  description={`Do you want to remove these ${selectedItems.length} items from your bag?`}
                  onRemove={handleDeleteAll}
                  iconElement={<HiOutlineTrash />}
                  type="delete"
                />
              )}
            </div>
          </div>
        </div>

        <div className="cart-products-mobile">
          {mobileCartItems.map((item) => (
            <CartProductsMobile
              key={item.id}
              item={item}
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
              onUpdateQty={updateQuantity}
              selectedDelete={handleSelectedDelete}
              selectedItems={selectedItems}
            />
          ))}
        </div>

        <div className="dividing-space"></div>

        <div className="other-cart-product-items">
          <h1>You may also like</h1>
          <ProductButtons className="cart-mobile-buttons" />

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
          <h2 className="title">Price Details ({selectedTotalQty} Items)</h2>
          <div className="dividing-line"></div>
          <div className="price-content">
            <div className="details">
              <h3>Total Price ({selectedTotalQty} items)</h3>
              <h2>₹{totalPrice}</h2>
            </div>

            <div className="details ">
              <h3>Discount on Price</h3>
              <h2 className="discount-amount">-₹{discount}</h2>
            </div>

            <div className="dividing-line"></div>

            <div className="total-amount">
              <h2>Total Price ({selectedTotalQty} items)</h2>
              <h2>₹{totalPrice}</h2>
            </div>
          </div>
        </div>

        <div className="place-order-mobile-wrapper">
          <div>
            <h4 className="total-price">{totalPrice}</h4>
            <h1 className="final-price">₹{totalPrice - discount}</h1>
          </div>
          {/* <div className="mobile-place-order-button-container">
            <Buttons>Place Order</Buttons>
          </div> */}
          {hasOutOfStock ? (
            <PopUp
            size="sm"
              trigger={
                <div className="mobile-place-order-button-container">
                  <Buttons>Place Order</Buttons>
                </div>
              }
            >
              <div className="out-of-stock-popup">
                <div className="stock-img"><img src={Images.outOfStock} alt="" /></div>
                <h1 className="out-of-stock-title">Item (s) not deliverable</h1>
                <h4 className="sub-title">Please remove non available items from your bag to proceed.</h4>
                <div className="dividing-line"></div>
                <div className="item-details-block">
                  <div className="item-details-block-left"><img src={Images.productoutOfStock} alt="" /></div>
                  <div className="item-details-block-right">
                    <h2>Aqua Remid</h2>
                    <h4>Unique blend of scientifically proven, non-pathogenic probiotic..</h4>
                  </div>
                </div>
                <div className="out-of-stk-button-block">
                  <div><Buttons variant="outline-primary" onClick={handleRemoveOutOfStock}>Remove</Buttons></div>
                  <div><Buttons variant="primary"  onClick={handleUnselectOutOfStock}>Unselect Items</Buttons></div>
                </div>
              </div>
            </PopUp>
          ) : (
            <div className="mobile-place-order-button-container">
              <Buttons onClick={handlePlaceOrder}>Place Order</Buttons>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileCart;
