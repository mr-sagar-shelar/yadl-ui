import React, { FC } from "react";
import TaskList from "../TaskList";

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
      <TaskList width="500px" height="500px" />
    </div>
  );
};

export default Example;
