import React, { FC } from "react";
import Goals from "../Goals";

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
      <Goals width="500px" height="500px" />
    </div>
  );
};

export default Example;
