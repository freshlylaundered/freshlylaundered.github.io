import * as React from "react";
import ReactRough, { Rectangle } from "react-rough";

import { navigate } from "gatsby";

const Button = ({ width = 120, height = 80, text, link }) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={() => {
        navigate("/" + link);
      }}
    >
      <ReactRough height={height} width={width} renderer="svg">
        <Rectangle
          x={15}
          y={15}
          width={width - 30}
          height={height - 30}
          bowing={1}
          fillStyle="solid"
          fill={"#aaa"}
          strokeWidth={2}
          roughness={2}
        />
      </ReactRough>

      <div
        style={{
          position: "absolute",
          left: 15,
          width: width - 30,
          textAlign: "center",
          bottom: 25,
          zIndex: 10,
          fontSize: 20,
          color: "#000",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Button;
