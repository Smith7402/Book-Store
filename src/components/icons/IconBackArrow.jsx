import React from "react";

export default function IconBackArrow(props) {
  const { fontSize } = props;
  return (
    <svg
      style={{ width: `${fontSize}rem`, height: `${fontSize}rem` }}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.8667 16C5.8667 15.5581 6.22487 15.2 6.6667 15.2H25.3334C25.7752 15.2 26.1334 15.5581 26.1334 16C26.1334 16.4418 25.7752 16.8 25.3334 16.8H6.6667C6.22487 16.8 5.8667 16.4418 5.8667 16Z"
        fill="#333333"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2813 8.8212C15.5641 9.16062 15.5183 9.66507 15.1788 9.94792L7.91634 16L15.1788 22.0521C15.5183 22.335 15.5641 22.8394 15.2813 23.1788C14.9984 23.5182 14.494 23.5641 14.1546 23.2813L6.15455 16.6146C5.97216 16.4626 5.8667 16.2374 5.8667 16C5.8667 15.7626 5.97216 15.5374 6.15455 15.3854L14.1546 8.71877C14.494 8.43592 14.9984 8.48178 15.2813 8.8212Z"
        fill="#333333"
      />
    </svg>
  );
}
