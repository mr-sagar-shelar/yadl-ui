import React, { FC } from "react";
import Designer from "../Designer";

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
      <Designer width="500px" height="500px" />
    </div>
  );
};

export default Example;
