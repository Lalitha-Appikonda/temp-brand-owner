import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import Buttons from "../../components/form-elements/Buttons";
import RadioButton from "../../components/form-elements/RadioButton";
import Input from "../../components/form-elements/Input";
import TextArea from "../../components/form-elements/TextArea";
import AddressCard from "./component/AddressCard";

const Address = () => {
  const [checkedAddress, setCheckedAddress] = useState("");
  const [editAddressId, setEditAddressId] = useState(null);

  const [addressType, setAddressType] = useState("");

  const fullAddress = [
    {
      id: 1,
      name: "Jayanta Pal",
      placeType: "Home",
      address:
        "Plot No. 42, Oceanview Industrial Park, Phase II, Navi Mumbai, Maharashtra 400706",
      phone: 7551078556,
    },
    {
      id: 2,
      name: "JSrinivas Varma",
      placeType: "Work",
      address:
        "7B, Kaveri Road, Lakshmi Nagar, Vill. Sundarpur, Krishnagiri, Tamil Nadu 635001",
      phone: 9234567851,
    },
    {
      id: 3,
      name: "JSrinivas Varma",
      placeType: "Work",
      address:
        "7B, Kaveri Road, Lakshmi Nagar, Vill. Sundarpur, Krishnagiri, Tamil Nadu 635001",
      phone: 9234567851,
    },
    {
      id: 4,
      name: "JSrinivas Varma",
      placeType: "Work",
      address:
        "7B, Kaveri Road, Lakshmi Nagar, Vill. Sundarpur, Krishnagiri, Tamil Nadu 635001",
      phone: 9234567851,
    },
  ];

  const [addresses, setAddresses] = useState(fullAddress);

  const handleChange = (e) => {
    const selectedId = Number(e.target.value);

    setCheckedAddress(selectedId);
    if (editAddressId !== selectedId) {
      setEditAddressId(null);
    }
  };

  const handleAddressTypeChange = (e) => {
    setAddressType(e.target.value);
  };

  const handleEditClick = (id) => {
    setEditAddressId(id);
  };

  const handleCancelEdit = () => {
    setEditAddressId(null);
  };

  const handleDelete = (id) => {
    const updated = addresses.filter((item) => item.id !== id);
    setAddresses(updated);

    if (checkedAddress === id) {
      setCheckedAddress("");
    }

    if (editAddressId === id) {
      setEditAddressId(null);
    }
  };

  return (
    <div className="address-container">
      {addresses.map((item) => (
        <AddressCard
          key={item.id}
          item={item}
          checkedAddress={checkedAddress}
          editAddressId={editAddressId}
          addressType={addressType}
          handleChange={handleChange}
          handleAddressTypeChange={handleAddressTypeChange}
          handleEditClick={handleEditClick}
          handleDelete={handleDelete}
          handleCancelEdit={handleCancelEdit}
        />
      ))}
    </div>
  );
};

export default Address;
