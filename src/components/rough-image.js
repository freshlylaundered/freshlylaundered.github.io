import * as React from "react";
import ReactRough, { Rectangle } from "react-rough";

const RoughImage = ({ width, height, children }) => {
  const margin = 15;
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          width: width - 2 * margin,
          height: height - 2 * margin,
          top: margin,
          left: margin,
          zIndex: -10,
        }}
      >
        {children}
      </div>
      <ReactRough width={width} height={height} renderer="svg">
        <Rectangle
          x={15}
          y={15}
          width={width - 2 * margin}
          height={height - 2 * margin}
          bowing={1}
          strokeWidth={2}
          roughness={2}
        />
      </ReactRough>
    </div>
  );
};

export default RoughImage;
