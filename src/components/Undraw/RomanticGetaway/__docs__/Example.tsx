import React, { FC } from "react";
import RomanticGetaway from "../RomanticGetaway";

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
      <RomanticGetaway width="500px" height="500px" />
    </div>
  );
};

export default Example;
