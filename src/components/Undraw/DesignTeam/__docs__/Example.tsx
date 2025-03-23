import React, { FC } from "react";
import DesignTeam from "../DesignTeam";

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
      <DesignTeam width="500px" height="500px" />
    </div>
  );
};

export default Example;
