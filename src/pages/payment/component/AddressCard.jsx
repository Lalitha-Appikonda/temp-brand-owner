import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";

import RadioButton from "../../../components/form-elements/RadioButton";
import Input from "../../../components/form-elements/Input";
import TextArea from "../../../components/form-elements/TextArea";
import Buttons from "../../../components/form-elements/Buttons";
import AddressForm from "./AddressForm";

const AddressCard = ({
  item,
  checkedAddress,
  editAddressId,
  // addressType,
  handleChange,
  // handleAddressTypeChange,
  handleEditClick,
  handleDelete,
  handleCancelEdit,
  handleSaveEdit,
}) => {
  return (
    <div className="address-container">
      <div
        className={`address-block ${
          checkedAddress === item.id ? "address-box" : ""
        }`}
      >
        <div
          className={`address-wrapper ${
            editAddressId === item.id ? "edit" : ""
          }`}
        >
          <div className="address-body">
            <RadioButton
              options={[{ value: item.id }]}
              value={checkedAddress}
              onChange={handleChange}
            />

            {editAddressId === item.id ? (
              <div>
                <div className="person-name">
                  <h4>Edit Address</h4>
                </div>
                <div className="form-edit-block">
                  <AddressForm
                    item={item}
                    submitButtonText="Update Address"
                    showCancel={true}
                    onCancel={handleCancelEdit}
                    onSubmit={handleSaveEdit}
                  />
                </div>
              </div>
            ) : (
              <div className="content">
                <div className="person-name">
                  <h4>{item.name}</h4>
                  <div>{item.placeType}</div>
                </div>

                <h5>{item.address}</h5>
                <h5>Phone : {item.phone}</h5>

                <div className="deliver-button-container">
                  {checkedAddress === item.id && (
                    <Buttons>Deliver Here</Buttons>
                  )}
                </div>
              </div>
            )}
          </div>

          {editAddressId !== item.id && checkedAddress === item.id && (
            <div className="address-edit-delete-block">
              <div onClick={() => handleEditClick(item.id)}>
                <FiEdit2 />
              </div>
              <div>
                <HiOutlineTrash onClick={() => handleDelete(item.id)} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="dividing-line line"></div>
    </div>
  );
};

export default AddressCard;
