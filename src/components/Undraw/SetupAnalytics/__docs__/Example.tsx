import React, { FC } from "react";
import SetupAnalytics from "../SetupAnalytics";

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
      <SetupAnalytics width="500px" height="500px" />
    </div>
  );
};

export default Example;
