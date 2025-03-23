import React, { FC } from "react";
import Winners from "../Winners";

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
      <Winners width="500px" height="500px" />
    </div>
  );
};

export default Example;
