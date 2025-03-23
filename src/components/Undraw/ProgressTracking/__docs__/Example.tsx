import React, { FC } from "react";
import ProgressTracking from "../ProgressTracking";

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
      <ProgressTracking width="500px" height="500px" />
    </div>
  );
};

export default Example;
