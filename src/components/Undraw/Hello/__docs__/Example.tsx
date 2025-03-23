import React, { FC } from "react";
import Hello from "../Hello";

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
      <Hello width="500px" height="500px" />
    </div>
  );
};

export default Example;
