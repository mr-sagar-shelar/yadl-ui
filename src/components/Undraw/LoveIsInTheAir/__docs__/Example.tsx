import React, { FC } from "react";
import LoveIsInTheAir from "../LoveIsInTheAir";

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
      <LoveIsInTheAir width="500px" height="500px" />
    </div>
  );
};

export default Example;
