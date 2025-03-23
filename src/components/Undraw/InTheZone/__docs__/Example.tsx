import React, { FC } from "react";
import InTheZone from "../InTheZone";

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
      <InTheZone width="500px" height="500px" />
    </div>
  );
};

export default Example;
