import React, { FC } from "react";
import Finance from "../Finance";

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
      <Finance width="500px" height="500px" />
    </div>
  );
};

export default Example;
