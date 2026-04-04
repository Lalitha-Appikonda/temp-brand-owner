import { useState } from "react";
 
const PopUp = ({
  trigger,
  children,
  size = "md", // xs | sm | md | lg | xl
  title = "",
  showFooter = true,
  onCancel,
  className = ""
}) => {
 
  const [open, setOpen] = useState(false);
 
  const close = () => {
    setOpen(false);
    if (onCancel) onCancel();
  };
 
  return (
    <>
      {/* Trigger */}
      <span onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
        {trigger}
      </span>
 
      {/* Modal */}
      {open && (
       <div
  className={`popup-overlay ${className}`}  
  onClick={close}
>
 
          <div
            className={`popup-container ${size} ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
 
            {/* Header */}
            <div className="popup-header">
              <h4>{title}</h4>
              <button className="popup-close" onClick={close}>✕</button>
            </div>
 
            {/* Body */}
            <div className="popup-body">
              {typeof children === "function"
                ? children({ close })
                : children}
            </div>
 
            {/* Footer */}
            {/* {showFooter && (
              <div className="popup-footer">
                <button className="popup-cancel" onClick={close}>
                  Cancel
                </button>
              </div>
            )} */}
 
          </div>
        </div>
      )}
    </>
  );
};
 
export default PopUp;

