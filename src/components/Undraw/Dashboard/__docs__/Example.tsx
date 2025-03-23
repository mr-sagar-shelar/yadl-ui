import React, { FC } from "react";
import Dashboard from "../Dashboard";

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
      <Dashboard width="500px" height="500px" />
    </div>
  );
};

export default Example;
