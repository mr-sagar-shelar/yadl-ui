import React, { FC } from "react";
import EffortlessLove from "../EffortlessLove";

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
      <EffortlessLove width="500px" height="500px" />
    </div>
  );
};

export default Example;
