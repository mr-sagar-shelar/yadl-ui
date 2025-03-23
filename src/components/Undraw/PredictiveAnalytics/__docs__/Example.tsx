import React, { FC } from "react";
import PredictiveAnalytics from "../PredictiveAnalytics";

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
      <PredictiveAnalytics width="500px" height="500px" />
    </div>
  );
};

export default Example;
