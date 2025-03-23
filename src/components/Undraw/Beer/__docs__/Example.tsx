import React, { FC } from "react";
import Beer from "../Beer";

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
      <Beer width="500px" height="500px" />
    </div>
  );
};

export default Example;
