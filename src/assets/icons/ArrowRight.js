import React from "react";

export const ArrowRight = ({
  fill = "none",
  width = "24",
  height = "24",
  stroke = "#000",
  style = {},
}) => {
  return (
    <div style={style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke={stroke}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  );
};
