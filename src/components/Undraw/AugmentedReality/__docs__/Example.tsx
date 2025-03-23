import React, { FC } from "react";
import AugmentedReality from "../AugmentedReality";

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
      <AugmentedReality width="500px" height="500px" />
    </div>
  );
};

export default Example;
