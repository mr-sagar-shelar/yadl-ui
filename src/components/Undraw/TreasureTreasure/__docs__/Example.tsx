import React, { FC } from "react";
import TreasureTreasure from "../TreasureTreasure";

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
      <TreasureTreasure width="500px" height="500px" />
    </div>
  );
};

export default Example;
