import React, { FC } from "react";
import PressPlay from "../PressPlay";

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
      <PressPlay width="500px" height="500px" />
    </div>
  );
};

export default Example;
