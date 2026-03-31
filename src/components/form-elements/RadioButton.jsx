
const RadioButton = ({
  label,
  name,
  options = [],
  value,
  onChange,
  error,
  className,
}) => {
  return (
    <div className="radio-wrapper">
      {label && <label className="radio-label">{label}</label>}

      <div className={`radio-group ${className}`}>
        {options.map((opt, index) => (
          <label key={index} className="radio-item">
            {opt.label && <span className="label-text">{opt.label}</span>}
            <input  type="radio" name={name} value={opt.value} checked={value === opt.value}  onChange={onChange} />
            <span className="custom-radio"></span>
          </label>
        ))}
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default RadioButton;