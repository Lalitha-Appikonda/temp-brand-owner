

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
  placeholder= "choose..."
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
     
        className={`custom-input ${error ? "input-error" : ""}`}
      >
        <option value="" >{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Select;
