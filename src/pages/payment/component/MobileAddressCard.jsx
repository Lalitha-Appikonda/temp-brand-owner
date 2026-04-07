import React, { useState } from "react";
import RadioButton from "../../../components/form-elements/RadioButton";
import Buttons from "../../../components/form-elements/Buttons";
import { LuPencil } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi2";

const MobileAddressCard = ({
  addresses,
  selectedAddress,
  setSelectedAddress,
  isOtherAddress
}) => {
  const handleChange = (e) => {
    setSelectedAddress(Number(e.target.value));
  };

  return (
    <>
      {addresses.map((address, index) => {
         const isLastAddress = index === addresses.length - 1;
        const isSelected = selectedAddress === address.id;

        return (
          <div key={address.id}>
            <div
              className={`mobile-address-card ${isOtherAddress && isLastAddress
          ? "last-other-address"
          : ""}`}
            >
              <RadioButton
                options={[{ value: address.id }]}
                value={selectedAddress}
                onChange={handleChange}
              />

              <div className="address-block-right">
                <div className="title-wrap">
                  <h2>{address.name}</h2>

                  <div className="delivery-place">
                    <h6>{address.placeType}</h6>
                  </div>
                </div>

                <h4>{address.fullAddress}</h4>

                {isSelected && (
                  <>
                    <h4>
                      Mobile: <span>{address.number}</span>
                    </h4>

                    <div className="mobile-address-wrap-buttons">
                      <div className="edit-btn">
                        <Buttons variant="outline-primary">
                          Edit <LuPencil className="icon" />
                        </Buttons>
                      </div>

                      <div className="delete-btn">
                        <Buttons variant="outline-primary">
                          Delete <HiOutlineTrash className="icon" />
                        </Buttons>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {index !== addresses.length - 1 && (
              <div className="dividing-line"></div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MobileAddressCard;
