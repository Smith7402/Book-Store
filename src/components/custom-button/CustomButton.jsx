import React from "react";
import classes from "./CustomButton.module.scss";

export default function CustomButton({
  children,
  backgroundColor,
  color,
  margin,
  padding,
  onClick,
  border,
  fontWeight,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    margin: margin,
    padding: padding,
    border: border,
    fontWeight: fontWeight,
  };

  return (
    <button className={classes["button"]} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
