import React from "react";

export const Menu = ({ width = "24", stroke = "#000", style = {} }) => {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={stroke}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
    </div>
  );
};
