import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";

import RadioButton from "../../../components/form-elements/RadioButton";
import Input from "../../../components/form-elements/Input";
import TextArea from "../../../components/form-elements/TextArea";
import Buttons from "../../../components/form-elements/Buttons";

const AddressCard = ({
  item,
  checkedAddress,
  editAddressId,
  addressType,
  handleChange,
  handleAddressTypeChange,
  handleEditClick,
  handleDelete,
  handleCancelEdit,
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
                  <h2>Edit Address</h2>
                </div>
                <div className="form-edit-block">
                  <form>
                    <div>
                      <div className="divisions">
                        <div className="input-block">
                          <Input
                            placeholder={item.name}
                            label="Name"
                            className="text-input"
                          />
                        </div>
                        <div className="input-block">
                          <Input
                            placeholder={item.phone}
                            label="Phone Number"
                            className="text-input"
                          />
                        </div>
                      </div>

                      <div className="divisions row2">
                        <div className="input-block">
                          <Input
                            placeholder={item.name}
                            label="Pin code"
                            className="text-input"
                          />
                        </div>
                        <div className="input-block">
                          <Input
                            placeholder={item.phone}
                            label="Locality"
                            className="text-input"
                          />
                        </div>
                      </div>

                      <div className="divisions row2">
                        <div className="input-block">
                          <Input
                            placeholder={item.name}
                            label="City/District/Town"
                            className="text-input"
                          />
                        </div>
                        <div className="input-block">
                          <Input
                            placeholder={item.phone}
                            label="State"
                            className="text-input"
                          />
                        </div>
                      </div>

                      <div className="divisions row2">
                        <div className="text-area-block">
                          {/* <Input placeholder={item.name} label="Complete Address" className="text-input"/> */}
                          <TextArea label="Complete Address" />
                        </div>
                      </div>

                      <div className="divisions row2">
                        <div className="input-block">
                          <Input
                            placeholder={item.name}
                            label="Landmark (Optional)"
                            className="text-input"
                          />
                        </div>
                        <div className="input-block">
                          <Input
                            placeholder={item.phone}
                            label="Alternative Phone (Optional)"
                            className="text-input"
                          />
                        </div>
                      </div>

                      <div className="address-place-type">
                        <h5 className="title">Address Type</h5>
                        <div className="radio-and-placetype-selection-block">
                          <div className="place-type-selection">
                            <RadioButton
                              options={[{ value: "home" }]}
                              value={addressType}
                              onChange={handleAddressTypeChange}
                            />
                            <h5>Home ( Monday to Sunday Delivery )</h5>
                          </div>

                          <div className="place-type-selection">
                            <RadioButton
                              options={[{ value: "work" }]}
                              value={addressType}
                              onChange={handleAddressTypeChange}
                            />
                            <h5>
                              Work ( Delivery between Monday to Saturday 10 AM -
                              5 PM )
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="save-address-container">
                      <div className="save-address">
                        <Buttons type="submit">Save and Delivery Here</Buttons>
                      </div>
                      <div className="save-address">
                        <Buttons
                          type="button"
                          variant="outline-primary"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </Buttons>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="content">
                <div className="person-name">
                  <h2>{item.name}</h2>
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
