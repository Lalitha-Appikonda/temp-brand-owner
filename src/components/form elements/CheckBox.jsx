import React from "react";

const CheckBox = ({
  label,
  name,
  value,
  checked,
  onChange,
  required = false,
  disabled = false,
  error,
  className= ""
}) => {
  const id = `${name}-${value}`;

  return (
    <div className={`checkbox-group ${className}`} >
      <label className="checkbox-wrapper" htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />

        <span className="custom-checkbox"></span>

        <span className="label-text">{label}</span>
      </label>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default CheckBox;
