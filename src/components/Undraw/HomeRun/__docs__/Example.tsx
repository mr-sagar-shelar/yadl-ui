import React, { FC } from "react";
import HomeRun from "../HomeRun";

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
      <HomeRun width="500px" height="500px" />
    </div>
  );
};

export default Example;
