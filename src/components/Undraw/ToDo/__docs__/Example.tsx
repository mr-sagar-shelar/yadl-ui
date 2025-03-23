import React, { FC } from "react";
import ToDo from "../ToDo";

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
      <ToDo width="500px" height="500px" />
    </div>
  );
};

export default Example;
