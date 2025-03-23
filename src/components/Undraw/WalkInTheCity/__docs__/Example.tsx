import React, { FC } from "react";
import WalkInTheCity from "../WalkInTheCity";

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
      <WalkInTheCity width="500px" height="500px" />
    </div>
  );
};

export default Example;
