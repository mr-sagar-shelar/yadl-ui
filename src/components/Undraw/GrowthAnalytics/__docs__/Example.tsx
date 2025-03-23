import React, { FC } from "react";
import GrowthAnalytics from "../GrowthAnalytics";

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
      <GrowthAnalytics width="500px" height="500px" />
    </div>
  );
};

export default Example;
