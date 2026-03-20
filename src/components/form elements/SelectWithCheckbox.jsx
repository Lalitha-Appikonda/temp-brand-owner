import React, { useEffect, useRef, useState } from "react";
import CheckBox from "./CheckBox";

const SelectWithCheckbox = ({
  label,
  name,
  value = [],
  onChange,
  options = [],
  placeholder = "",
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleCheckboxChange = (e) => {
    const { value: val, checked } = e.target;

    let updated;

    if (checked) {
      updated = [...value, val];
    } else {
      updated = value.filter((item) => item !== val);
    }

    onChange(name, updated);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="select-group" ref={selectRef}>
      {label && <label>{label}</label>}

      <div className="custom-select">
        <div className={`select-wrapper ${isOpen ? "open" : ""}`}>
          <div className="custom-dropdown" onClick={() => setIsOpen(!isOpen)}>
            <div className="dropdown-content">
              {icon && <span className="product-first-icon">{icon}</span>}

              <span className="placeholder">
                {value?.label || placeholder}
              </span>
            </div>
          </div>
        </div>

        {isOpen && (
          <ul className="dropdown-list">
            {options.map((item, index) => (
              <li key={index}>
                <CheckBox
                  label={item.label}
                  name={name}
                  value={item.value}
                  checked={value.includes(item.value)}
                  onChange={handleCheckboxChange}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectWithCheckbox;
