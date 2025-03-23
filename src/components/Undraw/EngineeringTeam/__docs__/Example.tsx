import React, { FC } from "react";
import EngineeringTeam from "../EngineeringTeam";

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
      <EngineeringTeam width="500px" height="500px" />
    </div>
  );
};

export default Example;
