import React, { FC } from "react";
import VirtualReality from "../VirtualReality";

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
      <VirtualReality width="500px" height="500px" />
    </div>
  );
};

export default Example;
