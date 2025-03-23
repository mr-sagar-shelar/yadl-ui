import React, { FC } from "react";
import ProjectTeam from "../ProjectTeam";

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
      <ProjectTeam width="500px" height="500px" />
    </div>
  );
};

export default Example;
