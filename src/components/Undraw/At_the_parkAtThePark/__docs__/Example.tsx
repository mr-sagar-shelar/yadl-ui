import React, { FC } from "react";
import At_the_parkAtThePark from "../At_the_parkAtThePark";

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
      <At_the_parkAtThePark width="500px" height="500px" />
    </div>
  );
};

export default Example;
