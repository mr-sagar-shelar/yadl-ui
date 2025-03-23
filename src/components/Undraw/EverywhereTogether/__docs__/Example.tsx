import React, { FC } from "react";
import EverywhereTogether from "../EverywhereTogether";

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
      <EverywhereTogether width="500px" height="500px" />
    </div>
  );
};

export default Example;
