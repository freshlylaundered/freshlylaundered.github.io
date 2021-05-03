import * as React from "react";
import ReactRough, { Rectangle } from "react-rough";
import Button from "./button";
import { Link, navigate } from "gatsby";
import portrait from "../images/portrait3.png";

const Header = () => {
  let width = 630;
  const height = 180;

  const [dimensions, setDimensions] = React.useState({
    height,
    width,
  });

  return (
    <div
      style={{
        fontFamily: "Zilla Slab",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <div
          style={{
            display: "inline-block",
            position: "relative",
          }}
        >
          <ReactRough height={230} width={230} renderer="svg">
            <Rectangle
              x={15}
              y={15}
              width={200}
              height={200}
              bowing={1}
              fillStyle={"hatchure"}
              fill={"#aaa"}
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
              left: `20px`,
              bottom: "20px",
            }}
          />
        </div>

        <div
          style={{
            display: "inline-block",
            verticalAlign: "bottom",
            margin: 15,
            fontSize: 30,
            lineHeight: 1.2,
          }}
        >
          James
          <br />
          <span style={{ color: "#c11111", fontWeight: 700 }}>Patrick</span>
          <br />
          LeDuc
        </div>
      </div>
      <Button>
        <Link to="/projects">PROJECTS</Link>
      </Button>
      <Button>
        <Link to="/resume">RESUME</Link>
      </Button>
      <Button>
        <a href="https://github.com/jamespatrickleduc" target="_blank">
          GITHUB
        </a>
      </Button>
    </div>
  );
};

export default Header;
