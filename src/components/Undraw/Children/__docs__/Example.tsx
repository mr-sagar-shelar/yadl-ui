import React, { FC } from "react";
import Children from "../Children";

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
      <Children width="500px" height="500px" />
    </div>
  );
};

export default Example;
