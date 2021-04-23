import * as React from "react";
import ReactRough, { Rectangle } from "react-rough";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./button";

const Header = () => {
  const width = 670;
  const height = 180;

  const rough = (
    <div
      style={{
        marginTop: "100px",
      }}
    >
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
        <StaticImage
          src="../images/portrait.png"
          width={200}
          height={200}
          quality={95}
          alt="Profile picture"
          placeholder="blurred"
          style={{
            position: "absolute",
            left: `30px`,
            bottom: "15px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "30px",
            top: "20px",
            zIndex: 10,
            fontSize: 30,
            textAlign: "right",
            color: "#000",
          }}
        >
          James
          <br />
          <span style={{ color: "#c11111", fontWeight: 700 }}>Patrick</span>
          <br />
          LeDuc
        </div>
      </div>

      <Button text="Projects" width={180} />
      <Button text="Bio" />
      <Button text="Resume" width={180} />
    </div>
  );

  return <div>{rough}</div>;
};

export default Header;
