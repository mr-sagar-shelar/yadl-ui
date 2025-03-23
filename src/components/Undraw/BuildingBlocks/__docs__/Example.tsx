import React, { FC } from "react";
import BuildingBlocks from "../BuildingBlocks";

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
      <BuildingBlocks width="500px" height="500px" />
    </div>
  );
};

export default Example;
