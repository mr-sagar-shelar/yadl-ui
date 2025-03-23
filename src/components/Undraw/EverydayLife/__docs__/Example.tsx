import React, { FC } from "react";
import EverydayLife from "../EverydayLife";

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
      <EverydayLife width="500px" height="500px" />
    </div>
  );
};

export default Example;
