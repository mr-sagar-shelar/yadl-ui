import React, { FC } from "react";
import Books from "../Books";

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
      <Books width="500px" height="500px" />
    </div>
  );
};

export default Example;
