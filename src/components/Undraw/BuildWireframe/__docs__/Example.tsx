import React, { FC } from "react";
import BuildWireframe from "../BuildWireframe";

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
      <BuildWireframe width="500px" height="500px" />
    </div>
  );
};

export default Example;
