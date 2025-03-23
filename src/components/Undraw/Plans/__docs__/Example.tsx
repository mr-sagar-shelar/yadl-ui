import React, { FC } from "react";
import Plans from "../Plans";

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
      <Plans width="500px" height="500px" />
    </div>
  );
};

export default Example;
