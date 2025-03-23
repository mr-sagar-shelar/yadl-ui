import React, { FC } from "react";
import PenTool from "../PenTool";

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
      <PenTool width="500px" height="500px" />
    </div>
  );
};

export default Example;
