import React, { FC } from "react";
import Contrast from "../Contrast";

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
      <Contrast width="500px" height="500px" />
    </div>
  );
};

export default Example;
