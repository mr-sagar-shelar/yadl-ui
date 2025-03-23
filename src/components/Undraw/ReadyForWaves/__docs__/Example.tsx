import React, { FC } from "react";
import ReadyForWaves from "../ReadyForWaves";

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
      <ReadyForWaves width="500px" height="500px" />
    </div>
  );
};

export default Example;
