import React, { useState } from "react";
import MobileHeader from "../../components/mobileHeader/MobileHeader";
import { useLocation } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import Buttons from "../../components/form-elements/Buttons";
import MobileAddressCard from "./component/MobileAddressCard";

const MobileAddress = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const addresses = [
    {
      id: 1,
      name: "Jayanta Pal",
      placeType: "Office",
      fullAddress: "402, 4th floor, Guttala Begumpet, cyber hills road no 5, Opposite side of Gayatri Nest aparement, Jubliee Hills - 500033",
      number: 7665412345,
    },
    {
      id: 2,
      name: "Jayanta Pal",
      placeType: "Home",
      fullAddress: "402, 4th floor, Guttala Begumpet, cyber hills road no 5, Opposite side of Gayatri Nest aparement, Jubliee Hills - 500033",
      number: 7665412345,
    },
    {
      id: 3,
      name: "Jayanta Pal",
      placeType: "Office",
      fullAddress: "402, 4th floor, Guttala Begumpet, cyber hills road no 5, Opposite side of Gayatri Nest aparement, Jubliee Hills - 500033",
      number: 7665412345,
    },
  ];

  const [selectedAddress, setSelectedAddress] = useState(1);

  const defaultAddress = addresses[0];
  const otherAddresses = addresses.slice(1);

  return (
    <div className="mobile-address">
      <MobileHeader title="Select Address" />

      <div className="progress-indication-container">
        <div
          className={`progress-line ${currentPath === "/cart" ? "active" : ""}`}
        ></div>

        <div className="step">
          <div className={`circle ${currentPath === "/cart" ? "active" : ""}`}>
            <TiTick
              className={`tick-icon ${currentPath === "/address" ? "enable" : ""}`}
            />
          </div>
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

      <div className="mlb-add-addres-button">
        <div className="mlb-add-addres-button-wrapper">
          <Buttons variant="outline-primary">Add New Address</Buttons>
        </div>
      </div>

      <div className="default-address-title">
        <h4>Default Address</h4>
      </div>

      <MobileAddressCard
        addresses={[defaultAddress]}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
        isOtherAddress={false}
      />

      <div className="default-address-title">
        <h4>Other Address</h4>
      </div>

      <MobileAddressCard
        addresses={otherAddresses}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
        isOtherAddress={true}
      />


      <div className="add-mobile-footer">
        <div className="confirm-btn"><Buttons>Confirm</Buttons></div>
      </div>
    </div>
  );
};

export default MobileAddress;
