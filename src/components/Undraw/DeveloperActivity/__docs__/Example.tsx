import React, { FC } from "react";
import DeveloperActivity from "../DeveloperActivity";

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
      <DeveloperActivity width="500px" height="500px" />
    </div>
  );
};

export default Example;
