import React from "react";

const Buttons = ({ variant = "primary", className = "",onClick, children, ...props }) => {
  return (
    <div className="btn-container">
      <button className={`btn btn-${variant} ${className}`} {...props} onClick={onClick}>
        
        {children}
      </button>
    </div>
  );
};

export default Buttons;