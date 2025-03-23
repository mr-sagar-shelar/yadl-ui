import React, { FC } from "react";
import WaitInLine from "../WaitInLine";

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
      <WaitInLine width="500px" height="500px" />
    </div>
  );
};

export default Example;
