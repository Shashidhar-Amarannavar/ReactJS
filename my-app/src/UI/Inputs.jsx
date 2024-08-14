import React, { useRef, useEffect } from "react";

function Inputs(props) {
  const inputRef = useRef(null);

  const {
    label,
    placeholder,
    value,
    handleChange,
    validationText,
    handleKeyDown,
    focusText
  } = props;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div style={{ width: "100%", marginTop: "3%" }}>
      <label className="label-text">{label}</label>
      <div>
        <input
          type="text"
          className="input-fields"
          ref={focusText && inputRef}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div style={{ height: "4px" }}>
          {validationText && (
            <span className="error-text">{validationText}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Inputs;
