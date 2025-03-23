import React, { FC } from "react";
import AddTasks from "../AddTasks";

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
      <AddTasks width="500px" height="500px" />
    </div>
  );
};

export default Example;
