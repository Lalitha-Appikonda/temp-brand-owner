import React from "react";
import Buttons from "../form-elements/Buttons";

const ProductButtons = ({className, disabled}) => {
  return (
    <>
        <div className={`product-sorting-buttons ${className}`}>
          <Buttons variant="outline-primary" className="products-btn" disabled= {disabled}>
            All
          </Buttons>
          <Buttons variant="outline-primary" className="products-btn" disabled= {disabled}>
            Probiotics
          </Buttons>
          <Buttons variant="outline-primary" className="products-btn" disabled= {disabled}>
            Minerals
          </Buttons>
        </div>
    </>
  );
};

export default ProductButtons;
