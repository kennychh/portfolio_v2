import React from "react";

export const InstagramLogo = ({width="24", stroke='#000',style={}}) => {
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
        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
      ></path>
      <path
        stroke={stroke}
        d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.5 6.51l.01-.011"
      ></path>
    </svg>
    </div>
  );
}
