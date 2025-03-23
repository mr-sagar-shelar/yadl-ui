import React, { FC } from "react";
import GoingUp from "../GoingUp";

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
      <GoingUp width="500px" height="500px" />
    </div>
  );
};

export default Example;
