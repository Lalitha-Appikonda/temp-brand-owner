import React, { useState } from "react";
import Input from "../../../components/form-elements/Input";
import RadioButton from "../../../components/form-elements/RadioButton";
import Buttons from "../../../components/form-elements/Buttons";
import TextArea from "../../../components/form-elements/TextArea";

const AddressForm = ({
  item = {},
  onCancel,
  onSubmit,
  submitButtonText = "Save and Delivery Here",
  showCancel = true,
}) => {
  const [addressType, setAddressType] = useState(item.addressType || "home");

  const handleAddressTypeChange = (e) => {
    setAddressType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ ...item, addressType });
  };
  return (
    <div className="address-form">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="divisions">
            <div className="input-block">
              <Input
                placeholder={item.name || ""}
                label="Name"
                className="text-input"
              />
            </div>
            <div className="input-block">
              <Input
                placeholder={item.phone || ""}
                label="Phone Number"
                className="text-input"
              />
            </div>
          </div>

          <div className="divisions row2">
            <div className="input-block">
              <Input
                placeholder={item.name || ""}
                label="Pin code"
                className="text-input"
              />
            </div>
            <div className="input-block">
              <Input
                placeholder={item.phone || ""}
                label="Locality"
                className="text-input"
              />
            </div>
          </div>

          <div className="divisions row2">
            <div className="input-block">
              <Input
                placeholder={item.name || ""}
                label="City/District/Town"
                className="text-input"
              />
            </div>
            <div className="input-block">
              <Input
                placeholder={item.phone || ""}
                label="State"
                className="text-input"
              />
            </div>
          </div>

          <div className="divisions row2">
            <div className="text-area-block">
              <TextArea label="Complete Address" />
            </div>
          </div>

          <div className="divisions row2">
            <div className="input-block">
              <Input
                placeholder={item.name || ""}
                label="Landmark (Optional)"
                className="text-input"
              />
            </div>
            <div className="input-block">
              <Input
                placeholder={item.phone || ""}
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
                  Work ( Delivery between Monday to Saturday 10 AM - 5 PM )
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="save-address-container">
          <div className="save-address">
            <Buttons type="submit">{submitButtonText}</Buttons>
          </div>
          {showCancel && (
            <div className="save-address">
              <Buttons
                type="button"
                variant="outline-primary"
                onClick={onCancel}
              >
                Cancel
              </Buttons>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
