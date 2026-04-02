import React from "react";

import { HiOutlineTrash } from "react-icons/hi";
import PopUp from "../../../components/popup/PopUp";
import Buttons from "../../../components/form-elements/Buttons";

const DeletePopup = ({
  trigger,
  title,
  description,
  onRemove,
  size = "sm",
  iconElement,  
  imageElement,
  type = ""
}) => {

    const buttonText = {
    delete: "Remove",
    cancel: "Cancel",
    wishlist: "Move to Wishlist",
    archive: "Archive",
  };

  return (
    <div className="action-popup-mobile-wrapper">
      <PopUp trigger={trigger} size={size}>
        {({ close }) => (
          <div className="mobile-popup-conatiner">
            {iconElement && <div className="icon-wrapper">{iconElement}</div>}
            {imageElement && <div className="image-wrapper">{imageElement}</div>}

            <h1>{title}</h1>
            <h4>{description}</h4>

            <div className="remove-widhlist-button-wrapper">
              <div>
                <Buttons
                  variant="outline-primary"
                  className="cart-delete"
                  onClick={() => {
                    onRemove();
                    close();
                  }}
                >
                  {buttonText[type] || "Submit"}
                </Buttons>
              </div>

              <div>
                <Buttons variant="primary" className="cart-delete">
                  Move to Wishlist
                </Buttons>
              </div>
            </div>
          </div>
        )}
      </PopUp>
    </div>
  );
};

export default DeletePopup;
