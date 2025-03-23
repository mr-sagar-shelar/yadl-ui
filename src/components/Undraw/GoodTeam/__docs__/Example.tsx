import React, { FC } from "react";
import GoodTeam from "../GoodTeam";

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
      <GoodTeam width="500px" height="500px" />
    </div>
  );
};

export default Example;
