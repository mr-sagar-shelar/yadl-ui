import React, { FC } from "react";
import Authentication from "../Authentication";

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
      <Authentication width="500px" height="500px" />
    </div>
  );
};

export default Example;
