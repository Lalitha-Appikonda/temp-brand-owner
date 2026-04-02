import React, { useEffect, useRef, useState } from "react";

const SelectBox = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "",
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (item) => {
    onChange(name, item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="select-group" ref={selectRef}>
      {label && <label>{label}</label>}

      <div className="custom-select">
        <div className={`select-wrapper ${isOpen ? "open" : ""}`}>
          <div
            className={`custom-dropdown ${!value ? "placeholder" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="dropdown-content">
              {icon && <span className="product-first-icon">{icon}</span>}

              <span className="value-placeholder">{value?.label || placeholder}</span>

            </div>
          </div>
        </div>

        {isOpen && (
          <ul className="dropdown-list">
            {options.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectBox;
