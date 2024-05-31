import React from "react";
import classes from "@/components/commonLayout/PaddingLayout.module.scss";

export default function PaddingLayout(props) {
  return <div className={classes["padding-layout"]}>{props.children}</div>;
}
