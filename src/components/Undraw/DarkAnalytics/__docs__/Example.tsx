import React, { FC } from "react";
import DarkAnalytics from "../DarkAnalytics";

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
      <DarkAnalytics width="500px" height="500px" />
    </div>
  );
};

export default Example;
