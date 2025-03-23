import React, { FC } from "react";
import OSUpgrade from "../OSUpgrade";

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
      <OSUpgrade width="500px" height="500px" />
    </div>
  );
};

export default Example;
