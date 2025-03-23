import React, { FC } from "react";
import Visualization from "../Visualization";

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
      <Visualization width="500px" height="500px" />
    </div>
  );
};

export default Example;
