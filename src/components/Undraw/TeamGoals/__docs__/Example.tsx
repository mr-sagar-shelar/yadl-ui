import React, { FC } from "react";
import TeamGoals from "../TeamGoals";

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
      <TeamGoals width="500px" height="500px" />
    </div>
  );
};

export default Example;
