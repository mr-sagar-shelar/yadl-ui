import React, { FC } from "react";
import Cat from "../Cat";

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
      <Cat width="500px" height="500px" />
    </div>
  );
};

export default Example;
