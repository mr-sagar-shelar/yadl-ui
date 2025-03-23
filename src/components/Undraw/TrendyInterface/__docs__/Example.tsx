import React, { FC } from "react";
import TrendyInterface from "../TrendyInterface";

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
      <TrendyInterface width="500px" height="500px" />
    </div>
  );
};

export default Example;
