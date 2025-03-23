import React, { FC } from "react";
import SegmentAnalysis from "../SegmentAnalysis";

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
      <SegmentAnalysis width="500px" height="500px" />
    </div>
  );
};

export default Example;
