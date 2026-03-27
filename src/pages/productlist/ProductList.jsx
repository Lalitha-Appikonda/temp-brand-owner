import React, { useState } from "react";
import Buttons from "../../components/form elements/Buttons";
import Card from "../../components/card/Card";
import Filter from "./filter/Filter";
import { Images } from "../../images/Image";
import { FaRightLeft } from "react-icons/fa6";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TbArrowsUpDown } from "react-icons/tb";
import { TiFilter } from "react-icons/ti";
import { PiLineVertical } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import PopUp from "../../components/popup/PopUp";
import RadioButton from "../../components/form elements/RadioButton";

const ProductList = () => {
  const navigate = useNavigate();
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

  const [sort, setSort] = useState("");
  
    const options = [
      { label: "Relevance", value: "relevance" },
      { label: "Popularity", value: "popularity" },
      { label: "Price - Low to High", value: "price - low to high" },
      { label: "Price - High to Low", value: "price - high to low" },
      { label: "Newest First", value: "newest first" },
    ];
  
    const handleChange = (e) => {
      setSort(e.target.value);
    };

  return (
    <>
      <div className="container">
        <div className="products-list">
          <div className="mobile-product-listing">
            <div className="title-arrows-back">
              <FaArrowLeft onClick={() => navigate("/")} />
              <h1>Probiotics</h1>
            </div>

            <div className="mobile-right-products-list">
              <div className="product-list-search">
                <FaSearch className="icon" />
              </div>
              <div className="cart-container-wrapper">
                <CiHeart className="icon" />
                <div className="bag">
                  <img src={Images.cartBag} alt="" />
                  <div className="dot-circle">8</div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-buttons-in-mobile">
            <div className="all-buttons">
              <Buttons variant="outline-primary" className="products-btn">
                All
              </Buttons>
              <Buttons variant="outline-primary" className="products-btn">
                Probiotics
              </Buttons>
              <Buttons variant="outline-primary" className="products-btn">
                Minerals
              </Buttons>
            </div>
          </div>

          <div className="product-listing">
            {/* <div>
            <Filter />
          </div> */}
            <div className="product-listing-right">
              <h3 className="title">Results - All Products</h3>

              <div className="sort-buttons">
                <h5 className="sort">Sort By :</h5>
                <div className="all-sort-btns">
                  <Buttons variant="outline-primary" className="products-btn">
                    Popular Products
                  </Buttons>
                  <Buttons variant="outline-primary" className="products-btn">
                    Low to High
                  </Buttons>
                  <Buttons variant="outline-primary" className="products-btn">
                    High to Low
                  </Buttons>
                  <Buttons variant="outline-primary" className="products-btn">
                    Best Sellers
                  </Buttons>
                  <Buttons variant="outline-primary" className="products-btn">
                    Newest Arrivals
                  </Buttons>
                </div>
              </div>

              <div className="all-product-cards">
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

          <div className="filters-in-mobile">
            <PopUp
              trigger={
                <div className="down-filters-title">
                  <TbArrowsUpDown className="icon" />
                  <h3>SORT</h3>
                </div>
              }
              size="md"
              title="Sort By"
              className="sort-popup"
            >
              <div className="dividing-line"></div>
              <div className="sort-options">
                <RadioButton
                  name="sorting"
                  options={options}
                  value={sort}
                  onChange={handleChange}
                  className="sorting-popup"
                />
              </div>
            </PopUp>
            <div className="pipe">
              <PiLineVertical />
            </div>
            <div className="down-filters-title">
              <TiFilter className="icon" />
              <h3>FILTER</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
