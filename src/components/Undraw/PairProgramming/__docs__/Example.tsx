import React, { FC } from "react";
import PairProgramming from "../PairProgramming";

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
      <PairProgramming width="500px" height="500px" />
    </div>
  );
};

export default Example;
