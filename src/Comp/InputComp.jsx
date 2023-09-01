import React from "react";

export const InputComp = ({
  label,
  type,
  name,
  size,
  value,
  placeholder,
  onChange,
  error,
  errorText,
  className,
  wrapperClassName,
  style,
  wrapperStyle,
  noMargin,
  ...rest
}) => {
  return (
    <div
      className={`${noMargin ? "m-0" : "mb-2"} ${wrapperClassName}`}
      style={wrapperStyle}
    >
      <label className="text-white">{label}</label>
      <input
        {...rest}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`form-control form-control-${size ? size : "sm"} ${
          error && "is-invalid"
        } ${className}`}
      />
      <div className="invalid-feedback">{errorText}</div>
    </div>
  );
};
