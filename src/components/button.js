import * as React from "react";
import ReactRough, { Rectangle } from "react-rough";

const Button = ({ width = 120, height = 80, text, link }) => {
  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        display: "inline-block",
      }}
    >
      <ReactRough height={height} width={width}>
        {/* <Rectangle
        x={15}
        y={15}
        width={180}
        height={80}
        bowing={5}
        strokeWidth={4}
        fill={"#333"}
        fillWeight={4}
        hachureGap={6}
        fillStyle={"cross-hatch"}
      /> */}
        <Rectangle
          x={15}
          y={15}
          width={width - 30}
          height={height - 30}
          bowing={2}
          fillStyle="solid"
          fill={"#aaa"}
          strokeWidth={4}
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
