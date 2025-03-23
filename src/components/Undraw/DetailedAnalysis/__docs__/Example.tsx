import React, { FC } from "react";
import DetailedAnalysis from "../DetailedAnalysis";

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
      <DetailedAnalysis width="500px" height="500px" />
    </div>
  );
};

export default Example;
