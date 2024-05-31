import React from "react";

export default function IconTM_CreateSupplier(props) {
  const { fontSize } = props;
  return (
    <svg
      style={{ width: `${fontSize}rem`, height: `${fontSize}rem` }}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="17.5" fill="white" stroke="#138300" />
      <rect
        x="3.375"
        y="3.375"
        width="29.25"
        height="29.25"
        rx="14.625"
        fill="#138300"
      />
      <path
        d="M11 18.0029H25"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18.0051 25V11"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
