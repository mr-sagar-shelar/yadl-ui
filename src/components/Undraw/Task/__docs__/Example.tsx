import React, { FC } from "react";
import Task from "../Task";

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
      <Task width="500px" height="500px" />
    </div>
  );
};

export default Example;
