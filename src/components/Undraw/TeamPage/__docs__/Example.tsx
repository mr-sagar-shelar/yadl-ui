import React, { FC } from "react";
import TeamPage from "../TeamPage";

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
      <TeamPage width="500px" height="500px" />
    </div>
  );
};

export default Example;
