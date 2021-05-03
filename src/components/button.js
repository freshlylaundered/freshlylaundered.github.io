import * as React from "react";

const Button = ({ children }) => {
  return (
    <div
      style={{
        margin: "2px 25px",
        display: "inline-block",
        fontWeight: 700,
        textDecorationLine: "none !important",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
};

export default Button;
