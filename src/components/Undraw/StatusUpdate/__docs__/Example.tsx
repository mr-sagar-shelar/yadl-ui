import React, { FC } from "react";
import StatusUpdate from "../StatusUpdate";

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
      <StatusUpdate width="500px" height="500px" />
    </div>
  );
};

export default Example;
