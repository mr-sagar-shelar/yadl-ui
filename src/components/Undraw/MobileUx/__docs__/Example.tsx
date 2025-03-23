import React, { FC } from "react";
import MobileUx from "../MobileUx";

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
      <MobileUx width="500px" height="500px" />
    </div>
  );
};

export default Example;
