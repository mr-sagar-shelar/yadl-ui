import React, { FC } from "react";
import FlowersFlowers from "../FlowersFlowers";

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
      <FlowersFlowers width="500px" height="500px" />
    </div>
  );
};

export default Example;
