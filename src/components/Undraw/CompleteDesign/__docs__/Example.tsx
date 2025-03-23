import React, { FC } from "react";
import CompleteDesign from "../CompleteDesign";

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
      <CompleteDesign width="500px" height="500px" />
    </div>
  );
};

export default Example;
