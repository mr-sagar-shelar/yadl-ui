import React, { FC } from "react";
import Coffee from "../Coffee";

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
      <Coffee width="500px" height="500px" />
    </div>
  );
};

export default Example;
