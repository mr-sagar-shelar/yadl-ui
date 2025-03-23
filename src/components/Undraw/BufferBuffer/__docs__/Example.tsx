import React, { FC } from "react";
import BufferBuffer from "../BufferBuffer";

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
      <BufferBuffer width="500px" height="500px" />
    </div>
  );
};

export default Example;
