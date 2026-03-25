import React from "react";
import Buttons from "../../components/form elements/Buttons";
import Card from "../../components/card/Card";

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: "Probizyme",
      price: 1100,
      oldPrice: 2000,
      discount: "45% OFF",
      badge: "Sale",
      showQuantity: true,
    },
    {
      id: 2,
      title: "De - ODOPLUS",
      price: 1700,
      showQuantity: false,
    },
    {
      id: 3,
      title: "ub-SPORE",
      price: 600,
      showQuantity: false,
    },
    {
      id: 4,
      title: "AquabISON",
      price: 850,
      showQuantity: false,
    },
    {
      id: 5,
      title: "Pond Care",
      price: 1100,
      showQuantity: false,
    },
    {
      id: 6,
      title: "AquaCare",
      price: 1080,
      showQuantity: false,
    },
    {
      id: 7,
      title: "De - ODOPLUS",
      price: 1700,
      showQuantity: false,
    },
    {
      id: 8,
      title: "ub-SPORE",
      price: 600,
      showQuantity: false,
    },
    {
      id: 9,
      title: "AquabISON",
      price: 850,
      showQuantity: false,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="product-listing">
          <h3 className="title">Results - All Products</h3>

          <div className="sort-buttons">
            <h5 className="sort">Sort By :</h5>
            <div className="all-sort-btns">
              <Buttons variant="outline-primary">Popular Products</Buttons>
              <Buttons variant="outline-primary">Low to High</Buttons>
              <Buttons variant="outline-primary">High to Low</Buttons>
              <Buttons variant="outline-primary">Best Sellers</Buttons>
              <Buttons variant="outline-primary">Newest Arrivals</Buttons>
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
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
