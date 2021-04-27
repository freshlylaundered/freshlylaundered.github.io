import { navigate } from "gatsby";
import * as React from "react";
import ReactRough, { Rectangle } from "react-rough";

const PostPreview = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug;

  const height = 200;
  const width = 630;

  return (
    <div
      style={{ position: "relative", cursor: "pointer" }}
      onClick={() => {
        navigate("log" + post.fields.slug);
      }}
    >
      <ReactRough height={height} width={width} renderer="svg">
        <Rectangle
          x={15}
          y={25}
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
          y={5}
          width={width - 60}
          height={40}
          bowing={1}
          fillStyle={"solid"}
          fill={"#ccc"}
          strokeWidth={2}
          roughness={2}
        />
      </ReactRough>
      <div style={{ position: "absolute", top: 15, left: 40 }}>{title}</div>
      <div style={{ position: "absolute", top: 15, right: 40 }}>
        {post.frontmatter.date}
      </div>
      <div
        style={{ position: "absolute", top: 60, left: 30, width: width - 60 }}
      >
        {post.frontmatter.description || post.excerpt}
      </div>
    </div>
  );
};

export default PostPreview;
