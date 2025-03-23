import React, { FC } from "react";
import TeamEffort from "../TeamEffort";

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
      <TeamEffort width="500px" height="500px" />
    </div>
  );
};

export default Example;
