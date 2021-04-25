import * as React from "react";
import ReactRough, { Rectangle } from "react-rough";
import { StaticImage } from "gatsby-plugin-image";
import Button from "./button";
import { navigate } from "gatsby";
import portrait from "../images/portrait.png";

const Header = () => {
  let width = 630;
  const height = 180;

  const [dimensions, setDimensions] = React.useState({
    height,
    width,
  });

  React.useEffect(() => {
    const calcWidth = () =>
      Math.min(width, document.documentElement.clientWidth);
    function handleResize() {
      setDimensions({
        height: document.documentElement.clientHeight,
        width: calcWidth(),
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const rough = (
    <div
      style={{
        marginTop: 30,
      }}
    >
      <div
        style={{
          position: "relative",
          width: dimensions.width,
          height,
          display: "inline-block",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            width: dimensions.width - 30,
            height: height - 30,
            backgroundColor: "#aaa",
            zIndex: -100,
          }}
        ></div>
        <ReactRough height={height} width={dimensions.width} renderer="svg">
          <Rectangle
            x={15}
            y={15}
            width={dimensions.width - 30}
            height={height - 30}
            bowing={1}
            fillStyle={"solid"}
            // fill={"#aaa"}
            strokeWidth={2}
            roughness={2}
          />
        </ReactRough>

        <div
          style={{
            backgroundImage: `url(${portrait})`,
            width: 200,
            height: 200,
            backgroundSize: "cover",
            position: "absolute",
            left: `30px`,
            bottom: "15px",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: "40px",
            bottom: "20px",
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

      <Button text="Projects" link="projects" width={180} />
      <Button text="Bio" link="bio" />
      <Button text="Resume" link="resume" width={180} />
      <Button text="Log" link="log" />
    </div>
  );

  return <div>{rough}</div>;
};

export default Header;
