import React from "react";
import Buttons from "../form-elements/Buttons";

const ProductButtons = ({className}) => {
  return (
    <>
        <div className={`product-sorting-buttons ${className}`}>
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
    </>
  );
};

export default ProductButtons;
