import React, { FC } from "react";
import MyUniverse from "../MyUniverse";

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
      <MyUniverse width="500px" height="500px" />
    </div>
  );
};

export default Example;
