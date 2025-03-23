import React, { FC } from "react";
import Coolness from "../Coolness";

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
      <Coolness width="500px" height="500px" />
    </div>
  );
};

export default Example;
