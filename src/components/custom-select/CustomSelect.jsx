/* eslint-disable react/display-name */
import React from "react";
import classes from "./CustomSelect.module.scss";

const CustomSelect = React.forwardRef(
  ({ name, options, width, value, onChange, defaultValue }, ref) => {
    return (
      <div className={classes["custom-select"]} style={{ width: width }}>
        <select
          defaultValue={defaultValue}
          name={name}
          value={value}
          onChange={onChange}
          ref={ref}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value} disabled={index === 0}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default CustomSelect;
