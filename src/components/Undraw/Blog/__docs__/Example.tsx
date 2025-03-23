import React, { FC } from "react";
import Blog from "../Blog";

const Example = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Blog width="500px" height="500px" />
    </div>
  );
};

export default Example;
