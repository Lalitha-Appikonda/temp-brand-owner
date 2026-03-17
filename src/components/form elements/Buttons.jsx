import React from "react";

const Buttons = ({ variant = "primary", className = "", children, ...props }) => {
  return (
    <div className="btn-container">
      <button className={`btn btn-${variant} ${className}`} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Buttons;