import React from "react";
import classes from "./CustomInput.module.scss";

export default function CustomInput({
  label,
  span,
  name,
  type,
  placeholder,
  register,
  width,
  required,
  errors,
  defaultValue,
}) {
  return (
    <div className={classes["CustomInput"]}>
      <label>
        {label} <span>{span}</span>
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register(name, { required })}
        style={{ width: width }}
      />
      {errors[name]?.type === "required" && <p>This field is required</p>}
    </div>
  );
}
