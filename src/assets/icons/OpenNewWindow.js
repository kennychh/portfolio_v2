import React from "react";

export const OpenNewWindow = ({ width = "24", stroke = "#000", style = {} }) => {
  return (
    <div style={style}>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      fill="none"
      strokeWidth="1.96"
      color="#000"
      viewBox="0 0 24 24"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 3h-6m6 0l-9 9m9-9v6"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"
      ></path>
    </svg>
    </div>
  );
}
