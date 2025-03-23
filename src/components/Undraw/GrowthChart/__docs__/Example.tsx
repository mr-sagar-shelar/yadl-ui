import React, { FC } from "react";
import GrowthChart from "../GrowthChart";

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
      <GrowthChart width="500px" height="500px" />
    </div>
  );
};

export default Example;
