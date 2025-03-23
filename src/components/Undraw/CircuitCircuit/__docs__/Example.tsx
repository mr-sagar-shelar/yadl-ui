import React, { FC } from "react";
import CircuitCircuit from "../CircuitCircuit";

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
      <CircuitCircuit width="500px" height="500px" />
    </div>
  );
};

export default Example;
