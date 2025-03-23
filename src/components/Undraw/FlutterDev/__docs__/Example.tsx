import React, { FC } from "react";
import FlutterDev from "../FlutterDev";

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
      <FlutterDev width="500px" height="500px" />
    </div>
  );
};

export default Example;
