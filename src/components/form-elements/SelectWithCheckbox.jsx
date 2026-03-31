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
  className="",
  disabled=false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

 const handleCheckboxChange = (option, checked) => {
  let updated;

  if (checked) {
    updated = [...value, option]; // ✅ full object
  } else {
    updated = value.filter((item) => item.value !== option.value);
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
    <div className={`select-group ${className}`} ref={selectRef}>
      {label && <label>{label}</label>}

      <div className="custom-select">
        <div className={`select-wrapper ${isOpen ? "open" : ""}`}>
          <div className={`custom-dropdown ${disabled ?"disabled":""}`} onClick={() => {if(disabled) return; setIsOpen(!isOpen)}}>
            <div className="dropdown-content">
              {icon && <span className="product-first-icon">{icon}</span>}

              <span className="placeholder">
                {value.length > 0
                  ? value.map(item => item.label).join(", ")
                  : placeholder}
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
                  checked={value.some(v => v.value === item.value)} // ✅ FIX
                  onChange={(e) => handleCheckboxChange(item, e.target.checked)} // ✅ FIX
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
