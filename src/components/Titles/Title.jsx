import React from "react";
import classes from "./Title.module.scss";

export default function Title({ mainTitle, subTitle }) {
  return (
    <div className={classes["title"]}>
      <h1 className={classes["main-title"]}>{mainTitle}</h1>
      <p className={classes["sub-title"]}>{subTitle}</p>
    </div>
  );
}
