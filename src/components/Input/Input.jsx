import React from "react";

const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  required = false,
  prefix,
  error,
  ...rest
}) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}

      <div className={`input-wrapper ${prefix ? "has-prefix" : ""}`}>
        {prefix && <span className="input-prefix">{prefix}</span>}

        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`custom-input ${error ? "input-error" : ""}`}
          {...rest}
        />
      </div>

      {error && <p className="error-text">{error}</p>}
      
    </div>
  );
};

export default Input;