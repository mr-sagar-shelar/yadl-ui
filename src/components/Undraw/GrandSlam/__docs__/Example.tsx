import React, { FC } from "react";
import GrandSlam from "../GrandSlam";

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
      <GrandSlam width="500px" height="500px" />
    </div>
  );
};

export default Example;
