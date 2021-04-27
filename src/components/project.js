import * as React from "react";
import ReactRough, { Rectangle } from "react-rough";

const Project = ({ height, image, children }) => {
  const width = 630;
  return (
    <div style={{ position: "relative" }}>
      <ReactRough height={height} width={width} renderer="svg">
        <Rectangle
          x={15}
          y={15}
          width={width - 30}
          height={height - 30}
          bowing={1}
          fillStyle={"solid"}
          // fill={"#aaa"}
          strokeWidth={2}
          roughness={2}
        />
        <Rectangle
          x={30}
          y={30}
          width={300}
          height={height - 60}
          bowing={1}
          fillStyle={"solid"}
          fill={"#ccc"}
          strokeWidth={2}
          roughness={2}
        />
      </ReactRough>
      <div style={{ position: "absolute", top: 30, left: 350 }}>{children}</div>
    </div>
  );
};

export default Project;
