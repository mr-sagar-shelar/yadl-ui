import React, { FC } from "react";
import CleanUp from "../CleanUp";

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
      <CleanUp width="500px" height="500px" />
    </div>
  );
};

export default Example;
