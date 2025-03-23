import React, { FC } from "react";
import DevProductivity from "../DevProductivity";

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
      <DevProductivity width="500px" height="500px" />
    </div>
  );
};

export default Example;
