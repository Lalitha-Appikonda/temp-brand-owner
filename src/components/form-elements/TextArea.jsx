import React from 'react'

const TextArea = ({
  label,
  name,
  value,
  onChange,
  required = false,
  error,
  placeholder = ""
}) => {
  return (
    <div className="textarea-group">
       {label && <label>{label}</label>}

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`textarea ${error ? "textarea-error" : ""}`}
      />

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default TextArea