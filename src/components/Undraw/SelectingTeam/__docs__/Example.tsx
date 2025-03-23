import React, { FC } from "react";
import SelectingTeam from "../SelectingTeam";

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
      <SelectingTeam width="500px" height="500px" />
    </div>
  );
};

export default Example;
