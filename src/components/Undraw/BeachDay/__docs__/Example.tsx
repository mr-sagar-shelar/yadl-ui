import React, { FC } from "react";
import BeachDay from "../BeachDay";

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
      <BeachDay width="500px" height="500px" />
    </div>
  );
};

export default Example;
