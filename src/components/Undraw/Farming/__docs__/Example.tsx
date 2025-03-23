import React, { FC } from "react";
import Farming from "../Farming";

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
      <Farming width="500px" height="500px" />
    </div>
  );
};

export default Example;
