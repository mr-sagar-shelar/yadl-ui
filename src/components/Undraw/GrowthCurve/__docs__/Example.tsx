import React, { FC } from "react";
import GrowthCurve from "../GrowthCurve";

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
      <GrowthCurve width="500px" height="500px" />
    </div>
  );
};

export default Example;
