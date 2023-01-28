import React from "react";

export const LinkedinLogo = ({ width = "24", stroke = "#000", style = {} }) => {
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
          d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
        />
        <path
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
        />
      </svg>
    </div>
  );
};

