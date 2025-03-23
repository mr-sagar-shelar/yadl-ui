import React, { FC } from "react";
import DifferentLoveDifferentLove from "../DifferentLoveDifferentLove";

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
      <DifferentLoveDifferentLove width="500px" height="500px" />
    </div>
  );
};

export default Example;
