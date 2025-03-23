import React, { FC } from "react";
import SnowFun from "../SnowFun";

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
      <SnowFun width="500px" height="500px" />
    </div>
  );
};

export default Example;
