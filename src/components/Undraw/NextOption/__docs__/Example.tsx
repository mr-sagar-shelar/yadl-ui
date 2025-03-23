import React, { FC } from "react";
import NextOption from "../NextOption";

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
      <NextOption width="500px" height="500px" />
    </div>
  );
};

export default Example;
