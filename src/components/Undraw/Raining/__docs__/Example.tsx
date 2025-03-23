import React, { FC } from "react";
import Raining from "../Raining";

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
      <Raining width="500px" height="500px" />
    </div>
  );
};

export default Example;
