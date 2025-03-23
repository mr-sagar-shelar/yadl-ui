import React, { FC } from "react";
import AcceptTasks from "../AcceptTasks";

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
      <AcceptTasks width="500px" height="500px" />
    </div>
  );
};

export default Example;
