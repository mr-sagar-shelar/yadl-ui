import React, { FC } from "react";
import InThePool from "../InThePool";

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
      <InThePool width="500px" height="500px" />
    </div>
  );
};

export default Example;
