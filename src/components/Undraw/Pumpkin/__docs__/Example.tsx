import React, { FC } from "react";
import Pumpkin from "../Pumpkin";

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
      <Pumpkin width="500px" height="500px" />
    </div>
  );
};

export default Example;
