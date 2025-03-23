import React, { FC } from "react";
import RealTimeAnalytics from "../RealTimeAnalytics";

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
      <RealTimeAnalytics width="500px" height="500px" />
    </div>
  );
};

export default Example;
