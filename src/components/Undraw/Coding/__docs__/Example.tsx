import React, { FC } from "react";
import Coding from "../Coding";

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
      <Coding width="500px" height="500px" />
    </div>
  );
};

export default Example;
